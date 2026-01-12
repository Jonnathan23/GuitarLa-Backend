import { Router } from 'express';
import { validateGuitarId, GuitarController } from '@/app/guitars/presentation';
import { GuitarPostgresDataSource, GuitarRepositoryImpl } from '@/app/guitars/infrastructure';

export class GuitarRoutes {

    static get routes(): Router {
        const router = Router();
        const guitarDataSource = new GuitarPostgresDataSource();
        const guitarRepository = new GuitarRepositoryImpl(guitarDataSource);
        const guitarController = new GuitarController(guitarRepository);

        router.use('/guitars', guitarController.createGuitar)

        router.use('/guitars', guitarController.getAllGuitars)

        router.use('/guitars/:id',
            validateGuitarId,
            guitarController.getGuitarById
        )

        router.use('/guitars/:id',
            validateGuitarId,
            guitarController.updateGuitar
        )

        router.use('/guitars/:id',
            validateGuitarId,
            guitarController.deleteGuitar
        )

        return router;
    }

}