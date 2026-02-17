# Krypt

Secure full-stack password manager built with Next.js, NestJS, TypeScript, Prisma and PostgreSQL.

---

## 🏗 Architecture

Monorepo powered by pnpm workspaces.

Krypt/
├── apps/
│ ├── api/ # NestJS Backend (Prisma + PostgreSQL)
│ └── web/ # Next.js Frontend
├── packages/ # Shared code (future use)
├── docker-compose.yml
├── pnpm-workspace.yaml
└── package.json (root)

## ⚙ Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- TailwindCSS

### Backend
- NestJS
- Prisma ORM
- PostgreSQL

### Infrastructure
- Docker
- pnpm Workspaces

---

# 🚀 Setup

## 1. Requirements

- Node.js >= 18
- pnpm
- Docker Desktop running

---

## 2. Install dependencies

Run in project root:

Install:
pnpm install

## 3. Start database:

docker compose up -d

Check Status:
docker compose ps

## 4. Run database migration

pnpm prisma migrate dev

Optional: Open Prisma Studio
pnpm --filter api prisma studio


## 5. Start development servers

pnpm dev


## 🌐 Default Ports

- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- Health Endpoint: http://localhost:3001/health
- 
## 🔎 Health Check

Test backend availability:
GET http://localhost:3001/health

Expected response:
{
  "ok": true,
  "service": "krypt-api",
  "timestamp": "2026-02-16T21:09:00.719Z"
}

## 🔐 Environment Variables

Create apps/api/.env:
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DATABASE?schema=public"
Values must match docker-compose.yml.

## 🧹 Useful Commands

Stop database:
docker compose down

Stop and remove volumes (resets DB):
docker compose down -v

## 📌 Next Steps

- Authentication (register/login)
- Vault system
- Password generator
- Client-side encryption (zero-knowledge approach)