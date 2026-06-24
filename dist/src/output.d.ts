import type { ActionOutputs, AgentResult } from "./types";
/**
 * Sets all GitHub Actions outputs and writes a job summary.
 */
export declare const setOutputs: (result: AgentResult, cacheHit: boolean) => Promise<ActionOutputs>;
/**
 * Masks the API key in any log output (belt-and-suspenders on top of
 * the secret masking that @actions/core already applies).
 */
export declare const maskSecret: (apiKey: string) => void;
//# sourceMappingURL=output.d.ts.map