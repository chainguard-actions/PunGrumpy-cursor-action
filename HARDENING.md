<!-- markdownlint-disable -->

# Hardening Report: PunGrumpy--cursor-action/v1.0.1

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **PunGrumpy--cursor-action/v1.0.1** was hardened automatically. 1 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

The composite action uses `actions/setup-node@v6`, which is pinned to a mutable tag (`v6`) rather than an immutable 40-character commit SHA. If the tag is moved (e.g., by a supply-chain compromise of the upstream action), the action will silently execute different code. Replace with the full SHA, e.g. `actions/setup-node@<40-char-sha> # v6`.

Locations:

- `action.yml:57`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses

**Notes:**

Pinned actions/setup-node@v6 to actions/setup-node@249970729cb0ef3589644e2896645e5dc5ba9c38 # v6 in hardened/action/action.yml (line 57). The full commit SHA was resolved via lookup_action_sha to prevent supply-chain attacks from mutable tag references.

