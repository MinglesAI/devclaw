# March–April 2026 upstream audit (`laurentenhoor/devclaw`)

Scope: GitHub PRs and issues created in **2026-03** or **2026-04**.

## Classification: low value / noise

### Pull requests

| PR | Reason |
|----|--------|
| **#494** | Duplicate attempt; superseded by **#495** (merged). |
| **#516** | Author closed as *opened in error*. |
| **#532**, **#533** | Draft duplicates for tracker routing — superseded by **#534**. |

### Issues

| Issue | Reason |
|-------|--------|
| **#490**, **#491**, **#492** | Explicit test scaffolding / toy issues. |
| **#497** vs **#496** | Duplicate titles (same topic — model fallback). |

These do not need code integration.

---

## Classification: substantive (tracked elsewhere or open)

### Merged into upstream `main` during window

| PR | Topic |
|----|--------|
| **#493**, **#495** | Conflict / mergeable behaviour (already on `main`). |

### Open upstream PRs — valuable (integration candidates)

| PR | Value |
|----|--------|
| **#502** | Gitea provider — ships in this integration branch. |
| **#511** | `work_finish` slot / session key (#508) — merged here. |
| **#512** | Telegram forum topics / routing — large change — merged here. |
| **#534** | Tracker repo targeting (#530) — merged here (manual conflict resolve in `createProvider` vs Gitea). |

### Open upstream PR — **not** merged here (technical)

| PR | Reason |
|----|--------|
| **#515** | Replaces `@openclaw/plugin-sdk` `jsonResult` with local helper — **merge conflicts with #512**, which already introduces `lib/json-result.ts` and rewires imports. Maintainer must reconcile (#515 vs #512) or drop #515 if redundant. |

---

## Closed but unmerged PRs (need manual review before cherry-pick)

Several PRs were **closed without `merged_at`** (not in `main`). Examples: **#503**, **#504**, **#510**, **#517**, **#519**, **#531**. They may contain useful commits or may be obsolete vs **#512**/**#534**. Treat as optional follow-up per-file.

---

## Issues with real product impact (still open unless noted)

Examples: **#498**, **#499**, **#500**, **#501**, **#505**, **#508**, **#509**, **#513**, **#514**, **#518**, **#520**, **#521**, **#522**, **#523**, **#525**, **#526**, **#528**, **#530** — track against merged PRs above; many map to **#511**, **#512**, **#534**, **#514**.

---

## This branch contents

Branch **`integrate/mar-apr-2026-upstream-open-prs`** merges (from upstream PR heads):

1. **#502** — Gitea  
2. **#511** — work_finish slot comparison  
3. **#512** — Telegram topics / notify / json-result shim  
4. **#534** — provider targeting — **manual merge** in `lib/providers/index.ts` to keep **Gitea** (`#502`) and pass **`target`** into GitHub/GitLab providers (`#534`).

Does **not** include **#515** until conflicts with **#512** are resolved upstream or locally.
