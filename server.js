import express from 'express';
import cors from 'cors';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import routes from './server/routes/index.js';
import { initDatabase } from './server/db.js';
import { errorHandler } from './server/middlewares/error.middleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Aplica as migrations pendentes antes de iniciar o servidor.
// Em produção garante que o schema do banco está sempre atualizado.
try {
  execSync('npx prisma migrate deploy', { stdio: 'inherit' });
} catch (err) {
  console.error('Falha ao aplicar migrations:', err.message);
  process.exit(1);
}

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
