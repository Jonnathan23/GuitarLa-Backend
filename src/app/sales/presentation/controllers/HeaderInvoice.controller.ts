import { Response, Request } from 'express';

import { CustomError } from '@/errors';
import { HeaderInvoiceRepository, PatchHeaderInvoiceDto, UpdateHeaderInvoiceDto } from '@/app/sales/domain';

export class HeaderInvoiceController {
    
    constructor(
        private readonly headerInvoiceRepository: HeaderInvoiceRepository
    ) { }
    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
    }

    public createHeaderInvoice = async (req: Request, res: Response) => {
        try {
            const [error, headerInvoiceDto] = PatchHeaderInvoiceDto.create(req.body)
            if (error) {
                return res.status(400).json({ message: error });
            }
            
            await this.headerInvoiceRepository.createHeaderInvoice(headerInvoiceDto!);
            return res.status(201).json({ message: "HeaderInvoice created successfully" });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public getAllHeaderInvoices = async (req: Request, res: Response) => {
        try {
            const headerInvoices = await this.headerInvoiceRepository.getAllHeaderInvoices();
            return res.status(200).json(headerInvoices);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public getHeaderInvoiceById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const headerInvoice = await this.headerInvoiceRepository.getHeaderInvoiceById(id);
            return res.status(200).json(headerInvoice);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public updateHeaderInvoice = async (req: Request, res: Response) => {
        try {
            const [error, headerInvoiceDto] = UpdateHeaderInvoiceDto.create(req.body)
            if (error) {
                return res.status(400).json({ message: error });
            }
            const id = req.params.id;
            await this.headerInvoiceRepository.updateHeaderInvoice(id, headerInvoiceDto!);
            return res.status(200).json({ message: "HeaderInvoice updated successfully" });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public deleteHeaderInvoice = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await this.headerInvoiceRepository.deleteHeaderInvoice(id);
            return res.status(204).json({ message: "HeaderInvoice deleted successfully" });
        } catch (error) {
            this.handleError(error, res);
        }
    }
}