"use client"

import { useState, useEffect } from "react"

interface DevicePerformance {
  isLowPerformance: boolean
  isHighPerformance: boolean
  isMobile: boolean
  prefersReducedMotion: boolean
}

export function useDevicePerformance(): DevicePerformance {
  const [performance, setPerformance] = useState<DevicePerformance>({
    isLowPerformance: true, // Default to true until we can detect
    isHighPerformance: false,
    isMobile: true, // Default to true until we can detect
    prefersReducedMotion: false,
  })

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // Check if device is mobile - more aggressive detection
    const isMobile =
      /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth < 768

    // Estimate performance based on device memory and processor count
    // @ts-ignore - deviceMemory is not in the standard TypeScript navigator type
    const deviceMemory = navigator.deviceMemory || 4 // Default to 4GB if not available
    const processorCount = navigator.hardwareConcurrency || 4 // Default to 4 cores

    // More aggressive performance classification for mobile
    const isLowPerformance = isMobile || deviceMemory < 8 || processorCount < 6 || prefersReducedMotion

    const isHighPerformance = !isMobile && deviceMemory >= 8 && processorCount >= 8 && !prefersReducedMotion

    setPerformance({
      isLowPerformance,
      isHighPerformance,
      isMobile,
      prefersReducedMotion,
    })
  }, [])

  return performance
}
