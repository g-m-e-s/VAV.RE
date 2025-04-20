import type React from "react"
import { Sora, Space_Grotesk, Manrope } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import BackgroundPaths from "@/components/background-paths"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "600"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600"],
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["200", "300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "VAV.RE - Vector Architecture for Runtime Intelligence",
  description:
    "Systems and execution layers for AI-native tools. VAV.RE provides infrastructure for next-generation AI systems, combining vector architecture with runtime intelligence.",
  keywords:
    "vector architecture, runtime intelligence, AI systems, AI-native tools, CONCEPT2CODE, GlassPanel CLI, VINTRA, TDelta",
  authors: [{ name: "VAV.RE Team" }],
  creator: "VAV.RE",
  publisher: "VAV.RE",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover",
  robots: "index, follow",
  alternates: {
    canonical: "https://vav.re",
  },
  openGraph: {
    type: "website",
    url: "https://vav.re",
    title: "VAV.RE - Vector Architecture for Runtime Intelligence",
    description:
      "Systems and execution layers for AI-native tools. VAV.RE provides infrastructure for next-generation AI systems.",
    siteName: "VAV.RE",
    images: [
      {
        url: "https://vav.re/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VAV.RE - Vector Architecture for Runtime Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VAV.RE - Vector Architecture for Runtime Intelligence",
    description:
      "Systems and execution layers for AI-native tools. VAV.RE provides infrastructure for next-generation AI systems.",
    images: ["https://vav.re/twitter-image.jpg"],
    creator: "@vav_re",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/interconnected-network-low.png" />
      </head>
      <body className={`${sora.variable} ${spaceGrotesk.variable} ${manrope.variable} text-gray-900 antialiased`}>
        <BackgroundPaths />
        {children}
      </body>
    </html>
  )
}
