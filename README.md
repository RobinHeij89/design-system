# @robinheij89/design-system

Robin Heij's personal design system — the design tokens and generic UI primitives
extracted from [robinheij.nl](https://robinheij.nl), published as a versioned package
so the website (and anything else) can depend on a specific release instead of
carrying this code inline.

## What's in here

- **Tokens** (`tokens.css`) — colors (incl. `[data-theme="dark"]`), type, an 4px spacing
  scale, breakpoints, and motion durations/easings, all as CSS custom properties
  (`--rh-ds-*`).
- **Scroll-reveal utilities** (`animations.css` + `useScrollReveal()`) — `.reveal`,
  `.reveal-left/right/bottom`, `.stagger` classes toggled by an `IntersectionObserver`,
  respecting `prefers-reduced-motion`.
- **Components**: `ThemeToggle`, `CustomCursor`, `NameRevealer`, `Marquee`,
  `SocialLinks`, `SiteFooter`.
- **`useTheme()`** — light/dark state persisted to `localStorage`, applied via
  `data-theme` on `<html>`.

Everything here is content-free and prop-driven — no hardcoded copy, URLs, or images.
Page-specific composition (hero copy, client logos, nav labels, etc.) stays in the
consuming app.

## Install

This package publishes to GitHub Packages under the `@robinheij89` scope. Add to the
consuming project's `.npmrc`:

```
@robinheij89:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Then set `NODE_AUTH_TOKEN` in your shell (a token with `read:packages` — e.g.
`export NODE_AUTH_TOKEN=$(gh auth token)` after `gh auth refresh -s read:packages`),
and install:

```bash
pnpm add @robinheij89/design-system
```

## Usage

```tsx
import { CustomCursor, ThemeToggle, useTheme } from '@robinheij89/design-system';
import '@robinheij89/design-system/style.css';

function App() {
  const { theme, toggle } = useTheme();
  return (
    <>
      <CustomCursor />
      <ThemeToggle theme={theme} onToggle={toggle} />
    </>
  );
}
```

Import `@robinheij89/design-system/style.css` once, near the app root — it bundles
tokens + animation utilities + component styles. Need just the raw tokens (e.g. to
mirror the palette outside a bundler)? Import `@robinheij89/design-system/tokens.css`
directly.

## Development

```bash
pnpm install
pnpm build   # type-check + build dist/
pnpm lint
```

## Releasing

Versioning is handled by [Changesets](https://github.com/changesets/changesets):

1. After a change that should ship, run `pnpm changeset` and commit the generated file.
2. Push to `main`. CI opens/updates a "Version Packages" PR that applies pending
   changesets (bumping `package.json` + `CHANGELOG.md`).
3. Merge that PR — CI builds and publishes the new version to GitHub Packages
   automatically. No manual `npm publish` or local credentials needed.
