import { privateProcedure, router } from "../trpc";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { UTApi } from "uploadthing/server";

export const categoryRouter = router({
  create: privateProcedure
    .input(
      z.object({
        parentCategoryId: z.string().optional(),
        visibility: z.enum(["published", "scheduled", "hidden"]),
        imgUrl: z.string(),
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        seoMetaTitle: z.string().optional(),
        seoMetaDescription: z.string().optional(),
        seoMetaKeywords: z.string().optional(),
        publishDate: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const {
        parentCategoryId,
        visibility,
        imgUrl,
        slug,
        title,
        description,
        seoMetaTitle,
        seoMetaDescription,
        seoMetaKeywords,
        publishDate,
      } = input;

      const _publishDate = publishDate ? new Date(publishDate) : null;

      console.log(_publishDate);

      const category = await prisma.category.findUnique({
        where: {
          slug,
        },
      });

      if (category) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Category already exists",
        });
      }

      const newCategory = await prisma.category.create({
        data: {
          parentCategoryId,
          visibility,
          imgUrl,
          slug,
          title,
          description,
          seoMetaTitle,
          seoMetaDescription,
          seoMetaKeywords,
          publishDate: _publishDate,
        },
      });

      return newCategory;
    }),

  getAll: privateProcedure.query(async () => {
    const categories = await prisma.category.findMany();

    return categories.map((category) => {
      const publishDate = category.publishDate;

      if (publishDate) {
        if (new Date() > publishDate && category.visibility === "scheduled") {
          return {
            ...category,
            visibility: "published",
            publishDate: null,
          };
        }
      }

      return category;
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

      const category = await prisma.category.findUnique({
        where: {
          id: id,
        },
      });

      if (!category) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Category does not exist",
        });
      }

      return category;
    }),

  delete: privateProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { id } = input;

      const category = await prisma.category.findUnique({
        where: {
          id,
        },
      });

      if (!category) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Category does not exist",
        });
      }

      const utapi = new UTApi();

      const imgUrl = category.imgUrl.replace("https://utfs.io/f/", "");

      await utapi.deleteFiles(imgUrl);

      await prisma.category.delete({
        where: {
          id,
        },
      });

      return true;
    }),
});

export type AppRouter = typeof categoryRouter;
