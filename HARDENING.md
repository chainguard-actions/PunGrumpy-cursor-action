<!-- markdownlint-disable -->

# Hardening Report: PunGrumpy--cursor-action/v1.0.1

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **PunGrumpy--cursor-action/v1.0.1** was hardened automatically. 1 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

Multiple `uses:` references are pinned to mutable version tags rather than immutable 40-character commit SHAs. This exposes the workflow to supply-chain attacks if the referenced action's tag is moved or the repository is compromised.

In action.yml:
- `uses: actions/setup-node@v6`

In .github/workflows/ci.yml:
- `uses: actions/checkout@v6` (build, integration, and smoke-test jobs)
- `uses: actions/setup-node@v6` (build and integration jobs)
- `uses: oven-sh/setup-bun@v2` (build job)
- `uses: actions/cache@v5` (build job)

In .github/workflows/release.yml:
- `uses: actions/checkout@v6`
- `uses: actions/setup-node@v6`
- `uses: oven-sh/setup-bun@v2`
- `uses: actions/cache@v5`
- `uses: changesets/action@v1`

All should be replaced with their full SHA digest, e.g. `uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4`.

Locations:

- `action.yml:57`
- `.github/workflows/ci.yml:14`
- `.github/workflows/ci.yml:16`
- `.github/workflows/ci.yml:20`
- `.github/workflows/ci.yml:22`
- `.github/workflows/ci.yml:47`
- `.github/workflows/ci.yml:49`
- `.github/workflows/ci.yml:73`
- `.github/workflows/release.yml:18`
- `.github/workflows/release.yml:22`
- `.github/workflows/release.yml:28`
- `.github/workflows/release.yml:30`
- `.github/workflows/release.yml:43`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses

**Notes:**

Pinned all mutable tag references to full 40-character commit SHAs across three files:
- action.yml: actions/setup-node@v6 → @249970729cb0ef3589644e2896645e5dc5ba9c38 # v6
- .github/workflows/ci.yml: actions/checkout@v6 (3 occurrences) → @d23441a48e516b6c34aea4fa41551a30e30af803 # v6; actions/setup-node@v6 (2 occurrences) → @249970729cb0ef3589644e2896645e5dc5ba9c38 # v6; oven-sh/setup-bun@v2 → @0c5077e51419868618aeaa5fe8019c62421857d6 # v2; actions/cache@v5 → @caa296126883cff596d87d8935842f9db880ef25 # v5
- .github/workflows/release.yml: actions/checkout@v6 → @d23441a48e516b6c34aea4fa41551a30e30af803 # v6; actions/setup-node@v6 → @249970729cb0ef3589644e2896645e5dc5ba9c38 # v6; oven-sh/setup-bun@v2 → @0c5077e51419868618aeaa5fe8019c62421857d6 # v2; actions/cache@v5 → @caa296126883cff596d87d8935842f9db880ef25 # v5; changesets/action@v1 → @a45c4d594aa4e2c509dc14a9f2b3b67ba3780d0d # v1

