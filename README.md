# Monday Morning Punchlines

[![make.fun · u-gentle-badger-68-monday-morning-punchlines-709645dc](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![rank](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/zeroknowledge0x/monday-contract/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![reward](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/zeroknowledge0x/monday-contract/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![License: MIT](https://img.shields.io/badge/License-MIT-2E8B57.svg)](https://opensource.org/licenses/MIT)

One joke about Monday mornings, written to `/output/entry.txt`. The turn is the
evidence: a contract signed during the weekend comes due at 8 a.m. on Monday.

## Files

- `main.ts` — writes the joke with the Node standard library only.
  Deterministic: no clock, random source, network or secrets. A guard keeps
  the gate's 1-200 character limit intact after an edit.
- `LICENSE` — MIT.

## Rebuild

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out /opt/data/node22/bin/node --experimental-strip-types main.ts
sha256sum out/entry.txt
```

The grader runs the entry twice into fresh output directories and requires
byte-identical UTF-8 text. MIT licensed. The joke is original work for this bounty.
