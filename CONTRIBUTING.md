# Contributing

## CSS

**CSS Modules are required.** Every component ships its own `<name>.module.css`, imported as `styles` and applied via `clsx`.

**Use native CSS nesting — BEM naming is obsolete here.** CSS Modules already scope every class name per file, and nesting expresses the parent/child relationship directly in the stylesheet's structure. Together, that makes BEM's `.block__element--modifier` naming redundant — it was solving a global-namespace problem CSS Modules already solves, and a visual-hierarchy problem nesting already expresses.

Instead:

```css
/* ❌ BEM */
.card { }
.card__title { }
.card__title--large { }

/* ✅ Nested, single-word classes */
.card {
  .title {
    &.large { }
  }
}
```

- The root element of a component gets one plain class matching the component (`.button`, `.card`, `.alert`).
- Child elements are nested inside using their own simple name (`.icon`, `.label`, `.body`) — no `__` prefix, the nesting already shows the relationship.
- Variants/sizes are bare adjective classes nested with `&` (`&.primary`, `&.sm`) and applied via `clsx(styles.button, styles[variant])` — no `--` prefix.
- Pseudo-classes, pseudo-elements, and media queries nest with `&` / directly inside the rule they apply to, rather than living in a separate block far from the property they affect.
- Prefer relational selectors (`:has()`) over sibling combinators when a class needs to react to a hidden input's state (see `checkbox.module.css` / `radio.module.css`) — it reads naturally nested under the shared parent.

## Corners: squircle by default

Where an element has rounded corners (and isn't a perfect circle), use `corner-shape: squircle` for a smoother, superellipse curve — but only inside `@supports (corner-shape: squircle)`, since it's not supported everywhere yet. A squircle at the *same* `border-radius` as a normal rounded corner reads flatter/less rounded, so scale the radius up inside the `@supports` block using the `--rh-ds-squircle-multiplier` token (defined in `tokens.css`, default `5` — tune it there, not per-component):

```css
.button {
  border-radius: var(--rh-ds-radius-pill);

  @supports (corner-shape: squircle) {
    border-radius: calc(var(--rh-ds-radius-pill) * var(--rh-ds-squircle-multiplier));
    corner-shape: squircle;
  }
}
```

Skip this on perfect circles (`border-radius: 50%` avatars, radio dots, the cursor) — squircle doesn't apply to circles.
