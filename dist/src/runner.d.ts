import type { ActionInputs, AgentResult } from "./types";
/**
 * Runs cursor-agent with the given inputs.
 * Captures stdout and stderr separately.
 * Does NOT throw on non-zero exit codes — callers decide how to handle them.
 * @returns The stdout, stderr, and exit code.
 */
export declare const runAgent: (inputs: ActionInputs) => Promise<AgentResult>;
//# sourceMappingURL=runner.d.ts.map