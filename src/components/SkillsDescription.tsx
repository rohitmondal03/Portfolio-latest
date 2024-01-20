import { useEffect } from "react";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitTypes from "split-type";
import { motion } from "framer-motion"
import { useMediaQuery } from "usehooks-ts";
import classNames from "classnames";


const SkillsDescription = () => {
  const isScreenWidthLessThan1000px = useMediaQuery(`(max-width: 1000px)`);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headingElement = document.querySelector(".animated-class")

    // @ts-ignore
    const text = new SplitTypes(headingElement, { types: "words, chars" });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: headingElement,
        start: "top 80%",
        end: "end 20%",
        scrub: true,
        markers: false,
      },
      opacity: 0.2,
      stagger: 0.2,
    });
  }, [])


  return (
    <motion.section
      className={classNames({
        "px-3 md:px-1 pt-10 pb-32 md:py-28": isScreenWidthLessThan1000px,
        "py-44 px-16": !isScreenWidthLessThan1000px,
        "grid place-items-center": true,
      })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, ease: "easeOut" }}
    >

      <h1 
      // className={`${isScreenWidthLessThan1000px ? "text-xl xs:text-2xl sm:text-3xl md:text-4xl text-center" : "text-5xl"} font-bold leading-tight animated-class`}
      className={classNames({
        "text-xl xs:text-2xl sm:text-3xl md:text-4xl text-center": isScreenWidthLessThan1000px,
        "text-5xl text-left": !isScreenWidthLessThan1000px,
        "font-bold leading-tight animated-class": true,
      })}
      >
        Experienced in <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, <span>TypeScript</span>, <span>ReactJS</span>, <span>NextJS</span>, <span>Redux</span> and <span>Jotai</span>, I create captivating websites that seamlessly integrate with <span>Backend as a Service (BaaS)</span> platforms, ensuring cross-browser compatibility and pixel-perfect responsiveness is my commitment to delivering outstanding user experiences.
      </h1>
    </motion.section>
  )
}

export default SkillsDescription