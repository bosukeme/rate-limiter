import { Request, Response, NextFunction } from 'express';
import { checkRateLimit } from '../services/rateLimiter';

export const home = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: 'Welcome to the Rate Limiter Service' });
};

export const checkRateLimiter = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { identifier, resource } = req.body;

  if (!identifier || !resource) {
    res.status(400).json({ error: 'identifier and resource are required' });
    return;
  }

  try {
    const result = await checkRateLimit(identifier, resource);

    if (result.allowed) {
      res.status(200).json({ message: 'Success', data: result });
      return;
    } else {
      res.status(429).json({ message: 'Failed', data: result });
      return;
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
