import { Pool, PoolConfig } from 'pg';

const getPoolConfig = (): PoolConfig => {
    if (process.env.DATABASE_URL) {
        let sslConfig: boolean | { rejectUnauthorized: boolean } = false;
        
        if (process.env.DATABASE_SSL === 'true') {
            sslConfig = {
                rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED !== 'false'
            };
        } else if (process.env.DATABASE_SSL === 'false') {
            sslConfig = false;
        } else if (process.env.NODE_ENV === 'production') {
            if (process.env.DATABASE_URL.includes('sslmode=')) {
                sslConfig = false;
            } else {
                sslConfig = {
                    rejectUnauthorized: false
                };
            }
        }
        
        return {
            connectionString: process.env.DATABASE_URL,
            ssl: sslConfig,
            max: 20,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 10000,
        };
    }

    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const host = process.env.DB_HOST || 'localhost';
    const port = parseInt(process.env.DB_PORT || '5432', 10);
    const database = process.env.DB_NAME;

    if (!user || !password || !database) {
        throw new Error(
            'Database configuration missing. Please set either DATABASE_URL or ' +
            'DB_USER, DB_PASSWORD, and DB_NAME in your .env.local file. ' +
            'See .env.example for configuration options.'
        );
    }

    return {
        user,
        password,
        host,
        port,
        database,
        ssl: false,
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 10000,
    };
};

const pool = new Pool(getPoolConfig());

pool.on('error', (err: Error) => {
    console.error('Unexpected error on idle database client:', {
        timestamp: new Date().toISOString(),
        message: err.message,
    });
    if (process.env.NODE_ENV !== 'production') {
        process.exit(-1);
    }
});

export const query = (text: string, params?: unknown[]) => pool.query(text, params);

export { pool };