import Hero from "@/components/hero"
import Services from "@/components/services"
import HowItWorks from "@/components/how-it-works"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import AIChatbot from "@/components/ai-chatbot"
import Stats from "@/components/stats"
import Pricing from "@/components/pricing"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <HowItWorks />
      <Stats />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
      <AIChatbot />
    </main>
  )
}

