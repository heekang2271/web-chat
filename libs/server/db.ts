import mysql from 'mysql2/promise';

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
};

const db = {
  query: async (sql: string) => {
    const db = await mysql.createConnection(config);
    const [data, _] = await db.query(sql);

    return data as any[];
  },
  exec: async (sql: string) => {
    const db = await mysql.createConnection(config);
    await db.query(sql);
  },
};

export default db;
