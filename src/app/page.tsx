"use client"

import Hero from "./components/sections/hero"
import About from "./components/sections/about"
import Experience from "./components/sections/experience"
import Skills from "./components/sections/skills"
import Projects from "./components/sections/projects"
import Contact from "./components/sections/contact"
import Navigation from "./components/navigation"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Navigation />
      <Hero id="hero" />
      <About id="about" />
      <Experience id="experience" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </main>
  )
}
