"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Users, Briefcase, Zap } from "lucide-react"

const services = [
  {
    title: "Tech Talent",
    description: "Access to top-tier developers, engineers, and tech specialists from around the globe.",
    icon: <Code className="h-10 w-10 text-primary" />,
  },
  {
    title: "Team Building",
    description: "Custom team assembly based on your project requirements and company culture.",
    icon: <Users className="h-10 w-10 text-primary" />,
  },
  {
    title: "Project Management",
    description: "Experienced project managers to ensure smooth execution and delivery.",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
  },
  {
    title: "Rapid Scaling",
    description: "Quickly scale your team up or down based on project demands and timelines.",
    icon: <Zap className="h-10 w-10 text-primary" />,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-heading tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive solutions to build and manage your global tech teams
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

