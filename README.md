# Victoria Tech Website

A Next.js website for Victoria Tech with newsletter subscription and PostgreSQL database.

## Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment variables**

   Create `.env.local` with:

   ```bash
   DB_USER=postgres
   DB_PASSWORD=your-password
   DB_NAME=victoriatech
   DB_HOST=localhost
   DB_PORT=5432
   ```

3. **Start database and run migrations**

   ```bash
   npm run db:up
   npm run db:migrate
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000)

## Scripts

**Development:**

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run start` - Start production server

**Database:**

- `npm run db:up` - Start database (Docker)
- `npm run db:down` - Stop database
- `npm run db:migrate` - Run migrations
- `npm run db:test` - Test connection

## Deployment

### Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add `DATABASE_URL` environment variable
4. Deploy
