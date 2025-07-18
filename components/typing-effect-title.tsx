"use client"

import { useState, useEffect } from "react"

interface TypingEffectTitleProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export function TypingEffectTitle({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}: TypingEffectTitleProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const handleTyping = () => {
      const fullText = phrases[currentPhraseIndex]
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        if (currentText.length === 0) {
          setIsDeleting(false)
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        if (currentText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      }
    }

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime])

  return (
    <h1
      className="text-white font-light leading-tight tracking-tight mb-6 relative"
      style={{
        fontSize: "clamp(2.5rem, 5vw, 4rem)",
        lineHeight: "1.1",
        letterSpacing: "-0.02em",
        background: "linear-gradient(90deg, #ffffff 0%, #e2e8f0 50%, #ffffff 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: "shimmer 3s ease-in-out infinite",
      }}
    >
      {currentText}
      <span
        className="animate-blink"
        style={{
          display: 'inline-block',
          color: '#fff',
          fontWeight: 700,
          fontSize: 'inherit',
          marginLeft: '2px',
          WebkitTextFillColor: 'white',
          background: 'none',
        }}
      >
        |
      </span>
    </h1>
  )
}
