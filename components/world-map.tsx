"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function WorldMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create dot grid
    const dots: { x: number; y: number; size: number }[] = []
    const spacing = 30
    const rows = Math.ceil(canvas.height / spacing)
    const cols = Math.ceil(canvas.width / spacing)

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Create a world map shape by excluding dots in certain areas
        const x = j * spacing
        const y = i * spacing

        // Simple algorithm to create a rough world map shape
        const isLand = Math.random() > 0.6

        if (isLand) {
          dots.push({
            x,
            y,
            size: Math.random() * 2 + 1,
          })
        }
      }
    }

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw dots
      dots.forEach((dot) => {
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

