import { Router } from 'express';
import { DetailInvoiceController, HeaderInvoiceController, validateParamUUID } from '@/app/sales/presentation';
import { DetailInvoiceDataSourceImpl, DetailInvoiceRepositoryImpl, HeaderInvoiceDataSourceImpl, HeaderInvoiceRepositoryImpl } from '@/app/sales/infrastructure';


export class SalesRouter {
    static get routes(): Router {
        const router = Router();

        router.param('id', validateParamUUID)

        //* Header Invoice
        const headerInvoiceDatasource = new HeaderInvoiceDataSourceImpl();
        const headerInvoiceRepository = new HeaderInvoiceRepositoryImpl(headerInvoiceDatasource);
        const headerInvoiceController = new HeaderInvoiceController(headerInvoiceRepository);

        // Posts
        router.post('/header-invoice', headerInvoiceController.createHeaderInvoice);


        // Gets
        router.get('/header-invoice', headerInvoiceController.getAllHeaderInvoices);

        router.get('/header-invoice/:id', headerInvoiceController.getHeaderInvoiceById);


        // Patches
        router.patch('/header-invoice/:id', headerInvoiceController.updateHeaderInvoice);


        // Deletes
        router.delete('/header-invoice/:id', headerInvoiceController.deleteHeaderInvoice);

        //* Detail Invoice
        const detailInvoiceDatasource = new DetailInvoiceDataSourceImpl();
        const detailInvoiceRepository = new DetailInvoiceRepositoryImpl(detailInvoiceDatasource);
        const detailInvoiceController = new DetailInvoiceController(detailInvoiceRepository);

        // Posts
        router.post('/detail-invoice', detailInvoiceController.createDetailInvoice);

        // Gets
        router.get('/detail-invoice', detailInvoiceController.getAllDetailInvoices);

        router.get('/detail-invoice/:id', detailInvoiceController.getDetailInvoiceById);

        // Patches
        router.patch('/detail-invoice/:id', detailInvoiceController.updateDetailInvoice);

        // Deletes
        router.delete('/detail-invoice/:id', detailInvoiceController.deleteDetailInvoice);

        return router;
    }
}