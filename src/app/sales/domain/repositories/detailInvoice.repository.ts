import { DetailInvoiceEntity, detailsFK, PatchDetailInvoiceDto, UpdateDetailInvoiceDto } from "@/app/sales/domain";



export abstract class DetailInvoiceRepository {
    
    abstract createDetailInvoice(detailInvoiceDto: PatchDetailInvoiceDto, foreingKeys: detailsFK): Promise<DetailInvoiceEntity>;

    abstract getDetailInvoiceById(id: string): Promise<DetailInvoiceEntity>;

    abstract getAllDetailInvoices(): Promise<DetailInvoiceEntity[]>;

    abstract updateDetailInvoice(id: string, detailInvoiceDto: UpdateDetailInvoiceDto, foreingKeys: detailsFK): Promise<DetailInvoiceEntity>;

    abstract deleteDetailInvoice(id: string): Promise<void>;

}