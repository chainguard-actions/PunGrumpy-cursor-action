import type { Arch, Platform } from "./types";
/**
 * Resolves "latest" to a concrete lab build id via the version endpoint, with
 * fallback to the official install script (the lab endpoint often returns 403).
 */
export declare const resolveVersion: (version: string) => Promise<string>;
/**
 * Builds the download URL for the Cursor CLI tarball.
 * Pattern: https://downloads.cursor.com/lab/{version}/{platform}/{arch}/agent-cli-package.tar.gz
 */
export declare const buildDownloadUrl: (version: string, platform: Platform, arch: Arch) => string;
/**
 * Installer entry point
 * @returns Returns { binPath, cacheHit } where binPath is the directory added to PATH
 */
export declare const installCursorCLI: (requestedVersion: string) => Promise<{
    binPath: string;
    cacheHit: boolean;
    resolvedVersion: string;
}>;
//# sourceMappingURL=installer.d.ts.map