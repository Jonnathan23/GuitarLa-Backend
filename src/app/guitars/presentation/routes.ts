import { Router } from 'express';
import { validateGuitarId, GuitarController } from '@/app/guitars/presentation';
import { GuitarPostgresDataSource, GuitarRepositoryImpl } from '@/app/guitars/infrastructure';

export class GuitarRoutes {

    static get routes(): Router {
        const router = Router();
        const guitarDataSource = new GuitarPostgresDataSource();
        const guitarRepository = new GuitarRepositoryImpl(guitarDataSource);
        const guitarController = new GuitarController(guitarRepository);

        router.post('/guitars', guitarController.createGuitar)

        router.get('/guitars', guitarController.getAllGuitars)

        router.get('/guitars/:id',
            validateGuitarId,
            guitarController.getGuitarById
        )

        router.put('/guitars/:id',
            validateGuitarId,
            guitarController.updateGuitar
        )

        router.delete('/guitars/:id',
            validateGuitarId,
            guitarController.deleteGuitar
        )

        return router;
    }

}