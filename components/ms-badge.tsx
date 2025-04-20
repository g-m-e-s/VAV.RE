"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import GlassPanel from "./glass-panel"

export default function MicrosoftBadge() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.6 })

  return (
    <section className="py-12 relative overflow-hidden" ref={ref}>
      <GlassPanel
        variant="semi"
        className="w-full h-full absolute inset-0 z-0 bg-gradient-to-r from-[#5E4B93]/20 to-[#7B4397]/20"
        noBorder
      />

      <motion.div
        className="container flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-4"
        >
          <Image
            src="/ms-founders-hub.png"
            alt="Microsoft for Startups Founders Hub"
            width={180}
            height={80}
            className="h-auto w-auto"
          />
          <div className="flex flex-col">
            <p className="text-lg md:text-xl font-medium text-[#5E4B93]">Proud Member</p>
            <p className="text-sm text-gray-600">Accelerating innovation with Microsoft's support</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="ml-0 md:ml-auto"
        >
          <a
            href="https://foundershub.startups.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary bg-[#5E4B93] hover:bg-[#7B4397] border-[#5E4B93] hover:border-[#7B4397]"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
