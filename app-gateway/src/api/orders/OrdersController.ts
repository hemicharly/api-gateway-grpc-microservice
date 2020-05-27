import {NextFunction, Request, Response} from 'express';
import * as HttpStatus from 'http-status-codes';
import OrdersService from './OrdersService';


export default class OrdersController {

    public static async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await OrdersService.findAll();
            res.status(HttpStatus.OK).send(response);
        } catch (error) {
            next(error);
        }
    }

    public static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const response = await OrdersService.create(req.body);
            res.status(HttpStatus.CREATED).send(response);
        } catch (error) {
            next(error);
        }
    }
}
