"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import GlassPanel from "./glass-panel"
import ResponsiveImage from "./responsive-image"
import { useDevicePerformance } from "@/hooks/use-device-performance"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const { isLowPerformance } = useDevicePerformance()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isLowPerformance ? 0.1 : 0.2,
        delayChildren: isLowPerformance ? 0.1 : 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: isLowPerformance ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isLowPerformance ? 0.5 : 0.8,
        ease: isLowPerformance ? "easeOut" : [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <GlassPanel variant="semi" className="w-full h-full absolute inset-0 z-0" noBorder />

      <div className="container relative z-10">
        <motion.h2
          className="section-title text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: isLowPerformance ? 10 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isLowPerformance ? 10 : 20 }}
          transition={{
            duration: isLowPerformance ? 0.5 : 0.8,
            ease: "easeOut",
          }}
        >
          About VAV.RE
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
          <motion.div
            className="space-y-4 sm:space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed" variants={itemVariants}>
              VAV.RE provides the infrastructure for next-generation AI systems, combining vector architecture with
              runtime intelligence to create powerful, modular solutions.
            </motion.p>

            <motion.p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed" variants={itemVariants}>
              Our approach integrates multiple dimensions of technological development, creating symbiotic interfaces
              between humans and machines through narrative-driven, vetorial systems.
            </motion.p>

            <motion.p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed" variants={itemVariants}>
              We build ecosystems that transform concepts into functional code, enabling rapid deployment and seamless
              integration across platforms.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isLowPerformance ? 10 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLowPerformance ? 10 : 20 }}
            transition={{
              duration: isLowPerformance ? 0.5 : 0.8,
              delay: isLowPerformance ? 0.2 : 0.4,
              ease: "easeOut",
            }}
          >
            <GlassPanel
              variant="translucent"
              className="p-4 sm:p-6 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex items-center justify-center overflow-hidden group"
            >
              <motion.div
                className="relative z-10 w-4/5 h-auto transform transition-transform duration-700 ease-out group-hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{
                  duration: isLowPerformance ? 0.5 : 0.8,
                  delay: isLowPerformance ? 0.3 : 0.6,
                  ease: "easeOut",
                }}
              >
                <ResponsiveImage
                  src="/interconnected-network.png"
                  lowResSrc="/interconnected-network-low.png" // This would be a lower resolution version
                  alt="Vector Architecture Diagram"
                  width={500}
                  height={400}
                  className="rounded-sm shadow-lg"
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 500px"
                  priority={!isLowPerformance}
                  loadingStrategy={isLowPerformance ? "progressive" : "eager"}
                />
              </motion.div>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
