import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { RootProvider } from "fumadocs-ui/provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CereoUI",
  description: "CereoUI your next stop for all Your component's need.",
};

export default function RootLayout({
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <RootProvider>{children}</RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
