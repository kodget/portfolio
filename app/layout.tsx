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
  title: "Muhammad Ajuwon | Frontend Engineer",
  description: "Digital portfolio of Muhammad Ajuwon, a Frontend Engineer and Medical Student specializing in building exceptional digital experiences.",
  keywords: ["Muhammad Ajuwon", "Frontend Engineer", "React", "Next.js", "Web Development", "Portfolio", "Medical Student", "Creative Developer"],
  authors: [{ name: "Muhammad Ajuwon" }],
  creator: "Muhammad Ajuwon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadajuwon.com",
    title: "Muhammad Ajuwon | Digital Portfolio",
    description: "Frontend Engineer and Medical Student building exceptional digital experiences.",
    siteName: "Muhammad Ajuwon Portfolio",
    images: [
      {
        url: "/images/profilephoto.png",
        width: 800,
        height: 1000,
        alt: "Muhammad Ajuwon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ajuwon | Digital Portfolio",
    description: "Frontend Engineer and Medical Student building exceptional digital experiences.",
    creator: "@kodget",
    images: ["/images/profilephoto.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
