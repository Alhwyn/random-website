import { Pool, PoolConfig } from 'pg';

/**
 * Database connection pool configuration
 * 
 * Supports two configuration methods:
 * 1. CONNECTION STRING: Use DATABASE_URL for Railway/hosted databases
 * 2. INDIVIDUAL CREDENTIALS: Use DB_USER, DB_PASSWORD, etc. for local development
 * 
 * Priority: DATABASE_URL takes precedence if both are provided
 */

const getPoolConfig = (): PoolConfig => {
    // Option 1: Use connection string (Railway/Production)
    if (process.env.DATABASE_URL) {
        // Determine SSL configuration based on environment variables
        let sslConfig: boolean | { rejectUnauthorized: boolean } = false;
        
        // Only enable SSL if explicitly requested via DATABASE_SSL=true
        if (process.env.DATABASE_SSL === 'true') {
            sslConfig = {
                rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED !== 'false'
            };
        } else if (process.env.DATABASE_SSL === 'false') {
            sslConfig = false;
        } else if (process.env.NODE_ENV === 'production') {
            // In production, try to determine from DATABASE_URL
            // If URL contains sslmode parameter, don't override it
            if (process.env.DATABASE_URL.includes('sslmode=')) {
                sslConfig = false; // Let the connection string handle SSL
            } else {
                // Default to SSL in production, but allow self-signed certs
                sslConfig = {
                    rejectUnauthorized: false
                };
            }
        }
        
        return {
            connectionString: process.env.DATABASE_URL,
            ssl: sslConfig,
            // Connection pool limits
            max: 20, // Maximum number of clients in the pool
            idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
            connectionTimeoutMillis: 10000, // Return an error after 10 seconds if connection fails
        };
    }

    // Option 2: Use individual credentials (Local Development)
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
        // Connection pool limits
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 10000,
    };
};

const pool = new Pool(getPoolConfig());

// Handle pool errors gracefully
pool.on('error', (err: Error) => {
    console.error('Unexpected error on idle database client:', {
        timestamp: new Date().toISOString(),
        message: err.message,
    });
    // Don't exit in production, let the connection pool recover
    if (process.env.NODE_ENV !== 'production') {
        process.exit(-1);
    }
});

export const query = (text: string, params?: unknown[]) => pool.query(text, params);