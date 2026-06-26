<!-- markdownlint-disable -->

# Hardening Report: PunGrumpy--cursor-action/v1.0.0

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `1`

Action **PunGrumpy--cursor-action/v1.0.0** was hardened automatically. 1 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

The action uses actions/setup-node@v6, which is pinned to a mutable tag rather than an immutable 40-character commit SHA. This means the referenced action could be silently replaced with a different (potentially malicious) version without any change to this file.

Locations:

- `action.yml:53`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses

**Notes:**

Pinned actions/setup-node@v6 to its immutable commit SHA (48b55a011bda9f5d6aeb4c2d9c7362e8dae4041e) in action.yml line 53. The mutable tag is preserved as a comment for readability.

