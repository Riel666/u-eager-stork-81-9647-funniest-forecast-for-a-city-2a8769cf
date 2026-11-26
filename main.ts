import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Tomorrow in Nowhereville: heavy fog, light rain, and a 90% chance the sun files a formal complaint.";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_DIR + "/entry.txt", LINE, "utf8");
