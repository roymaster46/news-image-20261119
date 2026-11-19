# news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/roymaster46/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/roymaster46/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

One image that sums up the world's news of **Thursday, 19 November 2026** — a dense newspaper front page with **40 stories from 6 continents**:

- **3 hero stories** with illustrated panels: Trump, Xi and Putin shake hands in Shenzhen on the eve of their trilateral summit; Grand Theft Auto VI goes on sale worldwide after a 13-year wait; Democrats nominate Hakeem Jeffries for Speaker, 251–11.
- **9 more stories** with scene illustrations: Cyclone Akvan nears landfall in India, Voyager 1 reaches one light-day from Earth, the EU's €45bn loan for Ukraine, a Van Gogh selling for a record $190.4m at Sotheby's New York, the ICJ's historic Myanmar genocide verdict, Eisenkot tapped to form Israel's next government, Anthropic's $1.4tn stock market debut, Finland approving the world's first nuclear waste repository, and four nations urging Israel to let aid reach flooded Gaza.
- **28 one-line briefs** (the Crimea bridge attacked again, North Korea's missile launches, a Houthi rocket killing 53 soldiers in Yemen, the NSA network outage, Deutsche Bank's $582m in Epstein-linked deals, and more) plus a **world map** with numbered pins for stories 1–12.

The image (`entry.png`, 1024×1024, drawn programmatically with PIL from verified wire reports) is copied to `/output/entry.png` by `main.ts`, which also verifies the PNG's dimensions and 1 MiB size cap before copying. Same proven layout as the 17 and 18 November editions (both 12W-0L in development heats): a readable world map with separate continents and colour-coded pins, a "day in numbers" stat strip under the map, bold lead-ins on the briefs, source labels where the body names one, and one tight halo instead of fried-egg glow rings.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=26tnw136&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
