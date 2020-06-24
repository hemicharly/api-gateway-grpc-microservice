import {NextFunction, Request, Response} from 'express';
import * as HttpStatus from 'http-status-codes';
import AuthenticatorService from './AuthenticatorService';
import AuthenticatorTransformer from './AuthenticatorTransformer';


class AuthenticatorController {

    public async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await AuthenticatorService.findAll();
            res.status(HttpStatus.OK).send(response);
        } catch (error) {
            next(error);
        }
    }

    public async token(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const authenticatorRequest = await AuthenticatorTransformer.inputAuthenticatorToApi(req.body);
            const response = {
                access_token: 'gfsdgfdsgfdsgrtfdsgre-fdsggfdsgfdgsd4534gfhgfd',
                expired_in: 123456
            }
            res.status(HttpStatus.CREATED).send(response);
        } catch (error) {
            next(error);
        }
    }

    public async add(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const userCreateRequest = await AuthenticatorTransformer.inputCreateUserToApi(req.body);
            console.log(userCreateRequest);
            await AuthenticatorService.create(userCreateRequest);
            res.status(HttpStatus.CREATED).send('sucesso');
        } catch (error) {
            next(error);
        }
    }
}

export default new AuthenticatorController();
