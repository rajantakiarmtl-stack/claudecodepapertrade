import { describe, it, expect } from "vitest";
import { experimentDays, signedMoney, signedPct } from "./format";
describe("format", () => {
  it("losses carry an explicit minus sign", () => expect(signedMoney(-280)).toBe("−$280"));
  it("gains carry an explicit plus sign", () => expect(signedMoney(1)).toBe("+$1"));
  it("percent signs", () => expect(signedPct(-1.5)).toBe("−1.50%"));
  it("zero is neutral with ±", () => { expect(signedMoney(0)).toBe("±$0"); expect(signedPct(0, 1)).toBe("±0.0%"); });
});

describe("experiment trading days", () => {
  it("counts only snapshots on or after the experiment start, not elapsed calendar days", () => {
    const days = experimentDays([{ date: "2026-11-19" }, { date: "2026-11-20" }], "2026-11-20");
    expect(days.count).toBe(1);
    expect(experimentDays([], "2026-11-20").count).toBe(0);
  });

  it("assigns the baseline zero and consecutive trading days by row order across gaps", () => {
    const days = experimentDays([
      { date: "2026-11-19" },
      { date: "2026-11-20" },
      { date: "2026-11-23" },
      { date: "2026-11-27" },
    ], "2026-11-20");
    expect([...days.byDate.values()]).toEqual([0, 1, 2, 3]);
    expect(days.count).toBe(3);
    expect(days.byDate.get("2026-11-27")).toBe(3);
  });
});
