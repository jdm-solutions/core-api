import { buildApp } from './build-app';
import { env } from './environment';

const app = buildApp();

app.listen(env.PORT, () => console.log());