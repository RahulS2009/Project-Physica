"use client"

import Link from "next/link"
import { ArrowRight, Menu, X, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { TypingEffectTitle } from "@/components/typing-effect-title" // Import the new component
import { supabase } from "@/lib/utils"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const heroPhrases = ["Master Physics.", "Excel in AP & Olympiad.", "Unleash Your Potential."]

  async function handleWaitlistSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setMessage("Please enter a valid email address.")
      setLoading(false)
      return
    }
    const { error } = await supabase.from("waitlist").insert([{ email }])
    if (error) {
      setMessage(
        error.message && error.message.includes("duplicate")
          ? "You're already on the waitlist!"
          : "Error: " + (error.message || "Unknown error")
      )
    } else {
      setMessage("Success! You're on the waitlist.")
      setEmail("")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 -z-10">
        {/* Main radial gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, #2d4663 0%, #1a2b42 50%, #0a1628 100%)",
          }}
        />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3Cfilter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Enhanced Space Animation Video Background */}
      <div className="fixed inset-0 -z-5">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          style={{
            filter: "brightness(0.8) contrast(1.2) saturate(1.1)",
          }}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Space-BjlPAfapX976c44BSkWOSKcQOf4YJZ.mp4" type="video/mp4" />
        </video>

        {/* Dynamic overlay that pulses with the animation */}
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(45, 70, 99, 0.2) 0%, rgba(26, 43, 66, 0.4) 50%, rgba(10, 22, 40, 0.6) 100%)",
            animationDuration: "4s",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Project Physica Logo" className="h-10 w-10 object-contain" />
            <span className="text-white font-semibold text-2xl tracking-wide">Project Physica</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              About
            </Link>
          </div>

          {/* Desktop CTA */}

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            <div className="flex flex-col space-y-4">
              <Link href="#" className="text-white/90 hover:text-white text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-white/90 hover:text-white text-sm font-medium">
                About
              </Link>
              <hr className="border-white/20" />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Content - Centered */}
            <div className="max-w-2xl lg:max-w-3xl mx-auto text-center">
              {/* Main Headline with enhanced styling */}
              <div className="mb-6">
                <TypingEffectTitle phrases={heroPhrases} />
              </div>
              {/* Supporting Text */}
              <p
                className="text-white/80 mb-8 max-w-2xl mx-auto text-lg sm:text-xl lg:text-2xl leading-relaxed px-2"
              >
                Master physics and reach your academic goals with Project Physica.
              </p>
              {/* CTA Buttons */}
              <form className="flex flex-col gap-4 max-w-xl mx-auto" onSubmit={handleWaitlistSubmit}>
                <p className="text-white/80 text-base sm:text-lg lg:text-xl mb-2">Join our waitlist for early access and updates!</p>
                <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-3 sm:gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full sm:w-auto flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/70 backdrop-blur-sm focus:ring-white/50 focus:border-white/50 h-12 sm:h-14 text-base sm:text-lg px-4 sm:px-5 mx-auto"
                    disabled={loading}
                  />
                  <Button
                    type="submit"
                    className="w-full sm:w-auto flex-1 bg-blue-500/90 hover:bg-blue-500 border border-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg"
                    disabled={loading}
                  >
                    {loading ? "Joining..." : "Join Waitlist"}
                  </Button>
                </div>
                {message && <div className={`text-center text-sm ${message.startsWith("Success") ? "text-green-400" : "text-red-400"}`}>{message}</div>}
              </form>
              {/* Social Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <a
                  href="https://discord.com/invite/fg8KVGvkKS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 hover:bg-[#5865F2]/90 border border-white/20 p-3 transition-colors duration-200 flex items-center justify-center shadow-lg"
                  aria-label="Join our Discord"
                >
                  <MessageCircle className="h-7 w-7 text-[#5865F2]" />
                </a>
                <a
                  href="https://www.instagram.com/projectphysica/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 hover:bg-[#E1306C]/90 border border-white/20 p-3 transition-colors duration-200 flex items-center justify-center shadow-lg"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-7 w-7 text-[#E1306C]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Subtle glow effects */}
      <div className="fixed inset-0 -z-5 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>
    </div>
  )
}
