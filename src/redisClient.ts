import Redis from "ioredis";
import config from "./config/config";

const redis = new Redis({
  host: config.redis_host,
  port: config.redis_port,
  username: config.redis_username,
  password: config.redis_password,
});

export default redis;