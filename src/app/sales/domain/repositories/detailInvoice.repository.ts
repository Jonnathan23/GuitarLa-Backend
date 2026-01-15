import { DetailInvoiceEntity, detailsFK, PatchDetailInvoiceDto, UpdateDetailInvoiceDto } from "@/app/sales/domain";



export abstract class DetailInvoiceRepository {
    
    abstract createDetailInvoice(detailInvoiceDto: PatchDetailInvoiceDto): Promise<DetailInvoiceEntity>;

    abstract getDetailInvoiceById(id: string): Promise<DetailInvoiceEntity>;

    abstract getAllDetailInvoices(det_inv_id: detailsFK['det_inv_id']): Promise<DetailInvoiceEntity[]>;

    abstract updateDetailInvoice(id: string, detailInvoiceDto: UpdateDetailInvoiceDto): Promise<DetailInvoiceEntity>;

    abstract deleteDetailInvoice(id: string): Promise<void>;

}