"use client"

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useMediaQuery } from "usehooks-ts"
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import ProjectSection from "@/components/ProjectsSection";
import SmallProjectsSection from "@/components/SmallProjectsSection";
import SkillsDescription from "@/components/SkillsDescription";



export default function Page() {
    const parallaxDiv = useRef<HTMLElement>(null)

    const mediaQuery = useMediaQuery(`(max-width: 900px)`);


    return (
        <>
            {/* INTRO SECTION */}
            <motion.section
                ref={parallaxDiv}
                className={`${mediaQuery ? "px-8 flex-col justify-center gap-y-10 text-center" : "px-24 justify-between gap-x-16 flex-row"} flex items-center py-12`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="space-y-2 sm:space-y-5">
                    <h1 className="text-4xl xs:text-6xl">
                        I&apos;m
                        <span className="text-red-500 font-bold"> Rohit</span>
                    </h1>

                    <p className="text-sky-500 font-bold dark:font-normal dark:text-yellow-300 text-lg">- frontend developer</p>

                    <p className={`${mediaQuery ? "text-md xs:text-xl" : "text-2xl"} font-bold dark:font-normal dark:text-slate-100`}>I&apos;m a aspiring frontend developer with expertise in React, JavaScript, and TypeScript. My passion lies in crafting seamless web experiences, with a knack for integrating backend services and APIs. Let&apos;s explore how my skills can transform your digital vision into reality.</p>

                    <Link href={`https://flowcv.com/resume/vgsaaqno90`} target="_blank">
                        <Button className="mt-4 font-bold">
                            Resume
                        </Button>
                    </Link>
                </div>

                <Image
                    placeholder="blur"
                    blurDataURL="/assets/smallProfilePhoto.jpg"
                    src={`/assets/MyPhoto.jpg`}
                    height={`${mediaQuery ? "250" : "300"}`}
                    width={`${mediaQuery ? "250" : "300"}`}
                    alt="My photo"
                    className="rounded-3xl"
                />
            </motion.section>


            {/* SKILLS AND TECH STACKS SECTION */}
            <SkillsDescription />


            {/* PROJECTS */}
            <ProjectSection />
            <SmallProjectsSection />
        </>
    )
}