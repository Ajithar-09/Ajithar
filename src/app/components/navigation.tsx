"use client"

import { useState, useEffect } from "react"
import Link from "next/link" // Use Next.js Link for optimized navigation (even for anchors, or stick to a tag if purely client-side internal nav)
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  // Handle scroll for sticky header styling and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine active section
      const sections = ["hero", "about", "experience", "skills", "projects", "contact"]

      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Check if the section is roughly in the viewport (top 1/3 of screen)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    // Extract target id from href (e.g., "#about" -> "about")
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      // Smooth scroll to element
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      })
      setIsOpen(false) // Close mobile menu if open
      setActiveSection(targetId)
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? theme === "dark"
          ? "bg-black/90 backdrop-blur-xl border-b border-white/20 shadow-lg"
          : "bg-white/90 backdrop-blur-xl border-b border-black/20 shadow-lg"
        : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="#hero"
              onClick={(e) => scrollToSection(e, "#hero")}
              className={`text-2xl font-bold tracking-tighter hover:scale-105 transition-transform flex items-center ${theme === "dark" ? "text-white" : "text-black"
                }`}
            >
              Ajithar<span className="text-purple-500">.</span>
              <span className="text-purple-300 relative">
                A
                <span className="absolute -top-1 -right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${activeSection === item.id
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold"
                    : theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-black"
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  ></span>
                </a>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`rounded-full ${theme === "dark" ? "text-white hover:text-white hover:bg-white/20" : "text-black hover:text-black hover:bg-black/10"}`}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
                  } focus:outline-none`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${theme === "dark" ? "bg-black/95 border-b border-white/10" : "bg-white/95 border-b border-black/10"
              } backdrop-blur-xl overflow-hidden`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === item.id
                    ? "text-purple-500 bg-white/10"
                    : theme === "dark"
                      ? "text-gray-300 hover:text-white hover:bg-white/10"
                      : "text-gray-600 hover:text-black hover:bg-black/5"
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
