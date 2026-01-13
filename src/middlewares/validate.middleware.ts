import { NextFunction, Request, Response } from "express";
import { CustomError } from "@/errors";
import { validateUUID } from "@/utils/utils";


export function validateParamUUID(req: Request, res: Response, next: NextFunction) {
    try {

        const id = req.params.id;

        if (!id) {
            throw new CustomError(400, "Missing required fields");
        }

        if (!validateUUID(id)) {
            throw new CustomError(400, "Invalid UUID");
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }

}