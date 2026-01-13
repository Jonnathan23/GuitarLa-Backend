import HeaderInvoice from "@/data/models/invoices/HeaderInvoice.model";
import { CustomError, handleError } from "@/errors";
import { HeaderInvoiceDataSource, HeaderInvoiceEntity, PatchHeaderInvoiceDto, UpdateHeaderInvoiceDto } from "@/app/sales/domain";
import { HeaderInvoiceMapper } from "@/app/sales/infrastructure/mapprers/headerInvoice.mapper";


export class HeaderInvoiceDataSourceImpl implements HeaderInvoiceDataSource {

    async createHeaderInvoice(headerInvoiceDto: PatchHeaderInvoiceDto): Promise<HeaderInvoiceEntity> {
        const { inv_subTotal, inv_total, inv_client_name, inv_client_email, inv_client_phone, inv_quantity_items } = headerInvoiceDto;
        try {

            const newHeaderInvoice = await HeaderInvoice.create({ inv_subTotal, inv_total, inv_client_name, inv_client_email, inv_client_phone, inv_quantity_items });

            const headerInvoiceEntity = HeaderInvoiceMapper.toEntity(newHeaderInvoice);

            return headerInvoiceEntity;

        } catch (error) {
            console.log(error);
            throw handleError(error);
        }
    }

    async getHeaderInvoiceById(id: string): Promise<HeaderInvoiceEntity> {
        try {
            const headerInvoice = await HeaderInvoice.findByPk(id);
            if (!headerInvoice) throw new CustomError(404, "HeaderInvoice not found");

            const headerInvoiceEntity = HeaderInvoiceMapper.toEntity(headerInvoice);

            return headerInvoiceEntity;

        } catch (error) {
            console.log(error);
            throw handleError(error);
        }
    }

    async getAllHeaderInvoices(): Promise<HeaderInvoiceEntity[]> {
        try {
            const headerInvoices = await HeaderInvoice.findAll();
            const headerInvoiceEntities = headerInvoices.map((headerInvoice) => HeaderInvoiceMapper.toEntity(headerInvoice));
            return headerInvoiceEntities;
        } catch (error) {
            console.log(error);
            throw handleError(error);
        }
    }

    async updateHeaderInvoice(id: string, headerInvoiceDto: UpdateHeaderInvoiceDto): Promise<HeaderInvoiceEntity> {
        try {
            const headerInvoice = await HeaderInvoice.findByPk(id);
            if (!headerInvoice) throw new CustomError(404, "HeaderInvoice not found");

            headerInvoice.inv_subTotal = headerInvoiceDto.inv_subTotal ?? headerInvoice.inv_subTotal;
            headerInvoice.inv_total = headerInvoiceDto.inv_total ?? headerInvoice.inv_total;
            headerInvoice.inv_client_name = headerInvoiceDto.inv_client_name ?? headerInvoice.inv_client_name;
            headerInvoice.inv_client_email = headerInvoiceDto.inv_client_email ?? headerInvoice.inv_client_email;
            headerInvoice.inv_client_phone = headerInvoiceDto.inv_client_phone ?? headerInvoice.inv_client_phone;
            headerInvoice.inv_quantity_items = headerInvoiceDto.inv_quantity_items ?? headerInvoice.inv_quantity_items;

            await headerInvoice.save();

            const headerInvoiceEntity = HeaderInvoiceMapper.toEntity(headerInvoice);

            return headerInvoiceEntity;

        } catch (error) {
            console.log(error);
            throw handleError(error);
        }
    }

    async deleteHeaderInvoice(id: string): Promise<void> {
        try {
            const headerInvoice = await HeaderInvoice.findByPk(id);
            if (!headerInvoice) throw new CustomError(404, "HeaderInvoice not found");

            await headerInvoice.destroy();
        } catch (error) {
            console.log(error);
            throw handleError(error);
        }
    }

}