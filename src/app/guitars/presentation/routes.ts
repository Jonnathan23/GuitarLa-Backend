import { Router } from 'express';
import { GuitarController } from '@/app/guitars/presentation';
import { GuitarPostgresDataSource, GuitarRepositoryImpl } from '@/app/guitars/infrastructure';
import { validateParamUUID } from '@/middlewares/validate.middleware';

export class GuitarRoutes {

    static get routes(): Router {
        const router = Router();

        router.param('id', validateParamUUID);

        const guitarDataSource = new GuitarPostgresDataSource();
        const guitarRepository = new GuitarRepositoryImpl(guitarDataSource);
        const guitarController = new GuitarController(guitarRepository);

        router.post('/guitars', guitarController.createGuitar);

        router.get('/guitars', guitarController.getAllGuitars);

        router.get('/guitars/:id', guitarController.getGuitarById);

        router.put('/guitars/:id', guitarController.updateGuitar);

        router.delete('/guitars/:id', guitarController.deleteGuitar);

        return router;
    }

}