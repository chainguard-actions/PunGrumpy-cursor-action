<!-- markdownlint-disable -->

# Hardening Report: PunGrumpy--cursor-action/v1.0.2

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **PunGrumpy--cursor-action/v1.0.2** was hardened automatically. 1 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

The composite action uses `actions/setup-node@v6`, which is pinned to a mutable tag (`v6`) rather than an immutable 40-character commit SHA. If the tag is moved (e.g., by a supply-chain compromise of the upstream action), the action will silently execute different code. It should be pinned to a full SHA, e.g. `actions/setup-node@<40-char-sha> # v6`.

Locations:

- `action.yml:72`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses

**Notes:**

Pinned `actions/setup-node@v6` to its full commit SHA `249970729cb0ef3589644e2896645e5dc5ba9c38` in `action.yml` line 72. The mutable tag `v6` is preserved as an inline comment for readability: `uses: actions/setup-node@249970729cb0ef3589644e2896645e5dc5ba9c38 # v6`.

