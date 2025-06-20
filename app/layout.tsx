import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "ClickRevamp.com | Modern Website Redesign Services",
  description: "Transform your online presence with ClickRevamp's website redesign services. Modern, responsive, and conversion-focused web designs that deliver results.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "32x32"
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "16x16"
      }
    ],
    apple: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "180x180"
      }
    ],
    shortcut: [{ url: "/favicon.ico" }],
    other: [
      {
        rel: "icon",
        url: "/favicon.ico",
      },
    ],
  },
  manifest: "/manifest.json",
  viewport: {
    width: 'device-width',
    initialScale: 1
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} bg-background bg-dotted-grid`}>{children}</body>
    </html>
  );
}
