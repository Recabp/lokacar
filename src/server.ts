import express from 'express';
import specificationsRoutes from './routes/specifications.routes';
import categoriesRoutes from './routes/categories.routes';

const app = express();

app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);

app.listen(6666, () => console.log('server is running on port 6666!'));
