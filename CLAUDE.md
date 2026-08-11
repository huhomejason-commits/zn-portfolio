## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Agent skills

### Issue tracker

Issues and specs live as GitHub issues, managed via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Five canonical roles with default names: needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.

## Portfolio site

This repo is 胡正男 (Hu Cheng-Nan)'s portfolio website, built with Astro and deployed to GitHub Pages at `https://huhomejason-commits.github.io/zn-portfolio/`.

- Content is Traditional Chinese only.
- Brand: black & white, using the ZN logo (`src/assets/logo/zn.png`).
- Works come from the Behance gallery "Design Portfolio 2026" (2022–2026: product design, exhibition design, picture books, graphic design).
- Single-page home (hero → works → about → contact) + one detail page per work.
- Contact: huhomejason@gmail.com; Behance / IG / LinkedIn placeholders.
- Site is Astro + GitHub Pages (base `/zn-portfolio/`).
