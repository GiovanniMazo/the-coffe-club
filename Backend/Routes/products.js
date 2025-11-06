import express from 'express';
import { getPool } from '../database.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const pool = await getPool();
    const result = await pool.request().query(`
      SELECT id, nombre, descripcion, precio, imagen
      FROM dbo.Productos
      ORDER BY id ASC
    `);
    res.json(result.recordset);
  } catch (error) {
    console.error('❌ Error al obtener productos:', error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

export default router;
