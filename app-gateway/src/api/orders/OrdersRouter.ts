import express, {Request, Response} from 'express';
import OrdersController from './OrdersController';

const router = express.Router();

router.get('/',  OrdersController.findAll);
router.post('/',  OrdersController.create);


export default router;