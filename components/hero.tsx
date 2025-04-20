"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import GlassPanel from "./glass-panel"
import GestureHandler from "./gesture-handler"
import { useDevicePerformance } from "@/hooks/use-device-performance"

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const { scrollY } = useScroll()
  const { isLowPerformance, isMobile } = useDevicePerformance()

  // Reduce parallax effect on low-performance devices
  const parallaxStrength = isLowPerformance ? 0.5 : 1
  const y1 = useTransform(scrollY, [0, 500], [0, -150 * parallaxStrength])
  const y2 = useTransform(scrollY, [0, 500], [0, -100 * parallaxStrength])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Simplified animation variants for low-performance devices
  const getAnimationProps = (delay = 0) => ({
    initial: { opacity: 0, y: isLowPerformance ? 10 : 20 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isLowPerformance ? 10 : 20 },
    transition: {
      duration: isLowPerformance ? 0.5 : 0.8,
      delay: isLowPerformance ? delay * 0.5 : delay,
      ease: "easeOut",
    },
  })

  // Handle swipe down to scroll to about section
  const handleSwipeDown = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <GestureHandler
      onSwipeDown={handleSwipeDown}
      className="relative pt-28 sm:pt-32 md:pt-40 pb-20 sm:pb-24 md:pb-32 overflow-hidden"
      disabled={!isMobile}
    >
      <section ref={ref} className="min-h-[60vh]">
        <div className="container relative z-10">
          <GlassPanel
            variant="translucent"
            className="p-6 sm:p-8 md:p-10 lg:p-12 max-w-3xl backdrop-blur-lg shadow-xl border-white/40"
            mobileOptimized={true}
          >
            <motion.div {...getAnimationProps(0)}>
              <motion.h1
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight"
                {...getAnimationProps(0.2)}
              >
                Virtual Architecture
                <br className="hidden xs:block" />
                <span className="block xs:hidden"> </span>
                by Vectors on Runtime
              </motion.h1>

              <motion.p
                className="text-base sm:text-xl md:text-2xl font-light mb-6 sm:mb-10 md:mb-12 max-w-xl text-gray-700 tracking-normal"
                {...getAnimationProps(0.4)}
              >
                EcoSystems layers for AI-native ones
              </motion.p>

              <motion.div className="flex flex-col xs:flex-row gap-4" {...getAnimationProps(0.6)}>
                <a
                  href="#modules"
                  className="btn btn-primary group relative overflow-hidden w-full xs:w-auto text-center"
                  aria-label="Explore our ecosystem"
                >
                  <span className="relative z-10">Explore Ecosystem</span>
                  <span className="absolute inset-0 bg-accent/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                </a>
                <a
                  href="#contact"
                  className="btn glass-effect group w-full xs:w-auto text-center"
                  aria-label="Contact us"
                >
                  <span className="relative z-10">Contact</span>
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                </a>
              </motion.div>
            </motion.div>
          </GlassPanel>
        </div>

        {/* Sempre renderiza um elemento de fundo básico */}
        <div className="absolute inset-0 z-0" style={{ opacity: isLowPerformance ? 0.3 : 1 }}>
          {/* Animated Lines - simplificados para dispositivos de baixo desempenho */}
          <div className="absolute inset-0 opacity-40">
            <motion.div
              className="line line-h absolute w-full h-[1px] top-[20%]"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.7, 0.2] }}
              transition={{
                duration: isLowPerformance ? 12 : 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="line line-h absolute w-full h-[1px] top-[60%]"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.7, 0.2] }}
              transition={{
                duration: isLowPerformance ? 12 : 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>

          {/* Vector Blobs condicionais, mas não afetam o layout principal */}
          {!isLowPerformance && (
            <>
              <motion.div
                className="vector w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] top-[-100px] sm:top-[-150px] md:top-[-200px] right-[-150px] sm:right-[-200px] md:right-[-300px] opacity-25"
                style={{ y: y1 }}
                animate={{
                  scale: [1, 1.02, 0.98, 1.01, 1],
                  x: [0, 5, -5, -10, 0],
                  y: [0, -10, 5, -5, 0],
                }}
                transition={{ duration: isLowPerformance ? 24 : 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className="vector w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bottom-0 left-[-100px] sm:left-[-150px] md:left-[-200px] opacity-20"
                style={{ y: y2 }}
                animate={{
                  scale: [1, 0.98, 1.02, 0.99, 1],
                  x: [0, -5, 10, 5, 0],
                  y: [0, 5, -10, 10, 0],
                }}
                transition={{
                  duration: isLowPerformance ? 24 : 18,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 4,
                }}
              />
              <motion.div
                className="vector w-[150px] sm:w-[200px] md:w-[300px] h-[150px] sm:h-[200px] md:h-[300px] top-[250px] sm:top-[300px] md:top-[350px] right-[200px] sm:right-[300px] md:right-[400px] opacity-15"
                animate={{
                  scale: [1, 1.01, 0.99, 1.02, 1],
                  x: [0, 10, -5, 5, 0],
                  y: [0, -5, -10, 5, 0],
                }}
                transition={{
                  duration: isLowPerformance ? 24 : 18,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 8,
                }}
              />
            </>
          )}
        </div>

        {/* Gradient Overlay - Sempre renderizado com opacidade adaptativa */}
        <div className={`absolute inset-0 animated-gradient ${isLowPerformance ? "opacity-30" : "opacity-50"}`}></div>
      </section>
    </GestureHandler>
  )
}
