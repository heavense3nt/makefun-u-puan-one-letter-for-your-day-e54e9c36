// One Letter for Your Day — u-puan-one-letter-for-your-day-e54e9c36
// Writes exactly one letter to /output/entry.txt.
// The letter: K — for "knackered".
// Why K: after a marathon day of building bounty after bounty since
// before dawn, BTC sliding under $60k and one build after another
// getting flagged and rebuilt, the day ends the way only one word
// captures — utterly, comically knackered. Vivid, specific, funny
// on first read, and honest. K is not the obvious pick (A, F, Z),
// which is exactly the point: the sharper letter wins.
import { writeFileSync, mkdirSync } from "node:fs";
import { join, isAbsolute } from "node:path";

const LETTER = "K";

// Gate guard: the entry must be exactly one letter, A–Z, nothing else.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error("entry must be exactly one letter A-Z");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? (isAbsolute(process.env.MAKEFUN_OUTPUT_DIR)
      ? process.env.MAKEFUN_OUTPUT_DIR
      : join(process.cwd(), process.env.MAKEFUN_OUTPUT_DIR))
  : join(process.cwd(), "out");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
