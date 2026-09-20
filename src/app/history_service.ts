import 'server-only';
import { db } from '@/lib/db';
import { toHistoryDtoList, HistoryDTO} from "@/app/history_dto";

export async function getAllHistories(): Promise<HistoryDTO[]> {

    const events = await db.history_Event.findMany({
        include: {
            history_awards: {
                select: {
                    award: true,
                },
            },
        },
        orderBy: {
            year: 'desc',
        },
    });

    // DB 결과를 HistoryDTO[] 형태로 변환해서 반환
    return toHistoryDtoList(events);
}