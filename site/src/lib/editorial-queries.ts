import { queryOptions } from "@tanstack/react-query";
import { getArticle, getArticles, getJournal, getJournalDay } from "./editorial.functions";
export const journalQuery = queryOptions({ queryKey: ["public-journal"], queryFn: () => getJournal() });
export const articlesQuery = queryOptions({ queryKey: ["public-articles"], queryFn: () => getArticles() });
export const journalDayQuery = (date: string) => queryOptions({ queryKey: ["public-journal", date], queryFn: () => getJournalDay({ data: { date } }) });
export const articleQuery = (slug: string) => queryOptions({ queryKey: ["public-article", slug], queryFn: () => getArticle({ data: { slug } }) });
