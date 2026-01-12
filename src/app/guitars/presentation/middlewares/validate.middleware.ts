import { NextFunction, Request, Response } from "express";
import { validateUUID } from "../../../../utils/utils";

export const validateGuitarId = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    if (!id) {
        return res.status(400).json({ message: "Missing id" });
    }
    
    const validation = validateUUID(id);
    if (!validation) {
        return res.status(400).json({ message: "Invalid UUID format" });
    }

    next();
}