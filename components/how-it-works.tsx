"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We discuss your needs, project scope, and team requirements to understand your goals.",
  },
  {
    number: "02",
    title: "Talent Matching",
    description: "Our AI-powered system matches your requirements with our global talent pool.",
  },
  {
    number: "03",
    title: "Team Assembly",
    description: "We assemble a custom team tailored to your project needs and company culture.",
  },
  {
    number: "04",
    title: "Seamless Integration",
    description: "Your new team members integrate with your existing processes and start delivering value.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-heading tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How We Work
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our streamlined process to build your perfect team
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-card border border-border/50 rounded-lg p-6 h-full relative z-10">
                <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                <CheckCircle className="text-primary mt-4 h-6 w-6" />
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

