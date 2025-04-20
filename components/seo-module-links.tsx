"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SEOModuleLinks() {
  const pathname = usePathname()

  const modules = [
    {
      id: "concept2code",
      name: "CONCEPT2CODE",
      href: "/concept2code",
      description: "Transform conceptual ideas into deployable code through multimodal prompts and smart CLI tools.",
    },
    {
      id: "glasspanel",
      name: "GlassPanel CLI",
      href: "/glasspanel",
      description: "Command line interface with transparent layers for AI-assisted code execution and development.",
    },
    {
      id: "vintra",
      name: "VINTRA",
      href: "/vintra",
      description:
        "Dimensional medical solution integrating vector-based patient data systems with narrative healthcare intelligence.",
    },
    {
      id: "tdelta",
      name: "TΔ (TDelta)",
      href: "/tdelta",
      description: "Advanced time-series analytics and vector transformation for complex data processing applications.",
    },
  ]

  // Don't show links on module pages
  if (modules.some((module) => pathname === module.href)) {
    return null
  }

  return (
    <div className="hidden">
      {modules.map((module) => (
        <Link key={module.id} href={module.href} aria-label={`Learn more about ${module.name}: ${module.description}`}>
          {module.name}
        </Link>
      ))}
    </div>
  )
}
