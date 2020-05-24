import {NextFunction, Request, Response} from 'express';
import * as HttpStatus from 'http-status-codes';
import CustomersService from './CustomersService';



export default class CustomersController {

    public static async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await CustomersService.findAll();
            res.status(HttpStatus.OK).send(response);
        } catch (error) {
            next(error);
        }
    }

    public static async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await CustomersService.findById(req.params.id);
            res.status(HttpStatus.OK).send(response);
        } catch (error) {
            next(error);
        }
    }

    public static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await CustomersService.create(req.body);
            res.status(HttpStatus.CREATED).send(response);
        } catch (error) {
            next(error);
        }
    }

    public static async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await CustomersService.update(req.body);
            res.status(HttpStatus.CREATED).send(response);
        } catch (error) {
            next(error);
        }
    }

    public static async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await CustomersService.remove(req.params.id);
            res.status(HttpStatus.OK).send(response);
        } catch (error) {
            next(error);
        }
    }
}
