import { Router } from "express";
import { validateGuitarId } from "./middlewares/validate.middleware";
import { GuitarController } from "./controllers/Guitar.controller";
import { GuitarPostgresDataSource, GuitarRepositoryImpl } from "../infrastructure";

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