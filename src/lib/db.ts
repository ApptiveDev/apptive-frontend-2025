import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { getCloudflareContext } from "@opennextjs/cloudflare";

// D1 연결마다 PrismaClient를 하나씩만 만들어 재사용
const clients = new WeakMap<object, PrismaClient>();

export function getPrisma() {
    const { env } = getCloudflareContext();
    const d1 = (env as unknown as { DB: ConstructorParameters<typeof PrismaD1>[0] }).DB;
    let client = clients.get(d1);
    if (!client) {
        client = new PrismaClient({ adapter: new PrismaD1(d1) });
        clients.set(d1, client);
    }
    return client;
}

// 기존 코드의 db.xxx 호출을 그대로 쓸 수 있게 해 주는 래퍼
export const db = new Proxy({} as PrismaClient, {
    get(_target, prop) {
        const client = getPrisma();
        const value = Reflect.get(client, prop);
        return typeof value === "function" ? value.bind(client) : value;
    },
});