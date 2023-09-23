import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

import Navbar from "./components/Navbar"
import SkillsDescription from "./components/SkillsDescription"
import IntroSection from "./components/IntroSection"
import ProjectSection from "./components/ProjectsSection"
import SmallProjectsSection from "./components/SmallProjectsSection"
import Footer from "./components/Footer"
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
            <Navbar />
            <IntroSection />
            <SkillsDescription />
            <ProjectSection />
            <SmallProjectsSection />
            <Footer />
        </>
    )
}

