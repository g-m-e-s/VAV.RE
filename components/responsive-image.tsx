"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ResponsiveImageProps extends Omit<ImageProps, "src"> {
  src: string
  mobileSrc?: string
  lowResSrc?: string
  className?: string
  containerClassName?: string
  priority?: boolean
  sizes?: string
  loadingStrategy?: "eager" | "lazy" | "progressive"
}

export default function ResponsiveImage({
  src,
  mobileSrc,
  lowResSrc,
  alt,
  width,
  height,
  className,
  containerClassName,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw",
  loadingStrategy = "progressive",
  ...props
}: ResponsiveImageProps) {
  const [currentSrc, setCurrentSrc] = useState(lowResSrc || src)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Set the appropriate source based on device and loading strategy
  useEffect(() => {
    if (loadingStrategy === "progressive" && lowResSrc) {
      // Start with low-res version
      setCurrentSrc(lowResSrc)
    } else {
      // Use the appropriate source based on device
      setCurrentSrc(isMobile && mobileSrc ? mobileSrc : src)
    }
  }, [isMobile, loadingStrategy, lowResSrc, mobileSrc, src])

  // Handle image load completion
  const handleImageLoad = () => {
    setIsLoaded(true)

    // If using progressive loading, switch to high-res after low-res loads
    if (loadingStrategy === "progressive" && lowResSrc && currentSrc === lowResSrc) {
      setCurrentSrc(isMobile && mobileSrc ? mobileSrc : src)
    }
  }

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {loadingStrategy === "progressive" && !isLoaded && <div className="absolute inset-0 bg-gray-100 animate-pulse" />}

      <Image
        src={currentSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={cn("transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-0", className)}
        sizes={sizes}
        priority={priority || loadingStrategy === "eager"}
        loading={loadingStrategy === "lazy" ? "lazy" : undefined}
        onLoad={handleImageLoad}
        {...props}
      />
    </div>
  )
}
