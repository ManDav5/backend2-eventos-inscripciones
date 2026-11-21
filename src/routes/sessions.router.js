import {Router} from 'express'
import {register} from '../controllers/sessions.controller.js';
import {login} from '../controllers/sessions.controller.js';
import { validateRegister } from '../middlewares/validation.middleware.js';
import {sessionErrorHandler} from '../middlewares/errorHandler.middleware.js';

const router = Router();

router.post('/register',validateRegister, register);

router.post('/login',login);

router.use(sessionErrorHandler);

export default router;