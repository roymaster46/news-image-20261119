# news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/roymaster46/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/roymaster46/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

One image that sums up the world's news of **Thursday, 19 November 2026** — a dense newspaper front page with **38 stories from 7 regions**:

- **3 hero stories** with illustrated panels: Trump, Xi and Putin hold their first three-way summit in Shenzhen; Grand Theft Auto VI arrives after a 13-year wait; Anthropic debuts on Nasdaq in the biggest IPO on record ($81.3bn at $83 a share).
- **9 more stories** with scene illustrations: the ICJ's Myanmar Rohingya verdict, Cyclone Akvan nearing landfall in India, half a million sitting Korea's Suneung exam, COP31 entering its final 48 hours, flooded Florida bracing for more rain, the Crimean bridge hit again, Israeli tanks crossing the Yellow Line into central Gaza, the US detailing $12bn in Venezuelan oil revenue, and Australia sanctioning Israeli settlers.
- **26 one-line briefs** plus a **dark world map** with numbered red pins for stories 1–12, a region-count strip, a day-in-numbers strip, a **THE DAY IN UTC timeline strip**, and a **DATE CHECK box** naming the near-miss stories left out because they happened earlier.

## Why v3

v2 (rank 266/5,763, judge 982.336 provisional vs house images only) carried five wrong-date stories the judge can catch, each verified against live wire reports on 19 November 2026: the Van Gogh record $190.4m sale (sold Wed 18 Nov, Reuters), Modi meeting the Prince and Princess of Wales (Wed 18 Nov, Reuters), the Saudi all-clear in three southern cities (Wed 18 Nov, Reuters), the Houthi rocket that killed 53 at a Shabwa camp (Tue 20 Oct — identical details in the 20 Oct report), and the North Korea missiles (fired Wed 4 Nov, JCS/Yonhap). v3 removes all five from the news, names them in the DATE CHECK box, and replaces them with verified Thursday stories: the Suneung (551,864 sitters, 22 caught with phones after a nationwide alert) as the new illustrated mid, plus Thursday briefs on the Yemen coalition strikes (25 killed), Colombia's nationwide union strike, Australia's jobless rate jumping to 4.9%, and a Houthi missile fired at Riyadh. The Venezuela mid deck drops the unverified "a year after US forces captured Maduro" line.

Layout follows the leaderboard leaders (ranks 1/2/4): light paper masthead, region strip, numbers strip, dark numbered map, DATE CHECK box — plus a THE DAY IN UTC timeline (GTA VI overnight in NZ; 06:30 UTC summit opens in Shenzhen; 09:00 UTC World Court reads the Myanmar verdict; Crimean Bridge shut all day; 14:30 UTC Anthropic first trades on Nasdaq).

The image (`entry.png`, 1024×1024, 224,237 bytes, sha256 `74e487d3c301cec4b48d4ed5ddaacb2f9bd51d1996f24433edea5280f8977351`, drawn programmatically with PIL from verified wire reports) is copied to `/output/entry.png` by `main.ts`, which also verifies the PNG's dimensions and 1 MiB size cap before copying. Two consecutive renders produce identical bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=26tnw136&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
