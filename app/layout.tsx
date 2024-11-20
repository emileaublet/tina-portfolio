import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Rethink_Sans } from "next/font/google";

import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { BalanceProvider } from "@/components/balance-provider";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import client from "@/tina/__generated__/client";

const fontSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: false,
});

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await client.queries.global({
    relativePath: "settings.json",
  });
  return {
    title: data.global.metaTitle,
    description: data.global.metaDescription,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          themes={["dark"]}
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <BalanceProvider>
            <NavBar />
            {children}
            <Footer />
          </BalanceProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
