import { HeaderInvoiceDataSource, HeaderInvoiceEntity, HeaderInvoiceRepository, PatchHeaderInvoiceDto, UpdateHeaderInvoiceDto } from "@/app/sales/domain";


export class HeaderInvoiceRepositoryImpl implements HeaderInvoiceRepository {

    constructor(
        private headerInvoiceDataSource: HeaderInvoiceDataSource
    ) { }

    async createHeaderInvoice(headerInvoiceDto: PatchHeaderInvoiceDto): Promise<HeaderInvoiceEntity> {
        return this.headerInvoiceDataSource.createHeaderInvoice(headerInvoiceDto);
    }

    async getHeaderInvoiceById(id: string): Promise<HeaderInvoiceEntity> {
        return this.headerInvoiceDataSource.getHeaderInvoiceById(id);
    }

    async getAllHeaderInvoices(): Promise<HeaderInvoiceEntity[]> {
        return this.headerInvoiceDataSource.getAllHeaderInvoices();
    }

    async updateHeaderInvoice(id: string, headerInvoiceDto: UpdateHeaderInvoiceDto): Promise<HeaderInvoiceEntity> {
        return this.headerInvoiceDataSource.updateHeaderInvoice(id, headerInvoiceDto);
    }

    async deleteHeaderInvoice(id: string): Promise<void> {
        return this.headerInvoiceDataSource.deleteHeaderInvoice(id);
    }

}