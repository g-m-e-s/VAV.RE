"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import GlassPanel from "./glass-panel"
import { useOnClickOutside } from "@/hooks/use-click-outside"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useOnClickOutside(menuRef, () => setIsOpen(false))

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Modules", href: "#modules" },
    { name: "Contact", href: "#contact" },
  ]

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <motion.header
      className="fixed w-full top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <GlassPanel variant={isScrolled ? "semi" : "translucent"} className="w-full transition-all duration-300">
        <div className="container mx-auto px-4 py-3 sm:py-4 md:py-5">
          <div className="flex justify-between items-center">
            <motion.div variants={logoVariants} initial="hidden" animate="visible" className="flex items-center flex-1">
              <Link href="/" className="font-medium text-xl sm:text-2xl text-black tracking-tight flex items-center">
                VAV<span className="ms-color-dot inline-block">.</span>RE
                <span className="ml-2 flex items-center border-l border-gray-300 pl-2 sm:pl-3">
                  <Image
                    src="/microsoft-favicon.ico"
                    alt="Microsoft"
                    width={16}
                    height={16}
                    className="mr-1 w-3 h-3 sm:w-4 sm:h-4"
                  />
                  <span className="text-xs text-gray-600 whitespace-nowrap">Microsoft for Startups – Founders Hub</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav className="hidden md:block" variants={navVariants} initial="hidden" animate="visible">
              <ul className="flex space-x-6 lg:space-x-8">
                {navLinks.map((link) => (
                  <motion.li key={link.name} variants={navItemVariants}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-accent transition-colors duration-300 text-sm tracking-wide"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 focus:outline-none p-2"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={menuRef}
                className="md:hidden fixed inset-0 top-[60px] z-50 bg-white/95 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 pt-10">
                  <ul className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="block text-xl font-medium text-gray-800 hover:text-accent transition-colors duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </GlassPanel>
    </motion.header>
  )
}
