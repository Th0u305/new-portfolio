"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Code } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                <Code className="h-5 w-5 text-cyan-500" />
              </div>
            </div>
            <span className="font-bold text-xl">DevPortfolio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors hover:text-foreground/80 ${
                  pathname === link.href ? "text-foreground" : "text-foreground/60"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button className="hidden md:flex btn-bg">
              <Link href="/contact">Hire Me</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 font-medium ${pathname === link.href ? "text-foreground" : "text-foreground/60"}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="mt-2 btn-bg">
                <Link href="/contact" onClick={closeMenu}>
                  Hire Me
                </Link>
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}
