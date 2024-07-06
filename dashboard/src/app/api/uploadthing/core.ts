import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 5 },
    video: { maxFileSize: "8MB", maxFileCount: 1 },
  })
    .middleware(async () => {
      const session = await getServerSession(authOptions);

      if (!session) throw new UploadThingError("Unauthorized");

      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ file }) => {
      return { fileUrl: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
