export interface IConfig {
  port: number;
  nodeEnv: string;
  limit: number;
  windowSeconds: number;
}

export interface IAppError extends Error {
  status?: number;
}

export interface IRateLimitConfig {
  limit: number;
  windowSeconds: number;
}
