import * as express from 'express';
import CustomersRouter from './customers/CustomersRouter';
import UsersRouter from './users/UsersRouter';

const router = express.Router();

router.use('/customers', CustomersRouter);
router.use('/users', UsersRouter);

export default router;