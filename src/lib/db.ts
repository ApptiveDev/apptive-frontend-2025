import { PrismaClient } from "@prisma/client";
import path from "path"

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

// 프로젝트 루트 경로를 기준으로 prisma/dev.db의 절대 경로 생성
const dbPath = path.resolve(process.cwd(), "prisma/dev.db");
// Windows 경로 구분자(\)를 표준 URI 슬래시(/)로 변환
const normalizedDbPath = dbPath.replace(/\\/g, "/");
const dbUrl = `file:${normalizedDbPath}`;

export const db =
    globalForPrisma.prisma ??
    new PrismaClient({
        datasources: {
            db: {
                url: dbUrl,
            },
        },
        log: ["query", "error", "warn"],
    });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;