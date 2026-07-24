# Agent Instructions

## Essential Commands

```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build
npm run lint         # ESLint
npm run format       # Prettier with import sorting
npm run ts-check     # TypeScript type check (no emit)
npm run db:gen       # Generate Supabase types from remote schema
```

**Verification order**: `lint → format → ts-check → build`

## Tech Stack & Architecture

- **Framework**: Next.js 15.4.7 (App Router) with React 19
- **Database/Auth**: Supabase (SSR with middleware-based auth)
- **State**: Zustand for client state, TanStack Query for server state
- **UI**: shadcn/ui (new-york style, neutral base) + Tailwind CSS v4
- **Package Manager**: Bun (but npm scripts work)
- **Font**: Poppins (weights 300-900)

## Path Structure

```
src/
├── app/              # Next.js App Router
│   ├── (public)/     # Public routes (auth, dashboard, error)
│   └── admin/        # Admin pages
├── components/       # UI components (elements, modals, screens, ui/)
├── config/           # Route and page configurations
├── hooks/            # Custom React hooks
├── providers/        # React providers (QueryProvider, ThemeProvider)
├── services/         # API service layers
├── shared/           # Shared types and data
│   └── types/
│       └── db.types.ts  # Auto-generated Supabase types
├── store/            # Zustand stores
└── utils/            # Utilities (including supabase/)
```

Path alias: `@/*` → `./src/*`

## Supabase Integration

- **Types**: Auto-generated from remote schema via `npm run db:gen`
- **Auth**: SSR middleware in `src/middleware.tsx` protects routes
    - Unprotected: `/login`, `/auth` paths
    - All other routes require authentication
- **Server Actions**: Use `createAdminClient()` from `@/utils/supabase`
- **Client**: Use `createServerClient<Database>` with typed Database

**Critical**: Never modify code between `createServerClient()` and `supabase.auth.getUser()` in middleware. Always
return the `supabaseResponse` object unchanged.

## Code Style

- **Tabs**: 4 spaces, no semicolons, single quotes
- **Line width**: 120 characters
- **Import order** (enforced by prettier):
    1. Third-party modules
    2. `@/app/*`
    3. `@/components/*`
    4. `@/hooks/*`
    5. `@/utils/*`
    6. `@/shared/types/*`
    7. `@/shared/data/*`
    8. `@/config/*`
    9. `@/store/*`

## Server Actions

Mark with `'use server'` directive. Use admin client for mutations:

```typescript
'use server'

import { createAdminClient } from '@/utils/supabase'
```

## Image Configuration

Only GitHub avatars whitelisted for remote images in `next.config.ts`. Add other domains as needed.

## Component Patterns

- UI components in `src/components/ui/` (shadcn/ui)
- Feature components in `src/components/screens/` or `src/components/elements/`
- Modals in `src/components/modals/`
- Export from barrel files (`index.ts`) for clean imports
