"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Mail, GitlabIcon as GitHub, ExternalLink } from "lucide-react"
import GlassPanel from "./glass-panel"

// Add the following imports at the top
import BreadcrumbStructuredData from "./breadcrumb-structured-data"
import SEOModuleLinks from "./seo-module-links"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const modules = [
    { name: "CONCEPT2CODE", href: "https://concept2code.com" },
    { name: "GlassPanel CLI", href: "https://glasspanel.vav.re" },
    { name: "VINTRA", href: "https://vintra.vav.re" },
    { name: "TΔ (TDelta)", href: "https://tdelta.vav.re" },
  ]

  const resources = [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "Blog", href: "#" },
  ]

  // Inside the Footer component, add the following before the return statement
  const breadcrumbItems = [
    { name: "Home", url: "https://vav.re/" },
    { name: "About", url: "https://vav.re/#about" },
    { name: "Modules", url: "https://vav.re/#modules" },
    { name: "Contact", url: "https://vav.re/#contact" },
  ]

  return (
    <footer id="contact" className="pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 md:pb-16 relative overflow-hidden" ref={ref}>
      <GlassPanel variant="opaque" className="w-full h-full absolute inset-0 z-0 bg-black/90" noBorder />

      <div className="container relative z-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 text-white"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <div className="flex flex-col space-y-2 sm:space-y-3">
              <Link href="/" className="font-normal text-xl sm:text-2xl text-white tracking-tight inline-block">
                VAV<span className="ms-color-dot inline-block">.</span>RE
              </Link>
              <div className="flex items-center">
                <Image
                  src="/microsoft-favicon.ico"
                  alt="Microsoft"
                  width={16}
                  height={16}
                  className="h-3 w-3 sm:h-4 sm:w-4 mr-2"
                />
                <span className="text-xs text-gray-400">Microsoft for Startups – Founders Hub member</span>
              </div>
            </div>
            <p className="text-sm sm:text-base">Vector Architecture for Runtime Intelligence</p>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
              <a
                href="mailto:hello@vav.re"
                className="text-accent hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                hello@vav.re
              </a>
            </div>
            <div className="flex space-x-3 sm:space-x-4 pt-2 sm:pt-4">
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 touch-manipulation"
                aria-label="GitHub"
              >
                <GitHub className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 touch-manipulation"
                aria-label="Twitter"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-4">Modules</h3>
            <ul className="space-y-2 sm:space-y-3">
              {modules.map((module) => (
                <li key={module.name}>
                  <a
                    href={module.href}
                    className="text-white hover:text-accent transition-colors duration-300 flex items-center group text-sm sm:text-base touch-manipulation"
                  >
                    {module.name}
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 inline-block ml-1">
                      <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3 inline" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-4">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-white hover:text-accent transition-colors duration-300 flex items-center group text-sm sm:text-base touch-manipulation"
                  >
                    {resource.name}
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 inline-block ml-1">
                      <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3 inline" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-4">Newsletter</h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Subscribe to our newsletter for updates on new modules and features.
            </p>
            <form className="space-y-2 sm:space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-gray-800 border border-gray-700 rounded-sm px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-sm transition-colors duration-300 text-sm touch-manipulation"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </motion.div>

        <SEOModuleLinks />
        <BreadcrumbStructuredData items={breadcrumbItems} />

        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-xs sm:text-sm text-gray-700 tracking-wide">
            &copy; 2025 VAV.RE. All rights reserved. | Microsoft for Startups – Founders Hub member
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
