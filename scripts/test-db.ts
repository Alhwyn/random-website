import { config } from 'dotenv';
import { Pool } from 'pg';
import * as path from 'path';

config({ path: path.join(__dirname, '..', '.env.local') });

const pool =
  process.env.DATABASE_URL
    ? new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      })
    : new Pool({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '5432', 10),
        database: process.env.DB_NAME,
        ssl: false,
      });

async function main() {
  try {
    const result = await pool.query('SELECT NOW() as now, version() as version');
    console.log('Connected!');
    console.log('Now:', result.rows[0].now);
    console.log('Postgres version:', result.rows[0].version.split(',')[0]);

    const tables = await pool.query(
      `SELECT table_name FROM information_schema.tables WHERE table_schema='public' ORDER BY table_name`
    );
    if (tables.rows.length === 0) {
      console.log('No tables found. Run migrations.');
    } else {
      console.log('Tables:', tables.rows.map(r => r.table_name).join(', '));
    }

    const sub = await pool.query(
      `SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_schema='public' AND table_name='subscribers') as ok`
    );
    if (sub.rows[0].ok) {
      const c = await pool.query('SELECT COUNT(*) as count FROM subscribers');
      console.log(`Subscribers: ${c.rows[0].count}`);
      if (parseInt(c.rows[0].count) > 0) {
        const sample = await pool.query(
          'SELECT email, source, created_at FROM subscribers ORDER BY created_at DESC LIMIT 3'
        );
        sample.rows.forEach(row =>
          console.log(
            `  - ${row.email} (${row.source || 'unknown'}) ${row.created_at.toISOString()}`
          )
        );
      }
    } else {
      console.log('No "subscribers" table.');
    }
    await pool.end();
  } catch (e) {
    console.error('Error:', e instanceof Error ? e.message : e);
    process.exit(1);
  }
}

main();
