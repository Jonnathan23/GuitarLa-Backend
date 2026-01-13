import { Router } from 'express';
import { GuitarRoutes } from '@/app/guitars/presentation';
import { SalesRouter } from './sales/presentation';

export class AppRouter {
    static get routes(): Router {
        const router = Router();

        router.use('/api', GuitarRoutes.routes);
        router.use('/api', SalesRouter.routes);

        return router;
    }
}