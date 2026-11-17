import "dotenv/config";
import { defineConfig } from "@prisma/config";
import path from "path";
import { pathToFileURL } from "url";

// dev.db 파일의 절대 경로를 올바른 file:// URL 프로토콜로 변환
const dbUrl = pathToFileURL(path.resolve(__dirname, "prisma/dev.db")).href;

export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
    },
    datasource: {
        url: dbUrl,
    },
});