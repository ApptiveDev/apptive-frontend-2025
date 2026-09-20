import 'server-only';
import { db } from '@/lib/db'
import { CurriculumData, toCurriculumRecord } from "@/app/curriculum_dto"

export async function getAllCurriculums(): Promise<CurriculumData> {
    const curriculums = await db.study_Curriculum.findMany()
    return toCurriculumRecord(curriculums)
}