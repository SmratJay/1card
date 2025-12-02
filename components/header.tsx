"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 glow-neon">
              <img src="/1card-logo.jpg" alt="1CARD" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              How It Works
            </a>
            <a
              href="#trainers"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Trainers
            </a>
          </nav>

          {/* Connect Wallet Button */}
          <div className="hidden md:block">
            <button className="btn-primary text-sm">Connect Wallet</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4 border-t border-border pt-4">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              How It Works
            </a>
            <a
              href="#trainers"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Trainers
            </a>
            <button className="btn-primary w-full text-sm">Connect Wallet</button>
          </nav>
        )}
      </div>
    </header>
  )
}
