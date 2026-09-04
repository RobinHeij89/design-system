---
"@robinheij89/design-system": patch
---

`ScrollUnmaskImage`: give it an outer frame that owns the corner shape (squircle
where supported) — `corner-shape` only pairs with `border-radius`, not the
`clip-path` the scroll-reveal mask was using, so the mask now lives on an inner
element while the frame clips to the (optionally squircle) corner. Also add
squircle corners to `ThemeToggle`, which was missed in the earlier pass.
