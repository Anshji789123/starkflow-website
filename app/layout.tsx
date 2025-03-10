import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Google font import (for general content)
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Custom display font for headings
const fontHeading = localFont({
  src: "/fonts/CalSans-SemiBold.woff2", // Corrected the font path
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "STARKFLOW | Build Top Teams with Global Talent",
  description: "Hire elite professionals from Latin America and Asia, ready to make an impact on your projects.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontHeading.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
