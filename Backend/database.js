import sql from 'mssql/msnodesqlv8.js';

const dbConfig = {
  server: 'SANTAELENA\\lrendon', 
  database: 'CoffeeClub',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
};

let pool;

export async function getPool() {
  if (!pool) {
    pool = await sql.connect(dbConfig);
    console.log('🔌 Conexión SQL Server establecida con CoffeeClub');
  }
  return pool;
}
