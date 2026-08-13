// src/lib/db.ts
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: Number(process.env.MYSQL_PORT) || 3306,
};

export const pool = mysql.createPool(dbConfig);

export async function testDbConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Connexion MySQL Hostinger réussie');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Erreur de connexion MySQL:', error);
    return false;
  }
}