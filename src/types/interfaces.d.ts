export interface IConfig {
  port: number;
  nodeEnv: string;
  limit: number;
  windowSeconds: number;
  redis_host: string;
  redis_port: number;
  redis_username: string;
  redis_password: string;
}

export interface IAppError extends Error {
  status?: number;
}

export interface IRateLimitConfig {
  limit: number;
  windowSeconds: number;
}
