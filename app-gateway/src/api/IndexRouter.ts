import * as express from 'express';
import CustomersRouter from './customers/CustomersRouter';
import OrdersRouter from './orders/OrdersRouter';
import ProductsRouter from './products/ProductsRouter';
import UsersRouter from './users/UsersRouter';

const router = express.Router();

router.use('/customers', CustomersRouter);
router.use('/orders', OrdersRouter);
router.use('/products', ProductsRouter);
router.use('/users', UsersRouter);

export default router;