import { Metadata } from "next";
import { TMain } from "@/template";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Light project"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <TMain>{children}</TMain>
        <SpeedInsights />
      </body>
    </html>
  );
}
