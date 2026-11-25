// Monday Morning Punchlines — one original joke, deterministic text output.
// No clock, no randomness, no network, no secrets: two runs write identical bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A contract you do not remember signing, and the week kept the evidence.
const JOKE = "Monday morning is a contract you signed while asleep, and the week has the footage.";

export function writeJoke(): string {
  // The gate counts Unicode characters, not bytes; assert before writing.
  const length = Array.from(JOKE).length;
  if (length < 1 || length > 200) {
    throw new Error("joke must be 1 to 200 characters");
  }
  if (!JOKE.trim()) {
    throw new Error("joke cannot be only whitespace");
  }
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const target = join(outputDir, "entry.txt");
  writeFileSync(target, JOKE, "utf8");
  return target;
}

writeJoke();
