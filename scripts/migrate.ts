import { config } from 'dotenv';
import { Pool } from 'pg';
import * as fs from 'fs';
import * as path from 'path';

config({ path: path.join(__dirname, '..', '.env.local') });

const pool = new Pool(
  process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      }
    : {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '5432', 10),
        database: process.env.DB_NAME,
        ssl: false,
      }
);

async function migrate() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        id SERIAL PRIMARY KEY,
        version VARCHAR(50) UNIQUE NOT NULL,
        applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const old = new Set(
      (await pool.query('SELECT version FROM schema_migrations')).rows.map((r) => r.version)
    );

    const dir = path.join(__dirname, '..', 'migrations');
    if (!fs.existsSync(dir)) throw new Error('Migrations directory missing');

    const files = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith('.sql'))
      .sort();

    let applied = 0;
    for (const f of files) {
      const version = f.replace('.sql', '');
      if (old.has(version)) continue;
      const sql = fs.readFileSync(path.join(dir, f), 'utf8');
      await pool.query('BEGIN');
      try {
        await pool.query(sql);
        await pool.query('INSERT INTO schema_migrations(version) VALUES ($1)', [version]);
        await pool.query('COMMIT');
        applied++;
      } catch (e) {
        await pool.query('ROLLBACK');
        throw new Error(`Failed to apply ${f}: ${e instanceof Error ? e.message : e}`);
      }
    }

    console.log(`Done. Applied: ${applied}. Total: ${files.length}.`);
    await pool.end();
  } catch (e) {
    console.error(e instanceof Error ? e.message : e);
    try { await pool.query('ROLLBACK'); } catch {}
    await pool.end();
    process.exit(1);
  }
}

migrate();
