import { PatchDetailInvoiceDto, UpdateDetailInvoiceDto, DetailInvoiceEntity } from "@/app/sales/domain";

export interface detailsFK {
    det_inv_id: string;
    det_guitar_id: string;
}

export abstract class DetailInvoiceDataSource {

    abstract createDetailInvoice(detailInvoiceDto: PatchDetailInvoiceDto, foreingKeys: detailsFK): Promise<DetailInvoiceEntity>;

    abstract getDetailInvoiceById(id: string): Promise<DetailInvoiceEntity>;

    abstract getAllDetailInvoices(): Promise<DetailInvoiceEntity[]>;

    abstract updateDetailInvoice(id: string, detailInvoiceDto: UpdateDetailInvoiceDto, foreingKeys: detailsFK): Promise<DetailInvoiceEntity>;

    abstract deleteDetailInvoice(id: string): Promise<void>;

}