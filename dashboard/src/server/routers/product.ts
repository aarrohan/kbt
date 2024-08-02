import { privateProcedure, router } from "../trpc";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { UTApi } from "uploadthing/server";
import { toCents } from "@/lib/utils";

export const productRouter = router({
  create: privateProcedure
    .input(
      z.object({
        categoryId: z.string(),
        visibility: z.enum(["published", "scheduled", "hidden"]),
        isFeatured: z.boolean(),
        imgUrl: z.string(),
        secondaryImgUrl: z.string(),
        modelImgUrls: z.array(z.string()).optional(),
        otherImgUrls: z.array(z.string()).optional(),
        videoUrls: z.array(z.string()).optional(),
        slug: z.string(),
        title: z.string(),
        price: z.string(),
        discountedPrice: z.string().optional(),
        description: z.string(),
        colors: z.array(z.string()),
        sizes: z.array(z.string()),
        stock: z.array(
          z.object({
            size: z.string(),
            color: z.string(),
            available: z.number(),
          })
        ),
        seoMetaTitle: z.string().optional(),
        seoMetaDescription: z.string().optional(),
        seoMetaKeywords: z.string().optional(),
        publishDate: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const {
        categoryId,
        visibility,
        isFeatured,
        imgUrl,
        secondaryImgUrl,
        modelImgUrls,
        otherImgUrls,
        videoUrls,
        slug,
        title,
        price,
        discountedPrice,
        description,
        colors,
        sizes,
        stock,
        seoMetaTitle,
        seoMetaDescription,
        seoMetaKeywords,
        publishDate,
      } = input;

      const _publishDate = publishDate ? new Date(publishDate) : null;

      const product = await prisma.product.findUnique({
        where: {
          slug,
        },
      });

      if (product) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Product slug already exists",
        });
      }

      const newProduct = await prisma.product.create({
        data: {
          categoryId,
          visibility,
          isFeatured,
          imgUrl,
          secondaryImgUrl,
          modelImgUrls: modelImgUrls ? { set: modelImgUrls } : undefined,
          otherImgUrls: otherImgUrls ? { set: otherImgUrls } : undefined,
          videoUrls: videoUrls ? { set: videoUrls } : undefined,
          slug,
          title,
          price: toCents(Number(price)),
          discountedPrice: toCents(Number(discountedPrice)),
          description,
          colors: { set: colors },
          sizes: { set: sizes },
          seoMetaTitle,
          seoMetaDescription,
          seoMetaKeywords,
          publishDate: _publishDate,
        },
      });

      await prisma.productStock.createMany({
        data: stock.map((item) => ({
          ...item,
          productId: newProduct.id,
        })),
      });

      return newProduct;
    }),

  getAll: privateProcedure.query(async () => {
    const products = await prisma.product.findMany();

    return products.map((product) => {
      const publishDate = product.publishDate;

      if (publishDate) {
        if (new Date() > publishDate && product.visibility === "scheduled") {
          return {
            ...product,
            visibility: "published",
            publishDate: null,
          };
        }
      }

      return product;
    });
  }),

  delete: privateProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { id } = input;

      const product = await prisma.product.findUnique({
        where: {
          id,
        },
      });

      if (!product) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Product does not exist",
        });
      }

      const utapi = new UTApi();

      const imgUrl = product.imgUrl.replace("https://utfs.io/f/", "");
      const secondaryImgUrl = product.secondaryImgUrl.replace(
        "https://utfs.io/f/",
        ""
      );

      let mediaUrls = [imgUrl, secondaryImgUrl];

      if (product.modelImgUrls) {
        const modelImgUrls = product.modelImgUrls.map((url) =>
          url.replace("https://utfs.io/f/", "")
        );

        mediaUrls = [...mediaUrls, ...modelImgUrls];
      }

      if (product.otherImgUrls) {
        const otherImgUrls = product.otherImgUrls.map((url) =>
          url.replace("https://utfs.io/f/", "")
        );

        mediaUrls = [...mediaUrls, ...otherImgUrls];
      }

      if (product.videoUrls) {
        const videoUrls = product.videoUrls.map((url) =>
          url.replace("https://utfs.io/f/", "")
        );

        mediaUrls = [...mediaUrls, ...videoUrls];
      }

      await utapi.deleteFiles(mediaUrls);

      await prisma.productStock.deleteMany({
        where: {
          productId: id,
        },
      });

      await prisma.product.delete({
        where: {
          id,
        },
      });

      return true;
    }),
});

export type AppRouter = typeof productRouter;
