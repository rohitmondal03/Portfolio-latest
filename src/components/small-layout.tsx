"use client"

import { Montserrat } from "next/font/google"
import { ReactNode, useEffect } from "react"
import Lenis from '@studio-freight/lenis'

import ThemeProvider from "@/components/theme-provider"
import Navbar from "./Navbar"
import Footer from "./Footer"


const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "700"]
})


type RootLayoutProps = {
    children: ReactNode
}


export default function SmallLayout({ children }: RootLayoutProps) {
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
            <html lang="en" suppressHydrationWarning>
                <body className={`${montserrat.className} w-full`}>
                    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                        <Navbar />
                        {children}
                        <Footer />
                    </ThemeProvider>
                </body>
            </html>
        </>
    )
}
