import * as express from 'express';
import CustomersRouter from './customers/CustomersRouter';
import UsersRouter from './users/UsersRouter';
import ProductsRouter from './products/ProductsRouter';

const router = express.Router();

router.use('/customers', CustomersRouter);
router.use('/users', UsersRouter);
router.use('/products', ProductsRouter);

export default router;