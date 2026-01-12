
import { AppRouter } from '@/app/routes';
import { Server } from '@/app/server';
import { CorsConfig, envs } from '@/config';
import { DatabaseConnection } from '@/data/db';


(() => {
    main();
})();


async function main() {
    const routes = AppRouter.routes;
    const cors = new CorsConfig({
        FRONTEND_URL: envs.FRONTEND_URL,
        argv_2: envs.DEVELOPMENT,
        NODE_ENV: envs.NODE_ENV
    })

    const db = new DatabaseConnection({
        ulrDatabase: envs.DATABASE_URL,
        logging: envs.DEVELOPMENT ? true : false
    })

    await db.connect()

    const server = new Server({
        port: envs.PORT,
        routes,
        cors
    })

    await server.start();

}