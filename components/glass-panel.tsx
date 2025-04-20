import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type GlassPanelVariant = "translucent" | "semi" | "opaque"

interface GlassPanelProps {
  children: ReactNode
  variant?: GlassPanelVariant
  className?: string
  noBorder?: boolean
  mobileOptimized?: boolean
}

export default function GlassPanel({
  children,
  variant = "translucent",
  className = "",
  noBorder = false,
  mobileOptimized = true,
}: GlassPanelProps) {
  const baseClasses = "relative backdrop-blur-md overflow-hidden hardware-accelerated"

  // Adjust border radius for mobile
  const radiusClasses = mobileOptimized ? "rounded-sm sm:rounded-md" : "rounded-md"

  const variantClasses = {
    translucent: "bg-white/30 border-white/30",
    semi: "bg-white/60 border-white/40",
    opaque: "bg-white/90 border-white/50",
  }

  const borderClasses = noBorder ? "" : "border"

  // Add mobile-optimized padding if needed
  const paddingClasses = mobileOptimized ? "p-4 sm:p-6 md:p-8" : ""

  return (
    <div className={cn(baseClasses, radiusClasses, variantClasses[variant], borderClasses, className)}>
      {/* Subtle highlight effect on top */}
      {!noBorder && (
        <>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </>
      )}

      {children}
    </div>
  )
}
