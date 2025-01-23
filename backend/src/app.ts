import express from 'express';
import sequelize from './config/database';
import { port } from './config/appConfig';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import transactionRoutes from './routes/transactionRoutes';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json()); // Para analisar o corpo das requisições em JSON
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/transactions', transactionRoutes);

// Middleware para tratar erros
app.use(errorHandler);

sequelize
  .authenticate()
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
  .catch((error) => console.error('Não foi possível conectar ao banco de dados:', error));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

export default app;
