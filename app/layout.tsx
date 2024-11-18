import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Rethink_Sans } from "next/font/google";

import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { BalanceProvider } from "@/components/balance-provider";
import { Nav } from "tinacms";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

const fontSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: false,
});
export const metadata: Metadata = {
  title: "Jeffrey Julio-Vietz",
  description: "",
};

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
