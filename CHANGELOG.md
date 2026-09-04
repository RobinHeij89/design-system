# @robinheij89/design-system

## 0.4.0

### Minor Changes

- 6689bd8: Add a `Logo` component (Robin's "RH" monogram, inline SVG using `currentColor` so it
  follows the theme automatically) and use it in `SiteFooter`, replacing the `logoSrc`/
  `logoAlt` image props and the dark-mode invert-filter hack. Consolidate one-off inline
  icons (checkbox check, modal close, pagination arrows, alert glyphs, social icons) into
  shared `Icon`/`SocialIcon` components.

## 0.3.0

### Minor Changes

- c5f4796: Expand tokens with a full semantic color system (primary/secondary/neutral/functional),
  a typography scale, radii, and grid/container tokens. Add the mandatory atom and
  control components: Button, TextField, Checkbox, Radio, Select, Tabs, Breadcrumbs,
  Pagination, Menu, Alert, Modal, Tooltip, and Spinner — each with Storybook stories.

## 0.2.0

### Minor Changes

- 02d1e82: Initial release: design tokens, scroll-reveal utilities, and the `ThemeToggle`,
  `CustomCursor`, `NameRevealer`, `Marquee`, `SocialLinks`, and `SiteFooter` components,
  extracted from robinheij.nl.
