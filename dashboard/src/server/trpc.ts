import { TRPCError, initTRPC } from "@trpc/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const t = initTRPC.create();

const middleware = t.middleware;

const isAuth = middleware(async (opts) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return opts.next({
    ctx: {
      userId: session.user.id,
      role: session.user.role,
    },
  });
});

export const router = t.router;
export const privateProcedure = t.procedure.use(isAuth);
