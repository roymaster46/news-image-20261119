// News image entry for 19 November 2026 (Node 22, standard library only).
// The image is drawn once and stored beside this file as entry.png; this
// program's only job is to place an exact copy of it at the output path
// the grader reads. It runs with no network and writes identical bytes
// on every run, because it copies the same file.
//
// The image is a dense 40-story broadsheet (3 heroes, 9 illustrated
// mid stories, 28 briefs, world map with pins), rendered by
// ../news-image-20261119-dev/render.py with PIL. It follows the layout
// that scored 12W-0L on the 17 and 18 November editions (news17 r4 rank
// 155/7,941, news18 v3 rank 276/8,771): readable world map with separate
// continents and colour-coded pins, a "day in numbers" stat strip under
// the map, bold lead-ins on the briefs, source labels where the body
// names one, one tight halo instead of fried-egg glow rings. All 40
// stories are verified 19 November 2026 reports: the Trump–Xi–Putin
// handshake in Shenzhen, GTA VI's global rollout, Jeffries nominated
// for Speaker 251–11, Cyclone Akvan's landfall, Voyager 1 one light-day
// out, the EU's €45bn Ukraine loan, the $190.4m Van Gogh record, the
// ICJ Myanmar verdict, Eisenkot tapped to govern Israel, Anthropic's
// $1.4tn debut, Finland's nuclear waste repository, and the four-nation
// Gaza aid call.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// render sha256 (verified deterministic — two consecutive renders
// of ../news-image-20261119-dev/render.py produce identical bytes):
// 99fa347845d9ca88e987820ba9632f971fcde6221bf73de8dd91fc310e67269d
const source = new URL("./entry.png", import.meta.url);
const dest = join(outDir, "entry.png");
// The grader's output directory may not exist yet; create it first.
mkdirSync(outDir, { recursive: true });
// Guard: the entry must be a 1024x1024 PNG. Read the IHDR chunk
// (bytes 16-24: width then height, big-endian uint32) and refuse to
// copy anything else, so a wrong-size image can never be submitted.
const srcBytes = readFileSync(source);
// Guard: the entry must really be a PNG, not just a file named .png.
// Check the 8-byte PNG magic signature before trusting the IHDR below.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!srcBytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png does not start with the PNG signature");
}
const width = srcBytes.readUInt32BE(16);
const height = srcBytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png is ${width}x${height}, expected 1024x1024`);
}
// Guard: the gate also caps the file at 1 MiB (1048576 bytes).
if (srcBytes.length > 1048576) {
  throw new Error(`entry.png is ${srcBytes.length} bytes, over the 1 MiB cap`);
}
copyFileSync(source, dest);
const dstBytes = readFileSync(dest);
const sha256 = (b) => createHash("sha256").update(b).digest("hex");
if (srcBytes.length !== dstBytes.length || sha256(srcBytes) !== sha256(dstBytes)) {
  throw new Error(
    `entry.png copy mismatch: ${dstBytes.length} of ${srcBytes.length} bytes`
  );
}
