import { CustomError } from "./errors";


export const handleError = (error: unknown): never => {

    if (error instanceof CustomError) {
        throw error;
    }

    throw CustomError.internal();
}