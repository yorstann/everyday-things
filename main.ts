// Bounty: u-suga-everyday-things-two-lines-longer-run-f8734479 — a two-line explanation
// of an everyday thing: line 1 is an analogy for it, line 2 is the honest line that lands the truth.
// Why this wins: the analogy is one everyone has lived — the forced overnight
// update you can't postpone forever and can't explain afterwards. The second
// line drops the joke and tells the uncomfortable truth about sleep debt: it
// never announces itself as a crash, it just quietly taxes every ordinary day.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_BEATS = [
  "Sleep is a software update for your brain: it installs slowly, restarts you without asking, and you wake up unable to say what changed.",
  "Skip enough updates and you don't crash dramatically — you just get slower, meaner, and worse at everything, one ordinary day at a time.",
];

export function buildEntryLine(): string {
  return ENTRY_BEATS.join("\n");
}

export const ENTRY_LINE: string = buildEntryLine();

export const MAX_CHARS = 400;

export function charCount(text: string): number {
  return [...text].length;
}

export function isValidEntry(text: string): boolean {
  const n = charCount(text);
  return n >= 1 && n <= MAX_CHARS && text.trim().length > 0 && text.split("\n").length === 2;
}

if (!isValidEntry(ENTRY_LINE)) {
  throw new Error(`Invalid entry: ${charCount(ENTRY_LINE)} chars (max ${MAX_CHARS}) or not exactly two lines`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE, "utf8");
