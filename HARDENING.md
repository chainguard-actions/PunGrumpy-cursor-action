<!-- markdownlint-disable -->

# Hardening Report: PunGrumpy--cursor-action/v1.0.3

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **PunGrumpy--cursor-action/v1.0.3** was hardened automatically. 1 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

The action uses `actions/setup-node@v6` (a mutable tag reference) instead of a pinned 40-character commit SHA. A tag can be moved to point to a different, potentially malicious commit, enabling supply-chain attacks.

Locations:

- `action.yml:79`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses

**Notes:**

Pinned actions/setup-node@v6 to its full commit SHA (249970729cb0ef3589644e2896645e5dc5ba9c38) in hardened/action/action.yml line 79. The original tag is preserved as a comment for readability.

