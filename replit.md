# Galinho API

Backend REST API for an e-commerce application.

## Tech Stack

- **Runtime**: Node.js 20
- **Language**: TypeScript
- **Framework**: Express
- **ORM**: Prisma v7 with `@prisma/adapter-pg`
- **Database**: PostgreSQL (Replit managed)
- **Auth**: JWT (jsonwebtoken) + bcrypt
- **Validation**: Zod

## Project Structure

```
src/
  config/prisma.ts          - Prisma client (uses pg adapter for v7)
  middlewares/auth.middleware.ts
  modules/
    auth/                   - Register & Login
    users/                  - List users (protected)
    products/               - Create & list products
    orders/                 - Create orders
  routes/index.ts           - Main router
  app.ts                    - Express app
  server.ts                 - Entry point (port 5000)
prisma/
  schema.prisma             - DB models (User, Product, Order, OrderItem)
prisma.config.ts            - Prisma v7 datasource config
```

## API Endpoints

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET | /health | No | Health check |
| POST | /api/auth/register | No | Register user |
| POST | /api/auth/login | No | Login, returns JWT |
| GET | /api/users | Yes | List users |
| POST | /api/products | Yes | Create product |
| GET | /api/products | No | List products |
| POST | /api/orders | Yes | Create order |

## Environment Variables

- `DATABASE_URL` - PostgreSQL connection string (Replit managed)
- `JWT_SECRET` - Secret for signing JWT tokens
- `PORT` - Server port (default: 5000)

## Development

```bash
npx tsx src/server.ts   # Start dev server
npx prisma migrate dev  # Run DB migrations
npx prisma generate     # Regenerate Prisma client
```

## Notes

- Prisma v7 requires the `@prisma/adapter-pg` driver adapter
- The `prisma.config.ts` file provides datasource URL to Prisma CLI
- Production build: `npm run build` then `node dist/server.js`
