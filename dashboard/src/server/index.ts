import { router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { categoryRouter } from "./routers/category";

export const roleBasedAuth = (
  ctx: {
    id: string;
    role: string;
  },
  roles: string[]
) => {
  if (!roles.includes(ctx.role)) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You are not authorized to perform this action",
    });
  }
};

export const appRouter = router({
  category: categoryRouter,
});

export type AppRouter = typeof appRouter;
