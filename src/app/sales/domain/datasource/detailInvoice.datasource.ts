import { PatchDetailInvoiceDto, UpdateDetailInvoiceDto, DetailInvoiceEntity } from "@/app/sales/domain";

export interface detailsFK {
    det_inv_id: string;
    det_guitar_id: string;
}

export abstract class DetailInvoiceDataSource {

    abstract createDetailInvoice(detailInvoiceDto: PatchDetailInvoiceDto): Promise<DetailInvoiceEntity>;

    abstract getDetailInvoiceById(id: string): Promise<DetailInvoiceEntity>;

    abstract getAllDetailInvoices(det_inv_id: detailsFK['det_inv_id']): Promise<DetailInvoiceEntity[]>;

    abstract updateDetailInvoice(id: string, detailInvoiceDto: UpdateDetailInvoiceDto): Promise<DetailInvoiceEntity>;

    abstract deleteDetailInvoice(id: string): Promise<void>;

}