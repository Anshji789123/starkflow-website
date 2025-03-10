"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "STARKFLOW helped us build a world-class engineering team in just 3 weeks. The talent quality exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CTO, TechVision",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The developers we hired through STARKFLOW integrated seamlessly with our team. Their technical skills and communication are outstanding.",
    author: "Michael Chen",
    role: "VP of Engineering, DataFlow",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with STARKFLOW has transformed our development process. We've reduced costs while increasing output quality.",
    author: "Elena Rodriguez",
    role: "Product Director, InnovateCorp",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The talent matching process was incredibly efficient. STARKFLOW understood our needs and delivered perfect candidates.",
    author: "David Kim",
    role: "Founder, StartupX",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="success-stories" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-heading tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Success Stories
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hear what our clients have to say about working with STARKFLOW
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute -top-10 left-10 opacity-20">
            <Quote className="h-24 w-24 text-primary" />
          </div>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-none bg-card/50 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8 md:p-12 text-center">
                <p className="text-xl md:text-2xl italic mb-8">"{testimonials[activeIndex].quote}"</p>
                <div className="flex flex-col items-center">
                  <Avatar className="h-16 w-16 mb-4 border-2 border-primary">
                    <AvatarImage src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].author} />
                    <AvatarFallback>
                      {testimonials[activeIndex].author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[activeIndex].author}</h4>
                    <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

