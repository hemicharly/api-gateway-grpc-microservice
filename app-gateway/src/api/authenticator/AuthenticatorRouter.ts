import express from 'express';
import AuthenticatorController from './AuthenticatorController';

const router = express.Router();

router.get('/',  AuthenticatorController.findAll);
router.post('/',  AuthenticatorController.token);

export default router;