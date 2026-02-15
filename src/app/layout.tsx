import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/theme-provider"
import Navigation from "./components/navigation"
import ScrollToTop from "./components/scroll-to-top"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ajithar A - AI Software Engineer Portfolio",
  description:
    "Professional portfolio of Ajithar A, an AI Engineer specializing in Generative AI, Automation AI, Natural Language Processing, Machine Learning, and Computer Vision. Experienced in developing intelligent systems, conversational AI, and scalable AI-driven applications using modern web technologies.",
  keywords: "AI Engineer, Generative AI, Automation AI, Natural Language Processing, Large Language Models, Machine Learning, Deep Learning, Computer Vision, MLOps, Prompt Engineering, LangChain, OpenAI, Groq API, RAG, Artificial Intelligence, AI Portfolio, Intelligent Systems, Conversational AI",
  authors: [{ name: "Ajithar A" }],
  openGraph: {
    title: "Ajithar A - AI Software Engineer",
    description: "Professional portfolio showcasing web development projects and skills",
    type: "website",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark">
          {/* Global Background */}
          <div className="fixed inset-0 z-[-1] transition-colors duration-500 bg-white dark:bg-black">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-500/20" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/20" />
            <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-pink-500/10 blur-[100px] dark:bg-pink-500/20 mix-blend-multiply dark:mix-blend-screen" />
          </div>

          <Navigation />
          {children}
          <ScrollToTop />
        </ThemeProvider>

        {/* Chatling Chatbot */}
        <Script id="chatling-config" strategy="beforeInteractive">
          {`window.chtlConfig = { chatbotId: "1412735164" }`}
        </Script>
        <Script
          async
          data-id="1412735164"
          id="chtl-script"
          src="https://chatling.ai/js/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
