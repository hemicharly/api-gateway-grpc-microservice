import {NextFunction, Request, Response} from 'express';
import * as HttpStatus from 'http-status-codes';
import UsersService from './UsersService';



export default class UsersController {

    public static async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await UsersService.findAll();
            res.status(HttpStatus.OK).send(response);
        } catch (error) {
            next(error);
        }
    }

    public static async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await UsersService.findById(req.params.id);
            res.status(HttpStatus.OK).send(response);
        } catch (error) {
            next(error);
        }
    }

    public static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await UsersService.create(req.body);
            res.status(HttpStatus.CREATED).send(response);
        } catch (error) {
            next(error);
        }
    }

    public static async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await UsersService.update(req.body);
            res.status(HttpStatus.CREATED).send(response);
        } catch (error) {
            next(error);
        }
    }

    public static async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await UsersService.remove(req.params.id);
            res.status(HttpStatus.OK).send(response);
        } catch (error) {
            next(error);
        }
    }

    public static async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await UsersService.login(req.body);
            res.status(HttpStatus.OK).send(response);
        } catch (error) {
            next(error);
        }
    }
}
