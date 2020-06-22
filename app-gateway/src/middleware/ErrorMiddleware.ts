import {NextFunction, Request, Response} from 'express';
import BaseErrorException from '../exceptions/BaseErrorException';
import ServerInternalErrorException from '../exceptions/ServerInternalErrorException';


class ErrorMiddleware {
    public errorMiddleware(error: BaseErrorException, req: Request, res: Response, next: NextFunction) {
        const statusCode: number = error.statusCode || 500;

        if (statusCode === 500) {
            error = new ServerInternalErrorException();
        }

        res.status(statusCode).send(error);
    }
}

export default new ErrorMiddleware().errorMiddleware;
