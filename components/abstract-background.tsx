"use client"

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

interface Ball {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

export function AbstractBackground() {
  const [balls, setBalls] = useState<Ball[]>([])

  const colors = [
    'rgba(255, 105, 180, 0.4)', // Hot Pink
    'rgba(64, 224, 208, 0.4)',  // Turquoise
    'rgba(255, 165, 0, 0.4)',   // Orange
    'rgba(138, 43, 226, 0.4)',  // Blue Violet
    'rgba(50, 205, 50, 0.4)',   // Lime Green
    'rgba(255, 69, 0, 0.4)',    // Red Orange
    'rgba(0, 191, 255, 0.4)',   // Deep Sky Blue
    'rgba(255, 20, 147, 0.4)',  // Deep Pink
    'rgba(124, 252, 0, 0.4)',   // Lawn Green
    'rgba(255, 215, 0, 0.4)',   // Gold
    'rgba(147, 0, 211, 0.4)',   // Dark Violet
    'rgba(0, 255, 255, 0.4)',   // Cyan
  ]

  useEffect(() => {
    const generateBalls = () => {
      const newBalls: Ball[] = []
      for (let i = 0; i < 15; i++) {
        newBalls.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 300 + 100, // 100-400px
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 40 + 30, // 30-70 seconds
          delay: Math.random() * 10, // 0-10 seconds delay
        })
      }
      setBalls(newBalls)
    }

    generateBalls()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Animated Balls */}
      {balls.map((ball) => (
        <motion.div
          key={ball.id}
          className="absolute rounded-full blur-xl opacity-60"
          style={{
            width: ball.size,
            height: ball.size,
            background: `radial-gradient(circle, ${ball.color} 0%, transparent 70%)`,
          }}
          initial={{
            x: `${ball.x}vw`,
            y: `${ball.y}vh`,
          }}
          animate={{
            x: [
              `${ball.x}vw`,
              `${(ball.x + 50) % 100}vw`,
              `${(ball.x + 20) % 100}vw`,
              `${ball.x}vw`,
            ],
            y: [
              `${ball.y}vh`,
              `${(ball.y + 30) % 100}vh`,
              `${(ball.y + 60) % 100}vh`,
              `${ball.y}vh`,
            ],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: ball.duration,
            delay: ball.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Additional floating particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: colors[i % colors.length],
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.3,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: Math.random() * 25 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-accent/5 to-transparent" />
    </div>
  )
}