# Codebase Analysis & Recommendations (Q4 2025-2026 Standards)

## Goal Description
Upgrade the current `turn-ceo` codebase to meet world-class, cutting-edge standards for late 2025/early 2026. This involves modernizing the stack, improving performance, enhancing type safety, and refining the AI integration architecture.

## User Review Required
> [!IMPORTANT]
> **Major Framework Upgrades**: Moving to Next.js 15 and React 19 involves breaking changes, particularly with caching behavior and Server Components.
> **Tooling Switch**: Recommending a switch from ESLint/Prettier to **Biome** for significant performance gains.
> **AI Architecture**: Recommending adoption of **Vercel AI SDK** over raw Anthropic SDK for better streaming and UI state management.

## Current State Analysis
- **Framework**: Next.js 14.2.16 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.4.14
- **State/UI**: React 18, Framer Motion, Lucide React
- **AI**: Raw Anthropic SDK integration
- **Architecture**: Heavy client-side logic (`HomePageClient`), custom API middleware.

## Proposed Changes

### 1. Core Framework & Language Upgrades
Targeting the "Bleeding Edge" stable standards for 2026.

#### [MODIFY] package.json
- **Upgrade Next.js**: `14.2.16` -> `15.x` (or latest Canary if stable).
  - *Benefit*: Improved caching, faster builds (Turbopack stable), React 19 support.
- **Upgrade React**: `18.x` -> `19.x`.
  - *Benefit*: Native Server Actions, `use` hook, simplified context, better hydration error handling.
- **Upgrade Tailwind**: `3.4` -> `4.0` (Oxide Engine).
  - *Benefit*: Rust-based engine, instant builds, zero-runtime overhead, unified config (no `postcss.config.js` needed).

### 2. Tooling & Quality Assurance
Modernizing the developer experience and code quality gates.

#### [NEW] biome.json
- **Replace ESLint/Prettier**: Adopt **Biome**.
  - *Benefit*: 30x faster linting/formatting, unified toolchain.
  - *Action*: Remove `.eslintrc.json`, `.prettierrc`, and related dependencies.

#### [MODIFY] tsconfig.json
- **Stricter Types**: Enable `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`.
- *Benefit*: Catch more runtime errors at compile time.

### 3. Architecture & Performance
Refactoring for Server Components and Edge capabilities.

#### [MODIFY] src/components/HomePageClient.tsx
- **Refactor**: Split into granular Server Components where possible.
- **Optimization**: Use `next/dynamic` for heavy interactive sections (e.g., `RonnyChatbot`).
- *Benefit*: Reduced initial bundle size, faster First Contentful Paint (FCP).

#### [MODIFY] src/app/api/chat/route.ts
- **Runtime**: Switch to `runtime = 'edge'`.
- **Library**: Refactor to use **Vercel AI SDK** (`ai` package).
  - *Benefit*: Native streaming support, simplified UI integration (`useChat`), lower latency.

### 4. Type Safety & Data Fetching
Moving beyond standard API routes.

#### [NEW] src/server/actions.ts (or tRPC)
- **Server Actions**: Replace ad-hoc API routes with Server Actions for mutations (e.g., email capture).
- *Benefit*: End-to-end type safety without manual type sharing, progressive enhancement.

### 5. Accessibility & Testing
Ensuring the site is usable by everyone and robust.

#### [MODIFY] playwright.config.ts
- **Visual Regression**: Enable visual comparison tests.
- **A11y**: Integrate `axe-core` into Playwright tests.
- *Benefit*: Prevent visual regressions and ensure WCAG 2.2 compliance.

## Verification Plan

### Automated Tests
- **Unit/Integration**: Run `vitest` to ensure logic remains correct after upgrades.
- **E2E**: Run `playwright test` to verify critical user flows (Home -> Pricing -> Checkout).
- **Type Check**: Run `tsc --noEmit` with new strict settings.
- **Lint**: Run `biome check` to verify code quality.

### Manual Verification
- **Build**: Verify `next build` succeeds with Turbopack.
- **Performance**: Run Lighthouse/PageSpeed Insights to confirm score improvements (Target: 95+ in all categories).
- **AI Chat**: Verify streaming response works smoothly with new AI SDK integration.
