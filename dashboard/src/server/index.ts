import { router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { productRouter } from "./routers/product";
import { categoryRouter } from "./routers/category";
import { couponRouter } from "./routers/coupon";

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
  product: productRouter,
  category: categoryRouter,
  coupon: couponRouter,
});

export type AppRouter = typeof appRouter;
