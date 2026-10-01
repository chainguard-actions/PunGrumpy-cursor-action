<!-- markdownlint-disable -->

# Hardening Report: PunGrumpy--cursor-action/v1.0.0

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **PunGrumpy--cursor-action/v1.0.0** was hardened automatically. 1 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

The composite action uses `actions/setup-node@v6`, which is a mutable tag reference rather than a pinned full 40-character SHA commit hash. This means the action could silently pull in a different (potentially malicious) version of setup-node if the tag is moved. It should be pinned to a specific commit SHA, e.g. `actions/setup-node@<40-char-sha> # v6`.

Locations:

- `action.yml:54`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses

**Notes:**

Pinned actions/setup-node@v6 to actions/setup-node@249970729cb0ef3589644e2896645e5dc5ba9c38 # v6 in hardened/action/action.yml line 54. The SHA was resolved via lookup_action_sha.

