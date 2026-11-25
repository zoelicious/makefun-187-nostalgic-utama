import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const text = "On the train home my mother fell asleep on my shoulder while rice fields slid past the window, and I stayed perfectly still so I would not wake her.";
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
