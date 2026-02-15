import { useEffect } from "react"
import Navigation from "./components/navigation"
import ScrollToTop from "./components/scroll-to-top"
import Hero from "./components/sections/hero"
import About from "./components/sections/about"
import Experience from "./components/sections/experience"
import Skills from "./components/sections/skills"
import Projects from "./components/sections/projects"
import Contact from "./components/sections/contact"
import { ThemeProvider } from "./components/theme-provider"

// Helper for smooth scrolling based on hash
const ScrollHandler = () => {
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash
            if (hash) {
                const element = document.querySelector(hash)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }
        }
        window.addEventListener('hashchange', handleHashChange)
        // Check on load
        handleHashChange()
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])
    return null
}

export default function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ScrollHandler />
            <div className="min-h-screen bg-background font-sans antialiased">
                {/* Global Background */}
                <div className="fixed inset-0 z-[-1] transition-colors duration-500 bg-white dark:bg-black">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-500/20" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/20" />
                    <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-pink-500/10 blur-[100px] dark:bg-pink-500/20 mix-blend-multiply dark:mix-blend-screen" />
                </div>

                <Navigation />

                <main className="flex flex-col items-center justify-between relative">
                    <Hero id="hero" />
                    <About id="about" />
                    <Experience id="experience" />
                    <Skills id="skills" />
                    <Projects id="projects" />
                    <Contact id="contact" />
                </main>

                <ScrollToTop />
            </div>
        </ThemeProvider>
    )
}
