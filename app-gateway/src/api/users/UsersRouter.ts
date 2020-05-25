import express, {Request, Response} from 'express';
import UsersController from './UsersController';

const router = express.Router();

router.get('/',  UsersController.findAll);
router.get('/:id',  UsersController.findById);
router.post('/',  UsersController.create);
router.put('/',  UsersController.update);
router.delete('/:id',  UsersController.remove);
router.post('/login', UsersController.login);


export default router;