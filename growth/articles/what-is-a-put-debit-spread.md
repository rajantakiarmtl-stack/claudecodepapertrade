---
slug: what-is-a-put-debit-spread
title: "What Is a Put Debit Spread? 5 Real Trades, Wins and Losses"
description: "A put debit spread caps your loss at the price paid. See how it works through 5 real paper trades by AI agents: one win, three losses, one flat, costs included."
tags: ["options education", "spreads", "0dte", "costs"]
published_at: "2026-11-25T23:30:00-05:00"
---

A put debit spread is a bearish options trade with two legs. You buy one put and sell a cheaper put with a lower strike, both with the same expiry. The net amount you pay, the debit, is the most you can lose. The most you can make is the width between the strikes minus that debit. At expiry it makes money when the price is below the higher strike minus the debit, and it pays the most at or below the lower strike.

Below we walk through five put debit spreads our AI agents traded on paper (simulated, not real money). One won, three lost and one finished flat. Every loss is shown, with costs included.

## What is a put debit spread?

You will also see it called a **bear put spread** or a **long put vertical**. It is the same trade.

It has two parts:

- **Buy a put** at a higher strike. This is the leg that gains when the price falls.
- **Sell a put** at a lower strike, same expiry. This brings in some premium, which makes the trade cheaper. In return, you give up any gain below that lower strike.

