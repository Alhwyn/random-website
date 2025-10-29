# Victoria Tech Website

A modern Next.js website for Victoria Tech with newsletter subscription functionality and PostgreSQL database integration.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose (for local database)
- PostgreSQL (if not using Docker)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd victoria-tech
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

4. **Configure database credentials**

   Edit `.env.local` and set secure values:

   **For local development with Docker:**

   ```bash
   # Generate a secure password
   npm run db:generate-password

   # Add to .env.local:
   DB_USER=postgres
   DB_PASSWORD=<generated-password>
   DB_NAME=victoriatech
   DB_HOST=localhost
   DB_PORT=5432
   ```

   **For production (Railway, Vercel Postgres, etc.):**

   ```bash
   DATABASE_URL=postgresql://username:password@host:port/database
   ```

5. **Start the database** (if using Docker)

   ```bash
   npm run db:up
   ```

6. **Run migrations**

   ```bash
   npm run db:migrate
   ```

7. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (runs migrations first)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Database Scripts

- `npm run db:up` - Start PostgreSQL database in Docker
- `npm run db:down` - Stop PostgreSQL database
- `npm run db:migrate` - Run database migrations
- `npm run db:test` - Test database connection
- `npm run db:logs` - View database logs
- `npm run db:generate-password` - Generate secure password

## Security

### Important Security Notes

1. **NEVER commit `.env` or `.env.local` files**

   - These are already in `.gitignore`
   - If accidentally committed, rotate all credentials immediately

2. **Use strong passwords**

   - Generate with: `npm run db:generate-password`
   - Minimum 16 characters recommended

3. **Check git history for exposed secrets**

   ```bash
   git log --all --full-history -- .env .env.local
   ```

4. **Production checklist:**
   - Use strong, unique database passwords
   - Enable SSL/TLS for database connections
   - Set up rate limiting (Vercel/Cloudflare)
   - Configure proper CORS headers
   - Enable security headers (already configured)
   - Regular dependency updates (`npm audit`)

### Security Features Implemented

- Parameterized SQL queries (SQL injection prevention)
- Input validation and sanitization
- Email format validation
- Secure error logging (no sensitive data exposure)
- Security headers (XSS, clickjacking protection)
- Connection pool limits
- SSL support for production databases

## Project Structure

```
victoria-tech/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── subscribe/     # Newsletter subscription endpoint
│   ├── event/             # Event page
│   └── ...
├── components/            # React components
├── constants/             # App constants
├── lib/                   # Utility libraries
│   └── db.ts             # Database connection
├── migrations/            # Database migrations
├── scripts/               # Utility scripts
└── public/                # Static assets
```

## Database

### Local Development

Uses PostgreSQL 16 in Docker. The database is automatically configured with:

- Persistent data storage
- Health checks
- Migration initialization

### Migrations

Migration files are in `migrations/` directory and run automatically:

- On build: `npm run build`
- Manually: `npm run db:migrate`

### Schema

**subscribers table:**

- `id` - Serial primary key
- `email` - Unique, indexed email address
- `source` - Subscription source (homepage, event, footer)
- `subscribed_at` - Timestamp
- `created_at` - Timestamp

## Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab
2. Import project in Vercel
3. Add environment variables:
   - `DATABASE_URL` - Your PostgreSQL connection string
   - `NODE_ENV=production`
4. Deploy!

### Railway

1. Create new project in Railway
2. Add PostgreSQL database
3. Set environment variables from database connection
4. Deploy from GitHub

## Troubleshooting

### Database connection issues

1. Check if database is running:

   ```bash
   docker ps
   ```

2. Test connection:

   ```bash
   npm run db:test
   ```

3. View logs:
   ```bash
   npm run db:logs
   ```

### API endpoint 404

Ensure the file structure is correct:

```
app/
└── api/
    └── subscribe/
        └── route.ts
```

## Environment Variables

Required environment variables (see `.env.example`):

**Local Development:**

- `DB_USER` - Database username
- `DB_PASSWORD` - Database password
- `DB_NAME` - Database name
- `DB_HOST` - Database host (default: localhost)
- `DB_PORT` - Database port (default: 5432)

**Production:**

- `DATABASE_URL` - Full PostgreSQL connection string
- `NODE_ENV=production`

Optional:

- `DB_SSL_REJECT_UNAUTHORIZED` - Set to 'false' only if SSL cert issues (not recommended)

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

[Your License Here]

## Support

For issues and questions, please open a GitHub issue.
