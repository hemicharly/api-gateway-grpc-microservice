import * as express from 'express';
import CustomersRouter from './customers/CustomersRouter';

const router = express.Router();

router.use('/customers', CustomersRouter);

export default router;