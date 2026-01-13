import { PatchDetailInvoiceDto, DetailInvoiceEntity, UpdateDetailInvoiceDto, DetailInvoiceRepository, DetailInvoiceDataSource, detailsFK } from "@/app/sales/domain";



export class DetailInvoiceRepositoryImpl implements DetailInvoiceRepository {
    constructor(
        private detailInvoiceDataSource: DetailInvoiceDataSource
    ) { }

    createDetailInvoice(detailInvoiceDto: PatchDetailInvoiceDto, foreingKeys: detailsFK): Promise<DetailInvoiceEntity> {
        return this.detailInvoiceDataSource.createDetailInvoice(detailInvoiceDto, foreingKeys);
    }

    getDetailInvoiceById(id: string): Promise<DetailInvoiceEntity> {
        return this.detailInvoiceDataSource.getDetailInvoiceById(id);
    }

    getAllDetailInvoices(): Promise<DetailInvoiceEntity[]> {
        return this.detailInvoiceDataSource.getAllDetailInvoices();
    }

    updateDetailInvoice(id: string, detailInvoiceDto: UpdateDetailInvoiceDto, foreingKeys: detailsFK): Promise<DetailInvoiceEntity> {
        return this.detailInvoiceDataSource.updateDetailInvoice(id, detailInvoiceDto, foreingKeys);
    }
    
    deleteDetailInvoice(id: string): Promise<void> {
        return this.detailInvoiceDataSource.deleteDetailInvoice(id);
    }
}