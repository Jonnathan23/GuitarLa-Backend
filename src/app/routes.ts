import { Router } from 'express';
import { GuitarRoutes } from '@/app/guitars/presentation';

export class AppRouter {
    static get routes(): Router {
        const router = Router();

        router.use('/api', GuitarRoutes.routes)

        return router;
    }
}