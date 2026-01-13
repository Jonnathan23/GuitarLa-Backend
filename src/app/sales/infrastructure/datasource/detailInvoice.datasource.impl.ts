import { DetailInvoiceDataSource, DetailInvoiceEntity, detailsFK, PatchDetailInvoiceDto, UpdateDetailInvoiceDto } from "@/app/sales/domain";
import DetailInvoice from "@/data/models/invoices/DetailInvoice.model";
import { CustomError, handleError } from "@/errors";
import { DetailInvoiceMapper } from "../mapprers/detailInvoice.mapper";

export class DetailInvoiceDataSourceImpl implements DetailInvoiceDataSource {


    async createDetailInvoice(detailInvoiceDto: PatchDetailInvoiceDto, foreingKeys: detailsFK): Promise<DetailInvoiceEntity> {
        const { det_price, det_quantity, det_subTotal } = detailInvoiceDto;
        const { det_inv_id, det_guitar_id } = foreingKeys;
        try {
            const newDetailInvoice = await DetailInvoice.create({ det_price, det_quantity, det_subTotal, det_inv_id, det_guitar_id });
            const detailInvoiceEntity = DetailInvoiceMapper.toEntity(newDetailInvoice);
            return detailInvoiceEntity;
        } catch (error) {
            console.log(error);
            throw handleError(error);
        }
    }




    async getDetailInvoiceById(id: string): Promise<DetailInvoiceEntity> {
        try {
            const detailInvoice = await DetailInvoice.findByPk(id);
            if (!detailInvoice) throw new CustomError(404, "DetailInvoice not found");

            const detailInvoiceEntity = DetailInvoiceMapper.toEntity(detailInvoice);
            return detailInvoiceEntity;

        } catch (error) {
            console.log(error);
            throw handleError(error);
        }
    }

    async getAllDetailInvoices(): Promise<DetailInvoiceEntity[]> {
        try {
            const detailInvoices = await DetailInvoice.findAll();
            const detailInvoicesEntity = detailInvoices.map((detailInvoice) => DetailInvoiceMapper.toEntity(detailInvoice));
            return detailInvoicesEntity;
        } catch (error) {
            console.log(error);
            throw handleError(error);
        }
    }

    async updateDetailInvoice(id: string, detailInvoiceDto: UpdateDetailInvoiceDto, foreingKeys: detailsFK): Promise<DetailInvoiceEntity> {
        try {
            const detailInvoice = await DetailInvoice.findByPk(id);
            const { det_inv_id, det_guitar_id } = foreingKeys;
            if (!detailInvoice) throw new CustomError(404, "DetailInvoice not found");

            detailInvoice.det_price = detailInvoiceDto.det_price ?? detailInvoice.det_price;
            detailInvoice.det_quantity = detailInvoiceDto.det_quantity ?? detailInvoice.det_quantity;
            detailInvoice.det_subTotal = detailInvoiceDto.det_subTotal ?? detailInvoice.det_subTotal;
            detailInvoice.det_inv_id = det_inv_id;
            detailInvoice.det_guitar_id = det_guitar_id;

            await detailInvoice.save();

            const detailInvoiceEntity = DetailInvoiceMapper.toEntity(detailInvoice);
            return detailInvoiceEntity;
        } catch (error) {
            console.log(error);
            throw handleError(error);
        }
    }

    async deleteDetailInvoice(id: string): Promise<void> {
        try {
            const detailInvoice = await DetailInvoice.findByPk(id);
            if (!detailInvoice) throw new CustomError(404, "DetailInvoice not found");

            await detailInvoice.destroy();
        } catch (error) {
            console.log(error);
            throw handleError(error);
        }
    }
}