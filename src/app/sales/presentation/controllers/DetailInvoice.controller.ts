import { Response, Request } from "express";

import { DetailInvoiceRepository, PatchDetailInvoiceDto, UpdateDetailInvoiceDto } from "@/app/sales/domain";
import { CustomError } from "@/errors";


export class DetailInvoiceController {

    constructor(
        private readonly detailInvoiceRepository: DetailInvoiceRepository
    ) { }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
    }

    public createDetailInvoice = async (req: Request, res: Response) => {
        try {
            const { det_inv_id, det_guitar_id } = req.params;

            const data = {
                ...req.body,
                det_inv_id,
                det_guitar_id
            }
            const [error, detailInvoice] = PatchDetailInvoiceDto.create(data);
            if (error) return res.status(400).json({ message: error });

            await this.detailInvoiceRepository.createDetailInvoice(detailInvoice!);
            return res.status(201).json({ message: "DetailInvoice created successfully" });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public getAllDetailInvoices = async (req: Request, res: Response) => {
        try {
            const { det_inv_id } = req.params;
            const detailInvoices = await this.detailInvoiceRepository.getAllDetailInvoices(det_inv_id);
            return res.status(200).json(detailInvoices);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public getDetailInvoiceById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const detailInvoice = await this.detailInvoiceRepository.getDetailInvoiceById(id);
            return res.status(200).json(detailInvoice);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public updateDetailInvoice = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const { det_inv_id, det_guitar_id } = req.params;

            const data = {
                ...req.body,
                det_inv_id,
                det_guitar_id
            }

            const [error, detailInvoice] = UpdateDetailInvoiceDto.create(data);
            if (error) return res.status(400).json({ message: error });

            await this.detailInvoiceRepository.updateDetailInvoice(id, detailInvoice!);
            return res.status(200).json({ message: "DetailInvoice updated successfully" });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public deleteDetailInvoice = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await this.detailInvoiceRepository.deleteDetailInvoice(id);
            return res.status(204).json({ message: "DetailInvoice deleted successfully" });
        } catch (error) {
            this.handleError(error, res);
        }
    }
}