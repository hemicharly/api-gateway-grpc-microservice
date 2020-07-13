import {NextFunction, Request, Response} from 'express';
import AuthenticatorService from '../api/authenticator/AuthenticatorService';




export default class CheckedAuth {

    public static async checked(req: Request, res: Response, next: NextFunction): Promise<void> {
        const token: string = req.headers.authorization || String(req.query.token);
        try {
            await AuthenticatorService.checkJWT(token);
            next();
        } catch (error) {
            next(error);
        }
    }
}
