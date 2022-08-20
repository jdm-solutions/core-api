import express from 'express';

export const build = () => {
  const app = express();

  app.post('/command', async (request: any, response: any, next: any) => {
    const { documentStore } = request;
  
    const result = await documentStore.command(request.body);
    response.json(result);
  });

  return app;
}