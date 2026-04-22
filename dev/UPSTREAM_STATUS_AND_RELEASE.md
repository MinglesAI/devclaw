# Upstream sync, issues, and Mingles release planning

This file is **MinglesAI maintainer documentation** (not published in the npm package; `dev/` is excluded from `package.json` `files`).

## How GitHub works here (short)

- A **fork** does not auto-receive commits from `laurentenhoor/devclaw`. You stay on the same `main` **SHA** until you `git fetch upstream` and **merge or rebase** (or open a PR from upstream into the fork).
- **Fixes that are only in a pull request** on the canonical repo are **not** in `main` until that PR is **merged**. So it can look like “a lot was fixed on GitHub” while your `main` (and npm install from main) is still on the last merge to `main`.
- **Closed issues** are not always the same as “in `main`”; some are closed as duplicate, won’t fix, or tracked via a still-open PR. Cross-check the **linked PR** and its **merge** state.

## Current pointer (source of truth: `main` branch)

| Repository | `main` @ last check | Notes |
|------------|--------------------|--------|
| `laurentenhoor/devclaw` | `f454f10` — *fix: use npm install in publish workflow* (2026-03-04) | Canonical |
| `MinglesAI/devclaw` | **Same commit** as above | Fork `main` is **in sync** with upstream `main` (no missing upstream commits on this SHA). |

If this table is wrong, run:

```bash
git fetch https://github.com/laurentenhoor/devclaw.git main
git rev-parse HEAD FETCH_HEAD
```

## What is *not* in `main` yet (open PRs on canonical)

These exist on `laurentenhoor/devclaw` but are **not merged** into `main` (list as of branch / timestamp in our audit; re-check before release):

| PR | Title (summary) |
|----|-----------------|
| #534 | fix: use the configured repo for task and label operations (issue #530) |
| #515 | Replace openclaw/plugin-sdk jsonResult with local helper |
| #512 | feat: telegram group topics support (message_thread_id) #509 |
| #511 | fix #508: improve slot session key comparison in work-finish tool |
| #502 | feat: add Gitea provider support |

**Implication:** any work you expected from these is **not** in a release cut from current `main` until those PRs land (or you cherry-pick and maintain a delta — not recommended without review).

## Mingles fork: own open PR

| PR | State | Note |
|----|--------|------|
| #1 *Merge yaqub0r/devclaw-local-stable — dev tree docs & runbooks* | **Open** (if still) | Adds `dev/` runbooks from `yaqub0r` branch; no `lib/` code change vs `main`. |

## Recently merged on canonical (sample of closed work on `main`)

High-signal merged PRs (for changelog / release notes ideas), *not exhaustive*:

- #495, #493 — PR mergeable re-check, conflict / branch instructions
- #476, #474, #471 — state label / channel CLI / GraphQL mergeable
- #468, #467, #479 — version tracking, config / defaults layer
- #466 — heartbeat + runtime for notifications
- #444 — pass model to RPC / workflow.yaml

Use full list: GitHub → `laurentenhoor/devclaw` → Pull requests → **Merged**.

## Recently closed issues (sample)

Examples of closed issues (verify linked PRs before assuming code path):

- #529 — workspace AGENTS.md / HEARTBEAT.md / TOOLS.md overwrite behaviour
- #527 — build/release stamping for exact source ref
- #524 — ACPX handoff / agent id
- #505 — DevClaw tools visibility in Telegram
- #497 / #496 — model fallback for workers
- #489, #488, #487, #486, #485 — heartbeat / sessions / workflow bugs (many tied to merged fixes above)

Full list: Issues → **Closed**.

## Suggested Mingles release workflow

1. **Stay aligned with upstream `main`** unless you intentionally ship a patch branch.
2. **Decide on upstream open PRs**: wait for merge upstream, or track issues #530, #508, #509, etc.
3. **Merge or close Mingles PR #1** when you want the `dev/` docs on `main`.
4. **Bump version** in `package.json` / follow `RELEASE.md` / tag after changelog entry.
5. **Optional:** publish scoped package (e.g. `@minglesai/devclaw`) only if org policy requires a fork line; otherwise depend on upstream npm and git SHAs.

## Audit metadata

- Generated during maintainer sync review (docs-only; regen when preparing release).
