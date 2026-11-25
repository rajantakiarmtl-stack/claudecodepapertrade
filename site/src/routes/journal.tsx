import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/journal")({ staticData: { sitemap: false }, component: () => <Outlet /> });
