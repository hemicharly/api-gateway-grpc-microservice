import {NextFunction, Request, Response} from 'express';
import * as HttpStatus from 'http-status-codes';
import ResponseCreated from '../../response/ResponseCreated';
import ResponseSuccess from '../../response/ResponseSuccess';
import AuthenticatorService from './AuthenticatorService';
import AuthenticatorTransformer from './AuthenticatorTransformer';
import AuthenticatorRequest from './input/AuthenticatorRequest';
import UserCreateRequest from './input/UserCreateRequest';


class AuthenticatorController {

    public async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await AuthenticatorService.findAll();
            res.status(HttpStatus.OK).send(new ResponseSuccess(response));
        } catch (error) {
            next(error);
        }
    }

    public async token(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const authenticatorRequest = await AuthenticatorTransformer.toApi(AuthenticatorRequest, req.body);
            const response = {
                access_token: 'gfsdgfdsgfdsgrtfdsgre-fdsggfdsgfdgsd4534gfhgfd',
                expired_in: 123456
            }
            res.status(HttpStatus.CREATED).send(new ResponseCreated('Token generator with success', response));
        } catch (error) {
            next(error);
        }
    }

    public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const userCreateRequest = await AuthenticatorTransformer.toApi(UserCreateRequest, req.body);
            await AuthenticatorService.create(userCreateRequest);
            res.status(HttpStatus.CREATED).send(new ResponseCreated('User created with success', userCreateRequest));
        } catch (error) {
            next(error);
        }
    }
}

export default new AuthenticatorController();
