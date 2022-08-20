import express from 'express';

import { getContainer } from './container';
import * as middlewares from './middlewares';
import * as apps from './applications';

export const buildApp = () => {
  const app = express();

  const container = getContainer();
  
  app.use(express.json());
  app.use(middlewares.container(container));
  
  app.use('/documents', apps.documents.build());

  return app;
}