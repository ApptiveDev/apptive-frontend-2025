'use server'

import { db } from '@/lib/db'

export default async function getHistory(year: number) {
    const yearHistories = await db.post.findMany({
        where: {
            year: year
        }
    })

    return yearHistories
}