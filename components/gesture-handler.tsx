"use client"

import { useRef, useState, useEffect, type ReactNode } from "react"
import { motion, useAnimation, type PanInfo } from "framer-motion"

interface GestureHandlerProps {
  children: ReactNode
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  swipeThreshold?: number
  disabled?: boolean
  className?: string
}

export default function GestureHandler({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  swipeThreshold = 50,
  disabled = false,
  className = "",
}: GestureHandlerProps) {
  const controls = useAnimation()
  const [isMobile, setIsMobile] = useState(false)
  const startXRef = useRef(0)
  const startYRef = useRef(0)

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Handle drag start
  const handleDragStart = (_: any, info: PanInfo) => {
    startXRef.current = info.point.x
    startYRef.current = info.point.y
  }

  // Handle drag end
  const handleDragEnd = (_: any, info: PanInfo) => {
    if (disabled || !isMobile) return

    const deltaX = info.point.x - startXRef.current
    const deltaY = info.point.y - startYRef.current

    // Determine if the swipe was horizontal or vertical
    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY)

    if (isHorizontalSwipe) {
      // Horizontal swipe
      if (deltaX > swipeThreshold && onSwipeRight) {
        onSwipeRight()
        controls
          .start({ x: 20, transition: { duration: 0.2 } })
          .then(() => controls.start({ x: 0, transition: { duration: 0.2 } }))
      } else if (deltaX < -swipeThreshold && onSwipeLeft) {
        onSwipeLeft()
        controls
          .start({ x: -20, transition: { duration: 0.2 } })
          .then(() => controls.start({ x: 0, transition: { duration: 0.2 } }))
      }
    } else {
      // Vertical swipe
      if (deltaY > swipeThreshold && onSwipeDown) {
        onSwipeDown()
        controls
          .start({ y: 20, transition: { duration: 0.2 } })
          .then(() => controls.start({ y: 0, transition: { duration: 0.2 } }))
      } else if (deltaY < -swipeThreshold && onSwipeUp) {
        onSwipeUp()
        controls
          .start({ y: -20, transition: { duration: 0.2 } })
          .then(() => controls.start({ y: 0, transition: { duration: 0.2 } }))
      }
    }
  }

  // If not mobile or disabled, just render children
  if (!isMobile || disabled) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      drag={isMobile && !disabled}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.1}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      animate={controls}
    >
      {children}
    </motion.div>
  )
}
