import { Prisma } from '@prisma/client';

export interface AchievementDTO {
    title: string;
    award: string | null;
}

export interface HistoryDTO {
    year: number;
    achievements: AchievementDTO[];
}

export type HistoryEventWithAwards = Prisma.History_EventGetPayload<{
    include: {
        history_awards: {
            select: {
                award: true;
            }
        }
    }
}>;

export function toHistoryDtoList(
    events: HistoryEventWithAwards[]
): HistoryDTO[] {

    const groupedByYear = events.reduce((acc, event) => {
        const year = event.year;

        if (!acc[year]) {
            acc[year] = [];
        }

        const awardString = event.history_awards
            .map((item) => item.award)
            .join(', ');

        acc[year].push({
            title: event.title,
            award: awardString.length > 0 ? awardString : null,
        });

        return acc;
    }, {} as Record<number, AchievementDTO[]>);

    return Object.keys(groupedByYear)
        .map((yearStr) => ({
            year: Number(yearStr),
            achievements: groupedByYear[Number(yearStr)],
        }))
        .sort((a, b) => b.year - a.year); // 연도 내림차순 정렬
}