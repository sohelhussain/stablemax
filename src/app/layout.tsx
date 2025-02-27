import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "stable~max",
  description: "Generated stunning images from text using ai models for free with stablemax turn your ideas into visual art instantly",
  metadataBase: new URL("https://stablemax.com"),
  openGraph: {
    title: "stableMax - free ai image generation",
    description: "Turn your ideas into images with our free ai-powered tool",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "stableMax ai Image generator"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "StableMax - free Ai image generation",
    description: "Turn your text into images with our free ai-powered tool",
    images: ["/twitter-image.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
