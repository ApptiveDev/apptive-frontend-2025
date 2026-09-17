import {Prisma, Jobs} from "@prisma/client";

type Position =
    | "기획"
    | "디자인"
    | "프론트엔드"
    | "안드로이드"
    | "백엔드"
    | "게임";

interface CurriculumItem {
    title: string;
}

export type CurriculumData = Record<Position, CurriculumItem[]>;

// 받아오는 Entity 형식. 전체 Entity를 가지고 온다.
export type StudyCurriculums = Prisma.Study_CurriculumGetPayload<{
    select: {
        job: true
        order: true
        content: true
    }
}>[];

export const JOBS_TO_POSITION: Record<Jobs, Position> = {
    [Jobs.PM]: "기획",
    [Jobs.DESIGN]: "디자인",
    [Jobs.FRONTEND]: "프론트엔드",
    [Jobs.ANDROID]: "안드로이드",
    [Jobs.BACKEND]: "백엔드",
    [Jobs.GAME]: "게임",
};

// 프론트에 적혀있던 Record 형태로 변형
export function toCurriculumRecord(entities: StudyCurriculums){
    const result: CurriculumData = {
        "기획":[],
        "디자인":[],
        "프론트엔드":[],
        "안드로이드":[],
        "백엔드":[],
        "게임":[]
    }

    for (const entity of entities) {
        // ENUM 원리 - TS @map('DB에 사용할 값')
        const position = JOBS_TO_POSITION[entity.job];

        if (position && result[position]) {
            const curriculumItem: CurriculumItem = {
                title: entity.content
            };
            result[position].push(curriculumItem);
        }
    }

    return result;
}





