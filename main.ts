// SPDX-License-Identifier: MIT
// One-Line Office Joke: 24-Hour Sprint
// Writes a single one-line joke about office life to /output/entry.txt.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

const JOKE =
  "The office Wi-Fi password changes every month, but the snack drawer code has been 1234 for six years.";

const OUT_DIR = "/output";

// Fail loudly if the joke ever breaks the gate (1-200 characters, not blank).
if (JOKE.length < 1 || JOKE.length > 200 || !JOKE.trim()) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}

// /output is a mounted directory: empty its contents, never remove the dir itself.
mkdirSync(OUT_DIR, { recursive: true });
for (const entry of readdirSync(OUT_DIR)) {
  rmSync(`${OUT_DIR}/${entry}`, { recursive: true, force: true });
}

writeFileSync(`${OUT_DIR}/entry.txt`, JOKE, "utf8");
