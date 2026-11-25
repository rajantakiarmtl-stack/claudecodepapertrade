import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/learn")({ staticData: { sitemap: false }, component: () => <Outlet /> });
