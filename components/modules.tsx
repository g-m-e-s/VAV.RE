"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Layers, Smartphone, Activity, ArrowRight, CircleDot, ChevronLeft, ChevronRight } from "lucide-react"
import GlassPanel from "./glass-panel"
import GestureHandler from "./gesture-handler"
import { useDevicePerformance } from "@/hooks/use-device-performance"

export default function Modules() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const { isLowPerformance, isMobile } = useDevicePerformance()
  const [activeModuleIndex, setActiveModuleIndex] = useState(0)

  const modules = [
    {
      id: "concept2code",
      title: "CONCEPT2CODE",
      description: "Transform conceptual ideas into deployable code through multimodal prompts and smart CLI tools.",
      link: "https://concept2code.com",
      icon: (
        <Layers className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-700 group-hover:text-accent transition-colors duration-300" />
      ),
    },
    {
      id: "glasspanel",
      title: "GlassPanel CLI",
      description: "Command line interface with transparent layers for AI-assisted code execution and development.",
      link: "https://glasspanel.vav.re",
      icon: (
        <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-700 group-hover:text-accent transition-colors duration-300" />
      ),
    },
    {
      id: "vintra",
      title: "VINTRA",
      description:
        "Dimensional medical solution integrating vector-based patient data systems with narrative healthcare intelligence.",
      link: "https://vintra.vav.re",
      icon: (
        <Activity className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-700 group-hover:text-accent transition-colors duration-300" />
      ),
    },
    {
      id: "tdelta",
      title: "TΔ (TDelta)",
      description: "Advanced time-series analytics and vector transformation for complex data processing applications.",
      link: "https://tdelta.vav.re",
      icon: (
        <CircleDot className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-700 group-hover:text-accent transition-colors duration-300" />
      ),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isLowPerformance ? 0.1 : 0.15,
        delayChildren: isLowPerformance ? 0.1 : 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: isLowPerformance ? 15 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isLowPerformance ? 0.4 : 0.7,
        ease: isLowPerformance ? "easeOut" : [0.22, 1, 0.36, 1],
      },
    },
  }

  const nextModule = () => {
    setActiveModuleIndex((prev) => (prev + 1) % modules.length)
  }

  const prevModule = () => {
    setActiveModuleIndex((prev) => (prev - 1 + modules.length) % modules.length)
  }

  // Render all modules on desktop, but only the active one on mobile with gesture navigation
  const renderModules = () => {
    if (!isMobile) {
      // Desktop view - show all modules in a grid
      return (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {modules.map((module) => (
            <motion.div key={module.id} className="group" variants={itemVariants}>
              <GlassPanel variant="translucent" className="h-full">
                <div className="p-5 sm:p-6 md:p-8 flex flex-col h-full">
                  <div className="mb-4 sm:mb-6">{module.icon}</div>
                  <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3 tracking-wide group-hover:text-accent transition-colors duration-300">
                    {module.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-light mb-4 sm:mb-6 flex-grow">
                    {module.description}
                  </p>
                  <a
                    href={module.link}
                    className="inline-flex items-center text-gray-700 hover:text-accent transition-colors duration-300 font-medium text-sm group touch-manipulation"
                    aria-label={`Learn more about ${module.title}`}
                  >
                    Learn more
                    <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </motion.div>
      )
    }

    // Mobile view - show only the active module with gesture navigation
    return (
      <div className="relative">
        <GestureHandler onSwipeLeft={nextModule} onSwipeRight={prevModule} className="w-full touch-manipulation">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModuleIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <GlassPanel variant="translucent" className="h-full">
                <div className="p-5 sm:p-6 md:p-8 flex flex-col h-full">
                  <div className="mb-4 sm:mb-6">{modules[activeModuleIndex].icon}</div>
                  <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3 tracking-wide">
                    {modules[activeModuleIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-light mb-4 sm:mb-6">
                    {modules[activeModuleIndex].description}
                  </p>
                  <a
                    href={modules[activeModuleIndex].link}
                    className="inline-flex items-center text-gray-700 hover:text-accent transition-colors duration-300 font-medium text-sm group touch-manipulation"
                    aria-label={`Learn more about ${modules[activeModuleIndex].title}`}
                  >
                    Learn more
                    <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </GlassPanel>
            </motion.div>
          </AnimatePresence>
        </GestureHandler>

        {/* Navigation indicators */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prevModule}
            className="p-2 rounded-full bg-white/30 backdrop-blur-sm"
            aria-label="Previous module"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex space-x-2">
            {modules.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveModuleIndex(index)}
                className={`w-2 h-2 rounded-full ${index === activeModuleIndex ? "bg-accent" : "bg-gray-300"}`}
                aria-label={`Go to module ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextModule}
            className="p-2 rounded-full bg-white/30 backdrop-blur-sm"
            aria-label="Next module"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <section id="modules" className="py-16 sm:py-20 md:py-24 lg:py-32 relative" ref={ref}>
      <GlassPanel variant="opaque" className="w-full h-full absolute inset-0 z-0" noBorder />

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
          Our Modules
        </motion.h2>

        {renderModules()}
      </div>
    </section>
  )
}
