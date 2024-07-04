import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

const helveticaNowText = localFont({
  variable: "--helvetica-now-text-font",
  src: [
    {
      path: "./fonts/helvetica-now-text-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/helvetica-now-text-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/helvetica-now-text-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/helvetica-now-text-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const ogg = localFont({
  variable: "--ogg-font",
  src: [
    {
      path: "./fonts/ogg-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ogg-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "KBT",
  description: "KBT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNowText.variable} ${ogg.variable} font-sans`}
      >
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
