import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

import Navbar from "./components/shared/Navbar"
import SkillsDescription from "./components/SkillsDescription"
import IntroSection from "./components/IntroSection"
import ProjectSection from "./components/ProjectsSection"
import SmallProjectsSection from "./components/SmallProjectsSection"
import Footer from "./components/shared/Footer"
import { TooltipProvider } from "./components/ui/tooltip"
import './App.css'



export default function App() {
  useEffect(() => {
    const lenis = new Lenis()

    // @ts-ignore
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <>
      <TooltipProvider>
        <Navbar />
        <IntroSection />
        <SkillsDescription />
        <ProjectSection />
        <SmallProjectsSection />
        <Footer />
      </TooltipProvider>
    </>
  )
}

