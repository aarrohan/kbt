import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./prisma";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt", maxAge: 24 * 60 * 60 },
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const user = await prisma.dashboardUser.findUnique({
          where: {
            username: credentials.username,
          },
        });

        if (user) {
          const isValidPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (isValidPassword) {
            await prisma.dashboardUser.update({
              where: {
                id: user.id,
              },
              data: {
                lastSignedIn: new Date(),
              },
            });

            return user;
          }
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        if (session.user) {
          session.user.id = token.id;
          session.user.role = token.role;
          session.user.name = token.name;
          session.user.email = token.email;
          session.user.username = token.username;
        }
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await prisma.dashboardUser.findFirst({
        where: {
          email: token.email || "",
        },
      });

      if (!dbUser) {
        token.id = user.id;

        return token;
      }

      return {
        id: dbUser.id,
        role: dbUser.role,
        name: dbUser.name,
        email: dbUser.email,
        username: dbUser.username,
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
