import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './server/routes/index.js';
import { initDatabase } from './server/db.js';
import { errorHandler } from './server/middlewares/error.middleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
app.use('/api', routes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

await initDatabase();

app.listen(PORT, () => {
  console.log(`NetCenter server rodando em http://localhost:${PORT}`);
});
