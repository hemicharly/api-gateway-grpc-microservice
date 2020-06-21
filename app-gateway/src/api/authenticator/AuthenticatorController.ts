import {NextFunction, Request, Response} from 'express';
import * as HttpStatus from 'http-status-codes';
import AuthenticatorService from './AuthenticatorService';



export default class AuthenticatorController {

    public static async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await AuthenticatorService.findAll();
            res.status(HttpStatus.OK).send(response);
        } catch (error) {
            next(error);
        }
    }

    public static async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await AuthenticatorService.findById(req.params.id);
            res.status(HttpStatus.OK).send(response);
        } catch (error) {
            next(error);
        }
    }

    public static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await AuthenticatorService.create(req.body);
            res.status(HttpStatus.CREATED).send(response);
        } catch (error) {
            next(error);
        }
    }

    public static async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await AuthenticatorService.update(req.body);
            res.status(HttpStatus.CREATED).send(response);
        } catch (error) {
            next(error);
        }
    }

    public static async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await AuthenticatorService.remove(req.params.id);
            res.status(HttpStatus.OK).send(response);
        } catch (error) {
            next(error);
        }
    }
}
