import { queryOptions } from "@tanstack/react-query";
import { getTape, getTicker } from "./tape.functions";

export type TapeData = Awaited<ReturnType<typeof getTape>>;
export const tapeQuery = queryOptions({ queryKey: ["tape"], queryFn: () => getTape(), staleTime: 60_000 });
export const tickerQuery = queryOptions({ queryKey: ["ticker"], queryFn: () => getTicker(), staleTime: 60_000 });
