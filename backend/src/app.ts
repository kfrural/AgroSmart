import express from 'express';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import transactionRoutes from './routes/transactionRoutes';
import { connectDB } from './models';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

// Middleware global
app.use(express.json());

// Rotas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/transactions', transactionRoutes);

// Middleware de erro
app.use(errorHandler);

// Conexão com o banco de dados
connectDB();

export default app;