You pay to open it, so it is a "debit" spread. Both your risk and your reward are capped and known before you enter. Fidelity has a [plain overview of the bear put spread](https://www.fidelity.com/viewpoints/bear-put-spread) if you want a second explanation.

## The math: max loss, max gain, breakeven

### The formulas

For one spread (options cover 100 shares, so multiply per-share prices by 100):

- **Max loss** = debit paid
- **Max gain** = (higher strike − lower strike) − debit
- **Breakeven at expiry** = higher strike − debit

### Worked example: SPY on Nov 20

Here is a real spread from our simulated account.

1. **Buy** the SPY 700 put and **sell** the SPY 695 put, both expiring the same day.
2. **Net price paid:** $1.65 per share, or $165 for one spread.
3. **Width:** 700 − 695 = $5.
4. **Max loss:** $165, the debit. This happens if SPY finishes at or above $700.
5. **Max gain:** $5.00 − $1.65 = $3.35, or $335. This happens if SPY finishes at or below $695.
6. **Breakeven:** 700 − 1.65 = $698.35.

The spread was risking $165 to make up to $335. How it played out is below.

## Five real put spreads from our paper-trading experiment

These are every put debit spread our agent teams have closed so far. All are paper trades (simulated). "Gross" is the result at the prices filled. "Net after costs" subtracts the trading-cost haircut we apply to every trade, so paper results don't look better than real fills would.

| Date | Underlying | Strikes (expiry) | Width | Debit | Max loss / max gain | Exit | Gross | Net after costs |
|---|---|---|---|---|---|---|---|---|
| Nov 20 | SPY | 700/695 (same day) | $5 | $1.65 | $165 / $335 | $1.66 | +$1 | $0 |
| Nov 23 | XSP | 724/723 (same day) | $1 | $0.47 | $47 / $53 | $0.27 | −$20 | −$25 |
| Nov 24 | XSP | 720/719 (same day) | $1 | $0.58 | $58 / $42 | $0.35 | −$23 | −$27 |
| Nov 25 | XSP | 719/718 (same day) | $1 | $0.50 | $50 / $50 | $0.85 | +$35 | +$30 |
| Nov 25 | QQQ | 605/595 (Dec 18) | $10 | $3.50 | $350 / $650 | $2.74 | −$76 | −$97 |

**Totals:** gross −$83, net −$119. Costs took $36.

Five trades is a small sample. It shows how the structure behaves, not whether it "works".

## What each trade teaches

### The win: XSP, Nov 25

The market [gapped down 2.2% at the open on Nov 25](/journal/2026-11-25) and later recovered to close down only 0.3%, a 3% swing. The spread was the XSP 719/718 put spread, paid $0.50. Breakeven was $718.50. Max loss and max gain were both $50.

Prices slipped again before the close, and the spread was sold for $0.85, a gross gain of $35 and $30 net.

### Being wrong is capped: XSP, Nov 23 and Nov 24

On [Nov 23 the S&P 500 rose 4.7%](/journal/2026-11-23). A bearish spread is the wrong trade on a day like that. The 724/723 spread cost $0.47 and was sold for $0.27, a $20 loss gross.

On [Nov 24](/journal/2026-11-24) the index ended down only 0.5%, but under the surface it was a rotation day: chip stocks fell about 7% while healthcare rose about 3%. The broad index never made the drop the spread needed. The 720/719 spread cost $0.58 and was closed at $0.35, a $23 loss gross.

In both cases the hoped-for move never came, and each trade lost a bit under half of its debit. That is the point of a defined-risk trade: the worst case was known before entry, and closing early kept the loss smaller than that.

### Pinned at the strike: SPY, Nov 20

[Nov 20 was a rough day](/journal/2026-11-20), with the S&P 500 down 3.5%. You would think a bearish spread did well. But while the spread was open, SPY sat right around $700, the upper strike. Close to that strike, the spread was worth roughly what had been paid for it.

The spread was bought at $1.65 and sold at $1.66: +$1 gross, $0 after costs. A big down day for the market, and a flat trade. The direction was right, but the price sat at the wrong spot.

### Right idea, wrong afternoon: QQQ, Nov 25

This one had more time: a 605/595 put spread expiring Dec 18, paid $3.50, so $350 at risk to make up to $650.

The Nasdaq did gap down on Nov 25. Then a midday rally erased much of the drop, and the reason for holding the trade no longer held. The spread was sold for $2.74, a $76 loss gross and $97 net. The agents closed it instead of waiting and hoping. That was the largest loss of the five, and still well short of the $350 maximum.

## Same-day (0DTE) put spreads: what changes

Four of the five spreads expired the same day they were opened. Traders call these 0DTE (zero days to expiration).

Three things change:

- **Speed.** With hours left, option prices react hard to every move in the underlying. A spread can go from near zero to near full value, and back, in one session.
- **Contract size.** XSP is the Mini-SPX index option, one-tenth the size of SPX, according to [Cboe](https://www.cboe.com/tradable-products/sp-500/xsp-options). That makes small, defined-risk trades possible.
- **Small widths, big costs.** A 1-point XSP spread can be worth at most $100. With debits around $50, a few cents of slippage on each leg is a real share of the trade. More on that next.

## The hidden cost: price paid vs mid

The "mid" is halfway between the bid and the ask. It is a fair estimate of what a spread is worth. What you actually pay is often worse.

| Trade | Paid | Mid at entry |
|---|---|---|
| SPY Nov 20 | $1.65 | $1.63 |
| XSP Nov 23 | $0.47 | about $0.365 |
| XSP Nov 24 | $0.58 | $0.58 |
| XSP Nov 25 | $0.50 | $0.485 |
| QQQ Nov 25 | $3.50 | $3.13 |

On Nov 23, the XSP spread was filled about 10.5 cents above mid. On a 1-point spread, that is roughly a fifth of the debit gone at entry.

Now look at the three XSP trades together. Gross, they lost $8 in total. After our cost haircut, they lost $22. The costs were bigger than the trading result itself. On narrow same-day spreads, how you get filled can matter as much as which way the market goes.

## Put debit spread vs buying a put

This is an explanation of the differences, not a recommendation for either.

- **Cost.** The spread costs less than the long put alone, because the short put pays for part of it.
- **Upside.** A long put keeps gaining as the price falls. The spread stops gaining below the lower strike.
- **Volatility.** Because you own one option and sell another, changes in implied volatility partly cancel out. The spread is less sensitive to volatility than a single put.

## FAQ

### How much can you lose on a put debit spread?

The debit you paid, plus fees. Our largest was the QQQ spread, with $350 at risk. It was closed early for a $97 loss after costs.

### When does a put debit spread make money?

At expiry, it profits below the breakeven: the higher strike minus the debit. It reaches full value when the price is at or below the lower strike. Before expiry, it can also be sold for more than you paid if the price falls fast enough.

### Can you close a put debit spread before expiry?

Yes. You sell it back as one order. All five of our spreads were sold back before they expired. None were left to expire on their own.

### Are 0DTE put spreads riskier?

Your maximum loss is still capped at the debit. But prices move much faster near expiry, and on 1-point spreads trading costs can be larger than the result, as our three XSP trades showed.

### Is a put debit spread better than buying a put?

Neither is better in general. The spread is cheaper and less sensitive to volatility, but caps your gain. A long put costs more and can gain more. Which fits depends on the trader, and this article does not tell you which to choose.

---

We publish every trade our AI agents make, including the losers. Read the day-by-day notes in the [trading journal](/journal/2026-11-25), browse more explainers in [Learn](/learn), or see the whole experiment on the [home page](/).

*Educational content, not financial advice. Paper-trading results are simulated.*
