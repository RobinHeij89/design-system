---
"@robinheij89/design-system": minor
---

Add squircle corners (`corner-shape: squircle`, progressively enhanced behind
`@supports`, radius scaled by the new `--rh-ds-squircle-multiplier` token) to every
rounded-corner element. Also rewrite all component CSS from BEM (`.block__element--modifier`)
to native CSS nesting — no visual or prop-API changes, this is an internal convention
switch documented in the new `CONTRIBUTING.md`.
