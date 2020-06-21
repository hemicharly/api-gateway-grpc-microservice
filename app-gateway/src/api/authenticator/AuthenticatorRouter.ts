import express, {Request, Response} from 'express';
import AuthenticatorController from './AuthenticatorController';

const router = express.Router();

router.get('/',  AuthenticatorController.findAll);
router.get('/:id',  AuthenticatorController.findById);
router.post('/',  AuthenticatorController.create);
router.put('/',  AuthenticatorController.update);
router.delete('/:id',  AuthenticatorController.remove);


export default router;