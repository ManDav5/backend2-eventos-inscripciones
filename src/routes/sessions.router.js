import {Router} from 'express'
import {getSessionStatus} from '../controllers/sessions.controller.js';
import {register} from '../controllers/sessions.controller.js';
import {login} from '../controllers/sessions.controller.js';
import {sessionErrorHandler} from '../middlewares/errorHandler.middleware.js';

const router = Router();
router.get('/',getSessionStatus);

//Register

router.post('/api/register',register);

//Login

router.post('/api/login',login);

router.use(sessionErrorHandler);

export default router;