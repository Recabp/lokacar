import express from 'express';
import router from './routes';

const app = express();

app.use(router);

app.listen(6666, () => console.log('server is running on port 6666!'));
