import 'server-only';
import { db } from '@/lib/db'
import { CurriculumData, toCurriculumRecord } from "@/app/curriculum_dto"

export async function getAllCurriculums(): Promise<CurriculumData> {
    const curriculums = await db.study_Curriculum.findMany({
        where: {
            class: 26,
            term: 2
        }
    })
    return toCurriculumRecord(curriculums)
}