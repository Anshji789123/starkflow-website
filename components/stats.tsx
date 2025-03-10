"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Globe, Award, Clock } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

const stats = [
  {
    value: 500,
    label: "Global Talents",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    value: 30,
    label: "Countries",
    icon: <Globe className="h-8 w-8 text-primary" />,
  },
  {
    value: 98,
    label: "Client Satisfaction",
    suffix: "%",
    icon: <Award className="h-8 w-8 text-primary" />,
  },
  {
    value: 48,
    label: "Hours Average Response",
    icon: <Clock className="h-8 w-8 text-primary" />,
  },
]

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none bg-card/50 backdrop-blur-sm shadow-lg h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">{stat.icon}</div>
                  <CountUp end={stat.value} inView={inView} className="text-4xl font-bold mb-2" suffix={stat.suffix} />
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({ end, inView, className, suffix = "" }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number
    const duration = 2000 // 2 seconds

    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(countUp)
      }
    }

    animationFrame = requestAnimationFrame(countUp)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, inView])

  return (
    <div className={className}>
      {count}
      {suffix}
    </div>
  )
}

