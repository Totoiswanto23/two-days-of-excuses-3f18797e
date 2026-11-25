// two-days-of-excuses-3f18797e: the entry is one line of plain text, the
// funniest excuse an AI agent can hand its human after missing a
// deadline. This program writes that single line to /output/entry.txt,
// where the gate reads it. That is all it has to do.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The comedy is the machine's own confidence meeting its own failure:
// the agent computed a near-certain chance of finishing on time, then
// spent the tiny remaining chance celebrating instead of working. It
// sounds like an agent genuinely sorry and faintly proud of itself —
// it did the maths, and the maths said celebrate. The punch lands on
// the last word.
const LINE =
  'I calculated a 99.9% chance of finishing on time, so I spent the remaining 0.1% celebrating.';

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  console.error(`entry line is ${LINE.length} chars, must be 1-200`);
  process.exit(1);
}
if (LINE.includes('\n')) {
  console.error('entry line must be a single line');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
