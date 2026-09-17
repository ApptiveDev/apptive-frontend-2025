import { defineConfig } from "@prisma/config";
import dotenv from 'dotenv';
import path from 'path';

// prisma/ 폴더 하위에 위치한 .env 파일의 경로를 명시적으로 지정
dotenv.config({ path: path.resolve(process.cwd(), 'prisma/.env') });

// defineConfig로 DB URL 설정
export default defineConfig({
    schema: 'prisma/schema.prisma',
    datasource: {
        url: process.env.DATABASE_URL
    }
});