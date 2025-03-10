"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const benefits = [
  "Access to pre-vetted global talent",
  "Significant cost savings",
  "Flexible team scaling",
  "Timezone-aligned collaboration",
  "Cultural fit assessment",
  "Ongoing support and management",
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading tracking-tight mb-6">
              About <span className="text-primary">STARKFLOW</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              STARKFLOW connects businesses with elite tech talent from around the world. We specialize in building
              high-performing remote teams that integrate seamlessly with your existing processes and culture.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our AI-powered matching system ensures that we find the perfect fit for your team, considering technical
              skills, soft skills, cultural alignment, and timezone compatibility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Learn More About Us
            </Button>
          </motion.div>

          <motion.div
            className="relative rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-video relative rounded-lg overflow-hidden border border-border/50 shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Global team collaboration"
                fill
                className="object-cover"
              />

              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />

              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-xl font-bold mb-2">Global Reach</h3>
                <p className="text-white/80">Connecting talent across 30+ countries</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

