import { Client } from 'minio';
import { env } from '../environment';

export const getMinioClient = () => {
  return new Client({
    endPoint: env.MINIO_HOST,
    port: env.MINIO_PORT,
    useSSL: env.MINIO_USE_SSL,
    accessKey: env.MINIO_ACCESS_KEY,
    secretKey: env.MINIO_ACCESS_SECRET
  })
}