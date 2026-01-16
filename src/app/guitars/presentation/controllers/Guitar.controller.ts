import { CustomError } from '@/errors';
import { GuitarRepository, PatchGuitarDto, UpdateGuitarDto } from '@/app/guitars/domain';
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
            const [error, guitarDto] = PatchGuitarDto.create(req.body)
            if (error) {
                return res.status(400).json({ message: error });
            }

            await this.guitarRepository.createGuitar(guitarDto!);
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
            const [error, guitarDto] = UpdateGuitarDto.create(req.body)
            if (error) {
                return res.status(400).json({ message: error });
            }
            const id = req.params.id;
            await this.guitarRepository.updateGuitar(id, guitarDto!);
            return res.status(200).json({ message: "Guitar updated successfully" });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public deleteGuitar = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await this.guitarRepository.deleteGuitar(id);
            console.log("Guitar deleted successfully");
            return res.status(200).json({ message: "Guitar deleted successfully" });
        } catch (error) {
            this.handleError(error, res);
        }
    }
}