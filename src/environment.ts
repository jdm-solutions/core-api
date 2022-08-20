import dotenv from 'dotenv';
import { cleanEnv, str, url, num, bool, port } from 'envalid';

dotenv.config();

export const env = cleanEnv(process.env, {
  PORT: port({ default: 3000 }),

  DIRECTUS_URL: url(),
  DIRECTUS_TOKEN: str(),

  MINIO_HOST: str(),
  MINIO_PORT: num({ default: 9000 }),
  MINIO_USE_SSL: bool({ default: false }),
  MINIO_ACCESS_KEY: str(),
  MINIO_ACCESS_SECRET: str(),
});