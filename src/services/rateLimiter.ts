import redis from '../redisClient';
import config from '../config/config';

import { IRateLimitConfig } from '../types/interfaces';

const defaultRateLimits: Record<string, IRateLimitConfig> = {
  '/api/v1/data-heavy-endpoint': {
    limit: config.limit,
    windowSeconds: config.windowSeconds,
  },
};

export async function checkRateLimit(identifier: string, resource: string) {
  const config = defaultRateLimits[resource];

  if (!config) {
    throw new Error(`No rate limit config for resource: ${resource}`);
  }

  const { limit, windowSeconds } = config;
  const key = `rate:${identifier}:${resource}`;

  const currentCount = await redis.incr(key);

  if (currentCount === 1) {
    await redis.expire(key, windowSeconds);
  }

  const ttl = await redis.ttl(key);

  if (currentCount > limit) {
    return {
      allowed: false,
      retryAfterSeconds: ttl,
    };
  }

  return {
    allowed: true,
    remaining: limit - currentCount,
    limit,
    windowSeconds: ttl,
  };
}
