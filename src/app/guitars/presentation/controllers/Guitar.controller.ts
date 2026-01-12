import { CustomError } from '@/errors';
import { GuitarRepository } from '@/app/guitars/domain';
import { Response, Request } from "express";

export class GuitarController {
    constructor(
        private readonly guitarRepository: GuitarRepository
    ) { }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
    }

    public createGuitar = async (req: Request, res: Response) => {
        try {
            await this.guitarRepository.createGuitar(req.body);
            return res.status(201).json({ message: "Guitar created successfully" });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public getAllGuitars = async (req: Request, res: Response) => {
        try {
            const guitars = await this.guitarRepository.getAllGuitars();
            return res.status(200).json(guitars);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public getGuitarById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const guitar = await this.guitarRepository.getGuitarById(id);
            return res.status(200).json(guitar);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public updateGuitar = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await this.guitarRepository.updateGuitar(id, req.body);
            return res.status(200).json({ message: "Guitar updated successfully" });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public deleteGuitar = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await this.guitarRepository.deleteGuitar(id);
            return res.status(204).json({ message: "Guitar deleted successfully" });
        } catch (error) {
            this.handleError(error, res);
        }
    }

}