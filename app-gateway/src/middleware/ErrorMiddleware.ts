import {NextFunction, Request, Response} from 'express';
import BaseErrorException from '../exceptions/BaseErrorException';

class ErrorMiddleware {
    public errorMiddleware(error: BaseErrorException, req: Request, res: Response, next: NextFunction) {
        const status: number = error.status || 500;

        if (status === 500) {
            error.message = 'Error internal server';
            error.invalidParams = undefined;
        }

        res.status(status).send(error);

    }
}

export default new ErrorMiddleware().errorMiddleware;
