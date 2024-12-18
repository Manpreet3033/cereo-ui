import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import KBar from "../components/kbar";
import { Toaster } from "sonner";
import { getTableOfContents } from "fumadocs-core/server";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CereoUI",
  description: "CereoUI your next stop for all Your component's need.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" enableSystem>
          <KBar>{children}</KBar>
        </ThemeProvider>
      </body>
    </html>
  );
}
