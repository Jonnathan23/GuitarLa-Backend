import { Router } from "express";
import { HeaderInvoiceController } from "./controllers/HeaderInvoice.controller";
import { HeaderInvoiceDataSourceImpl } from "../infrastructure/datasource/headerInvoice.datasource.impl";
import { HeaderInvoiceRepositoryImpl } from "../infrastructure/repositories/headerInvoice.repository.impl";
import { validateHeaderInvoice } from "./middlewares/validate.middleware";


export class SalesRouter {
    static get routes(): Router {
        const router = Router();

        //* Header Invoice
        const headerInvoiceDatasource = new HeaderInvoiceDataSourceImpl();
        const headerInvoiceRepository = new HeaderInvoiceRepositoryImpl(headerInvoiceDatasource);
        const headerInvoiceController = new HeaderInvoiceController(headerInvoiceRepository);

        // Posts
        router.post('/header-invoice', headerInvoiceController.createHeaderInvoice)

        
        // Gets
        router.get('/header-invoice', headerInvoiceController.getAllHeaderInvoices)

        router.get('/header-invoice/:id',
            validateHeaderInvoice,
            headerInvoiceController.getHeaderInvoiceById
        )


        // Patches
        router.patch('/header-invoice/:id',
            validateHeaderInvoice,
            headerInvoiceController.updateHeaderInvoice
        )


        // Deletes
        router.delete('/header-invoice/:id',
            validateHeaderInvoice,
            headerInvoiceController.deleteHeaderInvoice
        )

        //* Detail Invoice


        return router;
    }
}