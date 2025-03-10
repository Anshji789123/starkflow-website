"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bot, Send, X, Minimize2, Maximize2 } from "lucide-react"

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "Hi there! I'm the STARKFLOW assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (isMinimized) setIsMinimized(false)
  }

  const toggleMinimize = (e) => {
    e.stopPropagation()
    setIsMinimized(!isMinimized)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help you learn more about our global talent services.",
        "STARKFLOW specializes in connecting businesses with elite tech professionals from around the world.",
        "Our team can help you build custom development teams tailored to your specific needs.",
        "Would you like to schedule a consultation to discuss your requirements in detail?",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
      setMessages((prev) => [...prev, { role: "bot", content: randomResponse }])
      setIsTyping(false)
    }, 1500)
  }

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg z-50 ${
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-primary/90"
        }`}
        size="icon"
        aria-label="Chat with AI assistant"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card
          className={`fixed right-6 shadow-xl z-40 transition-all duration-300 w-80 md:w-96 ${
            isMinimized ? "bottom-20 h-16" : "bottom-24 max-h-[calc(100vh-120px)]"
          }`}
        >
          <CardHeader className="p-4 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-lg flex items-center">
              <Bot className="h-5 w-5 mr-2 text-primary" />
              STARKFLOW Assistant
            </CardTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleMinimize}>
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
          </CardHeader>

          {!isMinimized && (
            <>
              <CardContent className="p-0 overflow-hidden flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px]">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`flex items-start space-x-2 max-w-[80%] ${
                          message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                        }`}
                      >
                        <Avatar className="h-8 w-8 mt-0.5">
                          {message.role === "bot" ? (
                            <>
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI Assistant" />
                              <AvatarFallback className="bg-primary text-white">AI</AvatarFallback>
                            </>
                          ) : (
                            <>
                              <AvatarFallback>You</AvatarFallback>
                            </>
                          )}
                        </Avatar>
                        <div
                          className={`rounded-lg p-3 ${
                            message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          {message.content}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2 max-w-[80%]">
                        <Avatar className="h-8 w-8 mt-0.5">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI Assistant" />
                          <AvatarFallback className="bg-primary text-white">AI</AvatarFallback>
                        </Avatar>
                        <div className="rounded-lg p-3 bg-muted">
                          <div className="flex space-x-1">
                            <div
                              className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSubmit} className="p-4 border-t">
                  <div className="flex space-x-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1"
                    />
                    <Button type="submit" size="icon" disabled={!input.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </>
          )}
        </Card>
      )}
    </>
  )
}

