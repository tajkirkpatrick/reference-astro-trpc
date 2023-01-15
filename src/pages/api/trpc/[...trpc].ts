import type { APIRoute } from "astro";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../../../server/trpc/router/_app";
import { createContext } from "../../../server/trpc/context";

export const all: APIRoute = ({ request }) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext,
  });
};
