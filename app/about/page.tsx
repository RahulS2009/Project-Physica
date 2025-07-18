"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  BookOpenCheck,
  Book,
  Atom,
  Users,
  GraduationCap,
  Lightbulb,
  Briefcase,
  Menu,
  X,
  ArrowRight,
} from "lucide-react"
import { FeatureCard } from "@/components/feature-card"
import { useState } from "react"

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      icon: BookOpenCheck,
      title: "AP & Olympiad Physics Question Banks",
      description:
        "Dynamic, searchable database segmented by exam level and topic. Features difficulty tags, step-by-step solutions, progress tracking, and a 'Challenge Mode' for timed quizzes.",
    },
    {
      icon: Atom,
      title: "Interactive Physics Simulations",
      description:
        "Engaging, physics-aviary style simulations designed to enhance understanding of complex concepts through visual and interactive experiences.",
    },
    {
      icon: Users,
      title: "Olympiad Mentorship Hub",
      description:
        "A dashboard portal for matching users with mentors for group sessions based on struggle areas. Offers video walkthroughs, seminar recordings, and downloadable practice sets.",
    },
    {
      icon: GraduationCap,
      title: "AP Physics Bootcamp",
      description:
        "A structured e-learning platform with four pathways (AP 1, 2, C Mechanics, C E&M). Includes concise video lectures, practice quizzes, notes, and review modules with locked progression.",
    },
    {
      icon: Lightbulb,
      title: "Research Idea Incubator",
      description:
        "A workspace dashboard with an 'Idea Board', 'Templates' for research outlines, 'Collaboration' spaces for real-time group work, and a 'Feedback' tab for mentor reviews.",
    },
    {
      icon: Briefcase,
      title: "Summer Program & Internship Connector",
      description:
        "A robust, searchable directory of opportunities with filter options, personalized recommendations, application tracking, and essay review requests from mentors.",
    },
  ]

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
            <Link href="/" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
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
              <Link href="/" className="text-white/90 hover:text-white text-sm font-medium">
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

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-white font-bold text-4xl md:text-5xl mb-4">Explore Our Core Features</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Project Physica offers a comprehensive suite of tools designed to elevate your physics learning and
              mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/">
              <Button
                variant="outline"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 px-8 py-3 text-base font-medium"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
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
