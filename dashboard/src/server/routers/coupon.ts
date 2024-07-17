import { privateProcedure, router } from "../trpc";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const couponRouter = router({
  create: privateProcedure
    .input(
      z.object({
        visibility: z.enum(["published", "scheduled", "hidden"]),
        type: z.enum(["fixed", "percentage"]),
        title: z.string(),
        code: z.string(),
        value: z.number(),
        publishDate: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { visibility, type, title, code, value, publishDate } = input;

      const _publishDate = publishDate ? new Date(publishDate) : null;

      const coupon = await prisma.coupon.findUnique({
        where: {
          code,
        },
      });

      if (coupon) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Coupon code already exists",
        });
      }

      const newCoupon = await prisma.coupon.create({
        data: {
          visibility,
          type,
          title,
          code,
          value,
          publishDate: _publishDate,
        },
      });

      return newCoupon;
    }),

  getAll: privateProcedure.query(async () => {
    const coupons = await prisma.coupon.findMany();

    return coupons.map((coupon) => {
      const publishDate = coupon.publishDate;

      if (publishDate) {
        if (new Date() > publishDate && coupon.visibility === "scheduled") {
          return {
            ...coupon,
            visibility: "published",
            publishDate: null,
          };
        }
      }

      return coupon;
    });
  }),

  getSingle: privateProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { id } = input;

      const coupon = await prisma.coupon.findUnique({
        where: {
          id: id,
        },
      });

      if (!coupon) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Coupon does not exist",
        });
      }

      return coupon;
    }),

  update: privateProcedure
    .input(
      z.object({
        id: z.string(),
        visibility: z.enum(["published", "scheduled", "hidden"]),
        type: z.enum(["fixed", "percentage"]),
        title: z.string(),
        code: z.string(),
        value: z.number(),
        publishDate: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { id, visibility, type, title, code, value, publishDate } = input;

      const _publishDate = publishDate ? new Date(publishDate) : null;

      const coupon = await prisma.coupon.findUnique({
        where: {
          id,
        },
      });

      if (!coupon) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Coupon does not exist",
        });
      }

      const updatedCoupon = await prisma.coupon.update({
        where: {
          id,
        },
        data: {
          visibility,
          type,
          title,
          code,
          value,
          publishDate: _publishDate,
        },
      });

      return updatedCoupon;
    }),

  delete: privateProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { id } = input;

      const coupon = await prisma.coupon.findUnique({
        where: {
          id,
        },
      });

      if (!coupon) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Coupon does not exist",
        });
      }

      await prisma.coupon.delete({
        where: {
          id,
        },
      });

      return true;
    }),
});

export type AppRouter = typeof couponRouter;
