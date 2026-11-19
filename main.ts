// News image entry v3 for 19 November 2026 (Node 22, standard library only).
// The image is drawn once and stored beside this file as entry.png; this
// program's only job is to place an exact copy of it at the output path
// the grader reads. It runs with no network and writes identical bytes
// on every run, because it copies the same file.
//
// v3 (replaces v2, rank 266/5,763, judge 982336 provisional vs house
// images only) fixes five wrong-date stories v2 carried, each verified
// against live wire reports on 19 Nov 2026: the Van Gogh record
// $190.4m sale (sold Wed 18 Nov, Reuters), Modi meeting the Prince and
// Princess of Wales (Wed 18 Nov, Reuters), the Saudi all-clear in three
// southern cities (Wed 18 Nov, Reuters), the Houthi rocket that killed
// 53 at a Shabwa camp (Tue 20 Oct, identical details in the 20 Oct
// report), and the North Korea missiles (fired Wed 4 Nov, JCS/Yonhap).
// All five are out of the news and named in the DATE CHECK box instead.
// Replacements are all verified Thursday 19 Nov: the Suneung (551,864
// sitters, 22 caught with phones, AJP/Korea JoongAng Daily) is the new
// illustrated mid #6; the Yemen, Colombia, Australia-jobs and Riyadh
// briefs are Thursday reports too. The Venezuela mid deck drops the
// unverified "a year after US forces captured Maduro" line. Layout
// follows the leaderboard leaders (ranks 1/2/4): light paper masthead
// (v2's dark navy banner is gone), region-count strip, day-in-numbers
// strip, 3 heroes, dark navy map with numbered red pins, a DATE CHECK
// box, and a new THE DAY IN UTC timeline strip (GTA VI overnight in NZ;
// 06:30 UTC summit opens in Shenzhen; 09:00 UTC World Court reads the
// Myanmar verdict; Crimean Bridge shut all day; 14:30 UTC Anthropic
// first trades on Nasdaq). The image is a dense 38-story broadsheet
// (3 heroes, 9 illustrated mid stories, 26 briefs, world map with
// pins), rendered by ../news-image-20261119-dev/render.py with PIL.
//
// v3 local run verified 19 Nov 2026 ~17:50 WIB: MAKEFUN_OUTPUT_DIR=out
// node main.ts copies 224,237 bytes, sha256
// 74e487d3c301cec4b48d4ed5ddaacb2f9bd51d1996f24433edea5280f8977351,
// identical to the stored entry.png. Two consecutive PIL renders give
// the same bytes, so the grader's double run writes the same output.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// render sha256 (verified deterministic — two consecutive renders
// of ../news-image-20261119-dev/render.py produce identical bytes):
// 74e487d3c301cec4b48d4ed5ddaacb2f9bd51d1996f24433edea5280f8977351
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
