"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronDown } from "lucide-react"
import GlassPanel from "./glass-panel"
import FAQStructuredData from "./faq-structured-data"
import { useDevicePerformance } from "@/hooks/use-device-performance"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { isLowPerformance } = useDevicePerformance()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "What is Vector Architecture for Runtime Intelligence?",
      answer:
        "Vector Architecture for Runtime Intelligence (VAV.RE) provides infrastructure for next-generation AI systems, combining vector architecture with runtime intelligence to create powerful, modular solutions for AI-native tools.",
    },
    {
      question: "How does CONCEPT2CODE work?",
      answer:
        "CONCEPT2CODE transforms conceptual ideas into deployable code through multimodal prompts and smart CLI tools, enabling rapid development and deployment of complex software systems.",
    },
    {
      question: "What is GlassPanel CLI used for?",
      answer:
        "GlassPanel CLI is a command line interface with transparent layers for AI-assisted code execution and development, making it easier to visualize and manage complex coding tasks.",
    },
    {
      question: "How can VINTRA benefit healthcare?",
      answer:
        "VINTRA is a dimensional medical solution that integrates vector-based patient data systems with narrative healthcare intelligence, enabling more comprehensive and intuitive healthcare data management.",
    },
    {
      question: "What kind of applications can benefit from TΔ (TDelta)?",
      answer:
        "TΔ (TDelta) provides advanced time-series analytics and vector transformation for complex data processing applications, making it ideal for financial modeling, IoT data analysis, and predictive maintenance systems.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 lg:py-32 relative" ref={ref}>
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
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <GlassPanel variant="translucent" className="overflow-hidden">
                <button
                  className="w-full text-left p-4 sm:p-6 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-base sm:text-lg font-medium">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 sm:px-6 pb-4 sm:pb-6"
                    >
                      <p className="text-sm sm:text-base text-gray-700">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>

      <FAQStructuredData questions={faqs} />
    </section>
  )
}
