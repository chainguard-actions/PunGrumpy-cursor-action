/** Cursor CLI lab artifacts use build ids like `2026.03.20-44cb435`. */
export declare const CURSOR_LAB_VERSION_RE: RegExp;
/**
 * Parses a plain-text latest-version response body (single line, optional `v` prefix).
 */
export declare const parseLabVersionString: (body: string) => string | null;
/**
 * Extracts the lab build id from the official bash or PowerShell install script body.
 */
export declare const extractLabVersionFromInstallScript: (body: string) => string | null;
//# sourceMappingURL=cursor-version.d.ts.map