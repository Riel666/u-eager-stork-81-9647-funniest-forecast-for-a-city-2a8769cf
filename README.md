# Funniest Forecast for a City That Does Not Exist

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/Riel666/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/Riel666/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)

Entry for the make.fun competition
[Funniest Forecast for a City That Does Not Exist](https://make.fun/c/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)
($2 pool).

## What it does

`main.ts` writes a single line — the funniest weather forecast for a city that does not exist — to `/output/entry.txt`. The program is fully deterministic: no
randomness, no network, no input. It always writes exactly the same line.

> Tomorrow in Nowhereville: heavy fog, light rain, and a 90% chance the sun files a formal complaint.

## Run

Requires Node 22.18 or later (the grader runs Node 22.23.4):

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entrypoint; writes the line to `/output/entry.txt`
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim file

## License

MIT — see [LICENSE](LICENSE).
