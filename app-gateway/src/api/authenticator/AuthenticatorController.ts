import {NextFunction, Request, Response} from 'express';
import * as HttpStatus from 'http-status-codes';
import AuthenticatorService from './AuthenticatorService';
import AuthenticatorTransformer from './AuthenticatorTransformer';


export default class AuthenticatorController {

    public static async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await AuthenticatorService.findAll();
            res.status(HttpStatus.OK).send(response);
        } catch (error) {
            next(error);
        }
    }

    public static async token(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const authenticatorRequest = await AuthenticatorTransformer.toApi(req.body);

            const response = await AuthenticatorService.token(authenticatorRequest);

            res.status(HttpStatus.CREATED).send(response);

        } catch (error) {
            next(error);
        }
    }
}
