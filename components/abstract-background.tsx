'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'motion/react'

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

  const colors = useMemo(
    () => [
      'rgba(255, 105, 180, 0.5)', // Hot Pink
      'rgba(64, 224, 208, 0.5)', // Turquoise
      'rgba(255, 165, 0, 0.5)', // Orange
      'rgba(138, 43, 226, 0.5)', // Blue Violet
      'rgba(50, 205, 50, 0.5)', // Lime Green
      'rgba(255, 69, 0, 0.5)', // Red Orange
      'rgba(0, 191, 255, 0.5)', // Deep Sky Blue
      'rgba(255, 20, 147, 0.5)', // Deep Pink
      'rgba(124, 252, 0, 0.5)', // Lawn Green
      'rgba(255, 215, 0, 0.5)', // Gold
      'rgba(147, 0, 211, 0.5)', // Dark Violet
      'rgba(0, 255, 255, 0.5)', // Cyan
    ],
    []
  )

  useEffect(() => {
    const generateBalls = () => {
      const newBalls: Ball[] = []
      // Create 3 balls with specific positioning to ensure good spacing
      const positions = [
        { x: 15, y: 20 }, // Top left area
        { x: 70, y: 60 }, // Bottom right area
        { x: 40, y: 80 }, // Bottom center area
      ]

      for (let i = 0; i < 3; i++) {
        newBalls.push({
          id: i,
          x: positions[i].x,
          y: positions[i].y,
          size: Math.random() * 200 + 400, // 400-600px (much bigger)
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 80 + 100, // 100-180 seconds (very slow)
          delay: Math.random() * 30, // 0-30 seconds delay
        })
      }
      setBalls(newBalls)
    }

    generateBalls()
  }, [colors])

  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
      {/* Gradient Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90' />

      {/* Animated Balls - Simple and Clean */}
      {balls.map((ball) => (
        <motion.div
          key={ball.id}
          className='absolute rounded-full opacity-30'
          style={{
            width: ball.size,
            height: ball.size,
            background: ball.color,
            filter: 'blur(2px)', // Subtle blur for smooth effect
          }}
          initial={{
            x: `${ball.x}vw`,
            y: `${ball.y}vh`,
          }}
          animate={{
            x: [
              `${ball.x}vw`,
              `${((ball.x + 20) % 80) + 10}vw`, // Smaller movement range
              `${((ball.x + 40) % 80) + 10}vw`,
              `${ball.x}vw`,
            ],
            y: [
              `${ball.y}vh`,
              `${((ball.y + 15) % 80) + 10}vh`, // Smaller movement range
              `${((ball.y + 30) % 80) + 10}vh`,
              `${ball.y}vh`,
            ],
          }}
          transition={{
            duration: ball.duration,
            delay: ball.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Mesh gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-primary/3 to-transparent' />
      <div className='absolute inset-0 bg-gradient-to-bl from-transparent via-accent/3 to-transparent' />
    </div>
  )
}
