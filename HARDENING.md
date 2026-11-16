<!-- markdownlint-disable -->

# Hardening Report: PunGrumpy--cursor-action/v2.1.0

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **PunGrumpy--cursor-action/v2.1.0** was hardened automatically. 1 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

action.yml uses a composite step pinned to a mutable tag, not a full 40-character commit SHA: `uses: actions/setup-node@v6`. Pin it to the commit SHA, e.g. `actions/setup-node@<sha> # v6`.

Locations:

- `action.yml:92`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses

**Notes:**

Pinned actions/setup-node@v6 in action.yml to commit 249970729cb0ef3589644e2896645e5dc5ba9c38 and kept the tag as a trailing comment (# v6). There are no other uses: references in the action. I didn't run the action or re-run the analysis after the change.

