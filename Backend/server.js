import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { getPool } from './database.js';
import productsRouter from './Routes/products.js';
import ordersRouter from './Routes/orders.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  try {
    await getPool();
    console.log('✅ Conectado a SQL Server correctamente');
    console.log(`🚀 Backend CoffeeClub corriendo en http://localhost:${PORT}`);
  } catch (error) {
    console.error('❌ Error al conectar a SQL Server:', error);
  }
});
