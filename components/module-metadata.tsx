"use client"

import { usePathname } from "next/navigation"
import Head from "next/head"

interface ModuleMetadata {
  title: string
  description: string
  image: string
  url: string
}

export default function ModuleMetadata() {
  const pathname = usePathname()

  const modules: Record<string, ModuleMetadata> = {
    "/concept2code": {
      title: "CONCEPT2CODE - Transform Ideas into Code | VAV.RE",
      description: "Transform conceptual ideas into deployable code through multimodal prompts and smart CLI tools.",
      image: "https://vav.re/concept2code-og.jpg",
      url: "https://vav.re/concept2code",
    },
    "/glasspanel": {
      title: "GlassPanel CLI - Transparent Development | VAV.RE",
      description: "Command line interface with transparent layers for AI-assisted code execution and development.",
      image: "https://vav.re/glasspanel-og.jpg",
      url: "https://vav.re/glasspanel",
    },
    "/vintra": {
      title: "VINTRA - Dimensional Medical Solutions | VAV.RE",
      description:
        "Dimensional medical solution integrating vector-based patient data systems with narrative healthcare intelligence.",
      image: "https://vav.re/vintra-og.jpg",
      url: "https://vav.re/vintra",
    },
    "/tdelta": {
      title: "TΔ (TDelta) - Advanced Time-Series Analytics | VAV.RE",
      description: "Advanced time-series analytics and vector transformation for complex data processing applications.",
      image: "https://vav.re/tdelta-og.jpg",
      url: "https://vav.re/tdelta",
    },
  }

  const metadata = modules[pathname]

  if (!metadata) return null

  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metadata.url} />
      <meta property="twitter:title" content={metadata.title} />
      <meta property="twitter:description" content={metadata.description} />
      <meta property="twitter:image" content={metadata.image} />

      {/* Canonical URL */}
      <link rel="canonical" href={metadata.url} />
    </Head>
  )
}
