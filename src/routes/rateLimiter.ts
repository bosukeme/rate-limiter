import { Router } from 'express';
import { home, checkRateLimiter } from '../controllers/rateLimiter';
import { validateBody } from '../middlewares/validate';
import { rateLimiterSchema } from '../validators/rateLimiterValidator';

const router = Router();

router.get('/', home);
router.post(
  '/rate-limit/check',
  validateBody(rateLimiterSchema),
  checkRateLimiter,
);

export default router;
