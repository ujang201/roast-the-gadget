// One-Line Roast: the gadget I use every day.
// Writes a single roast line to $OUTPUT_DIR/entry.txt (default /output).
// Node 22, no dependencies, no network, deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast, assembled from its clauses so the wording stays in one place
// and easy to tighten later. One sentence, one target, one concrete gripe:
// the earbuds die while their case, which exists only to charge them,
// sits there fully charged and useless.
const clauses = [
  "My earbuds die at 3% while their case sits at 100%",
  "the case is just a tiny coffin with a charging port",
];

const line = clauses.join(" — ") + ".";

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, line, "utf8");
  console.log(`wrote ${line.length} chars to ${target}`);
}

main();
