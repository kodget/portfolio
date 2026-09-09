import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad - Digital Portfolio",
  description: "Frontend Engineer. Medical Student. Builder.",
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import { AuraBackground } from "@/components/AuraBackground";
import { Preloader } from "@/components/Preloader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--surface)] px-4 md:px-8 lg:px-12">
        <ThemeProvider>
          <Preloader />
          <CustomCursor />
          <AuraBackground />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
