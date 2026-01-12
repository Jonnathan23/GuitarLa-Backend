import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../../../errors/errors";


export function validateHeaderInvoice(req: Request, res: Response, next: NextFunction) {
    try {

        const id = req.params.id;
        const headerInvoice = req.body;

        if (!id || !headerInvoice) {
            throw new CustomError(400, "Missing required fields");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }

}