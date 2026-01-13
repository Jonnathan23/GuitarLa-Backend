import { PatchDetailInvoiceDto, DetailInvoiceEntity, UpdateDetailInvoiceDto, DetailInvoiceRepository, DetailInvoiceDataSource } from "@/app/sales/domain";



export class DetailInvoiceRepositoryImpl implements DetailInvoiceRepository {
    constructor(
        private detailInvoiceDataSource: DetailInvoiceDataSource
    ) { }

    createDetailInvoice(detailInvoiceDto: PatchDetailInvoiceDto): Promise<DetailInvoiceEntity> {
        return this.detailInvoiceDataSource.createDetailInvoice(detailInvoiceDto);
    }

    getDetailInvoiceById(id: string): Promise<DetailInvoiceEntity> {
        return this.detailInvoiceDataSource.getDetailInvoiceById(id);
    }

    getAllDetailInvoices(): Promise<DetailInvoiceEntity[]> {
        return this.detailInvoiceDataSource.getAllDetailInvoices();
    }

    updateDetailInvoice(id: string, detailInvoiceDto: UpdateDetailInvoiceDto): Promise<DetailInvoiceEntity> {
        return this.detailInvoiceDataSource.updateDetailInvoice(id, detailInvoiceDto);
    }
    
    deleteDetailInvoice(id: string): Promise<void> {
        return this.detailInvoiceDataSource.deleteDetailInvoice(id);
    }
}