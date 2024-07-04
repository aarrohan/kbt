import { privateProcedure, router } from "./trpc";
import prisma from "@/lib/prisma";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import bcrypt from "bcryptjs";

const roleBasedAuth = (
  ctx: {
    userId: string;
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

export const appRouter = router({});

export type AppRouter = typeof appRouter;
