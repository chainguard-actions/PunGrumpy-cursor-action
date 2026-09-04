<!-- markdownlint-disable -->

# Hardening Report: PunGrumpy--cursor-action/v1.0.2

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **PunGrumpy--cursor-action/v1.0.2** was hardened automatically. 2 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

Multiple `uses:` references across action.yml and workflow files are pinned to mutable tags or version strings rather than immutable 40-character SHA commit hashes. This exposes the action to supply-chain attacks if any upstream action is compromised or its tag is moved. Failing references include: actions/checkout@v6, actions/setup-node@v6, oven-sh/setup-bun@v2, actions/cache@v5, changesets/action@v1.

Locations:

- `action.yml:68`
- `.github/workflows/ci.yml:14`
- `.github/workflows/ci.yml:16`
- `.github/workflows/ci.yml:20`
- `.github/workflows/ci.yml:22`
- `.github/workflows/ci.yml:52`
- `.github/workflows/ci.yml:53`
- `.github/workflows/ci.yml:79`
- `.github/workflows/ci.yml:81`
- `.github/workflows/ci.yml:107`
- `.github/workflows/release.yml:20`
- `.github/workflows/release.yml:24`
- `.github/workflows/release.yml:28`
- `.github/workflows/release.yml:30`
- `.github/workflows/release.yml:46`

### missing-permissions (severity: medium)

release.yml has a top-level `permissions:` block (id-token: write, contents: write, pull-requests: write, issues: write) but the single `release` job has no job-level `permissions:` key of its own. Because there is no top-level permissions block that is minimal and no per-job override, the job inherits all four write-capable scopes even for steps that do not need them all.

Locations:

- `.github/workflows/release.yml:1`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses, missing-permissions

**Notes:**

Pinned all `uses:` references to full 40-character SHA hashes: actions/checkout@v6 → d23441a48e516b6c34aea4fa41551a30e30af803, actions/setup-node@v6 → 249970729cb0ef3589644e2896645e5dc5ba9c38, oven-sh/setup-bun@v2 → 0c5077e51419868618aeaa5fe8019c62421857d6, actions/cache@v5 → caa296126883cff596d87d8935842f9db880ef25, changesets/action@v1 → a45c4d594aa4e2c509dc14a9f2b3b67ba3780d0d. Original tags preserved as inline comments. Added explicit job-level `permissions:` block to the `release` job in release.yml (id-token: write, contents: write, pull-requests: write, issues: write) so permissions are explicit rather than inherited from the top-level block.

