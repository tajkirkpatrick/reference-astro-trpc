import { initTRPC } from "@trpc/server";
import { z } from "zod";
import type { Context } from "../context";

export const t = initTRPC.context<Context>().create();
const router = t.router;
const publicProcedure = t.procedure;

export const appRouter = router({
  getHello: publicProcedure.input(z.string().optional()).query(({ input }) => {
    return { message: `Hello ${(input ??= "World")}` };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
