import { Router } from 'express';
import greetingController from '../controllers/user-controller';

const router = Router();

router.get('/', greetingController.getGreeting);
router.post('/', greetingController.createGreeting);

export default router;
