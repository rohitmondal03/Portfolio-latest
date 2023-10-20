import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

import Navbar from "./components/common/Navbar"
import SkillsDescription from "./components/SkillsDescription"
import IntroSection from "./components/IntroSection"
import ProjectSection from "./components/ProjectsSection"
import SmallProjectsSection from "./components/SmallProjectsSection"
import Footer from "./components/common/Footer"
import './App.css'
import { TooltipProvider } from "./components/ui/tooltip"



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

