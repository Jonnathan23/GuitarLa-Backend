import { HeaderInvoiceEntity, PatchHeaderInvoiceDto } from "..";

export abstract class HeaderInvoiceRepository {
    
    abstract createHeaderInvoice(headerInvoiceDto: PatchHeaderInvoiceDto): Promise<HeaderInvoiceEntity>;

    abstract getHeaderInvoiceById(id: string): Promise<HeaderInvoiceEntity>;

    abstract getAllHeaderInvoices(): Promise<HeaderInvoiceEntity[]>;

    abstract updateHeaderInvoice(id: string, headerInvoiceDto: PatchHeaderInvoiceDto): Promise<HeaderInvoiceEntity>;

    abstract deleteHeaderInvoice(id: string): Promise<void>;
}