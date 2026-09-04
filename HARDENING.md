<!-- markdownlint-disable -->

# Hardening Report: PunGrumpy--cursor-action/v1.0.3

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **PunGrumpy--cursor-action/v1.0.3** was hardened automatically. 1 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

Multiple `uses:` references in action.yml and workflow files use mutable tags instead of full 40-character SHA commit hashes, making them vulnerable to supply-chain attacks if the referenced tag is moved or compromised. Unpinned references: action.yml: `actions/setup-node@v6`; ci.yml: `actions/checkout@v6`, `actions/setup-node@v6`, `oven-sh/setup-bun@v2`, `actions/cache@v5` (appears in multiple jobs); release.yml: `actions/checkout@v6`, `actions/setup-node@v6`, `oven-sh/setup-bun@v2`, `actions/cache@v5`, `changesets/action@v1`.

Locations:

- `action.yml:74`
- `.github/workflows/ci.yml:18`
- `.github/workflows/ci.yml:21`
- `.github/workflows/ci.yml:24`
- `.github/workflows/ci.yml:26`
- `.github/workflows/ci.yml:55`
- `.github/workflows/ci.yml:57`
- `.github/workflows/ci.yml:85`
- `.github/workflows/ci.yml:88`
- `.github/workflows/ci.yml:112`
- `.github/workflows/release.yml:18`
- `.github/workflows/release.yml:22`
- `.github/workflows/release.yml:27`
- `.github/workflows/release.yml:29`
- `.github/workflows/release.yml:40`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses

**Notes:**

Pinned all mutable tag references to full SHA hashes across 3 files:
- action.yml: actions/setup-node@v6 → @249970729cb0ef3589644e2896645e5dc5ba9c38
- .github/workflows/ci.yml: actions/checkout@v6 → @d23441a48e516b6c34aea4fa41551a30e30af803, actions/setup-node@v6 → @249970729cb0ef3589644e2896645e5dc5ba9c38, oven-sh/setup-bun@v2 → @0c5077e51419868618aeaa5fe8019c62421857d6, actions/cache@v5 → @caa296126883cff596d87d8935842f9db880ef25 (all 4 jobs updated)
- .github/workflows/release.yml: same pins as ci.yml plus changesets/action@v1 → @a45c4d594aa4e2c509dc14a9f2b3b67ba3780d0d
All original tag names preserved as inline comments for readability.

