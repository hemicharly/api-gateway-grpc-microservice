import express, {Request, Response} from 'express';
import CustomersController from './CustomersController';

const router = express.Router();

router.get('/',  CustomersController.findAll);
router.get('/:id',  CustomersController.findById);
router.post('/',  CustomersController.create);
router.put('/',  CustomersController.update);
router.delete('/:id',  CustomersController.remove);


export default router;