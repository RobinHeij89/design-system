---
"@robinheij89/design-system": minor
---

Add a `Logo` component (Robin's "RH" monogram, inline SVG using `currentColor` so it
follows the theme automatically) and use it in `SiteFooter`, replacing the `logoSrc`/
`logoAlt` image props and the dark-mode invert-filter hack. Consolidate one-off inline
icons (checkbox check, modal close, pagination arrows, alert glyphs, social icons) into
shared `Icon`/`SocialIcon` components.
