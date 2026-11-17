import {Router} from 'express';
import {createEvent} from '../controllers/events.controller.js'

const router = Router();
router.get('/',createEvent);

export default router;