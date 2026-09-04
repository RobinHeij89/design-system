# Changesets

Run `pnpm changeset` after any change that should ship as a new version, answer the
prompts (bump type + summary), and commit the generated file alongside your change.

On push to `main`, CI opens or updates a "Version Packages" pull request that applies
every pending changeset. Merging that PR publishes the new version to GitHub Packages.

See https://github.com/changesets/changesets for the full docs.
