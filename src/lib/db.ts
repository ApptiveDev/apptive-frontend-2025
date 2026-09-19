import path from 'path';
import dotenv from 'dotenv';

// 1. prisma/.env 로드
dotenv.config({ path: path.resolve(process.cwd(), 'prisma/.env') });

import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

// 2. 파일 경로를 Absolute Path(절대 경로)로 명확히 변환
const dbPath = path.resolve(process.cwd(), 'prisma/dev.db');

// 3. better-sqlite3 동기 인스턴스 직접 생성 및 어댑터 생성
const adapter = new PrismaBetterSqlite3({ url: dbPath });

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const db =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter,
    });

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = db;
}