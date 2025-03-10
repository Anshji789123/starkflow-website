"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import HireModal from "./hire-modal"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hireModalOpen, setHireModalOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-heading text-2xl font-bold tracking-tight">STARKFLOW</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#how-it-works"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => scrollToSection("how-it-works")}
          >
            How We Work
          </Link>
          <Link
            href="#success-stories"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => scrollToSection("success-stories")}
          >
            Success Stories
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => scrollToSection("pricing")}
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </Link>
          <ModeToggle />
          <Button className="bg-primary hover:bg-primary/90" onClick={() => setHireModalOpen(true)}>
            Hire Now
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b">
          <div className="container px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#how-it-works"
              className="text-sm font-medium py-2 transition-colors hover:text-primary"
              onClick={() => scrollToSection("how-it-works")}
            >
              How We Work
            </Link>
            <Link
              href="#success-stories"
              className="text-sm font-medium py-2 transition-colors hover:text-primary"
              onClick={() => scrollToSection("success-stories")}
            >
              Success Stories
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium py-2 transition-colors hover:text-primary"
              onClick={() => scrollToSection("pricing")}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium py-2 transition-colors hover:text-primary"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Link>
            <Button
              className="bg-primary hover:bg-primary/90 w-full"
              onClick={() => {
                setMobileMenuOpen(false)
                setHireModalOpen(true)
              }}
            >
              Hire Now
            </Button>
          </div>
        </div>
      )}
      {hireModalOpen && <HireModal onClose={() => setHireModalOpen(false)} />}
    </header>
  )
}

