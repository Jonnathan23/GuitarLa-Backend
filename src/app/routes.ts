import { Router } from "express";
import { GuitarRoutes } from "./guitars/presentation/routes";

export class AppRouter {
    static get routes(): Router {
        const router = Router();

        router.use('/api', GuitarRoutes.routes)

        return router;
    }
}