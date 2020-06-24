import express from 'express';
import AuthenticatorController from './AuthenticatorController';

const router = express.Router();


router.get('/',  AuthenticatorController.findAll);
router.post('/',  AuthenticatorController.token);
router.post('/create',  AuthenticatorController.add);

export default router;