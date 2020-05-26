import express, {Request, Response} from 'express';
import ProductsController from './ProductsController';

const router = express.Router();

router.get('/',  ProductsController.findAll);
router.get('/:id',  ProductsController.findById);
router.post('/',  ProductsController.create);
router.put('/',  ProductsController.update);
router.delete('/:id',  ProductsController.remove);


export default router;