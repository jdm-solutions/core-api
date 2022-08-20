import express from 'express';
import multer from 'multer';
import { Client } from 'minio';

export interface BuildApiOptions {
  client: Client;
}

const fields = [
  { name: 'location', maxCount: 1 },
  { name: 'upload', maxCount: 1  },
]

export const build = (options: BuildApiOptions) => {
  const app = express();
  const upload = multer({ storage: multer.memoryStorage() })

  app.post('/upload', upload.fields(fields), async (request: any, response: any, next: any) => {
    console.log(request.body);
    console.log(request.files);

    response.json({ done: true });
  });

  return app;
}