import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useMediaQuery } from "usehooks-ts"
import { motion } from "framer-motion"
import classNames from "classnames"

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import ProfileLoadImg from "../assets/smallProfilePhoto.jpg"
import ProfilePhoto from "../assets/MyPhoto.jpg"


export default function IntroSection() {
  const [profileImgSrc, setProfileImgSrc] = useState(ProfileLoadImg || ProfilePhoto)
  const isScreenWidthLessThan900 = useMediaQuery(`(max-width: 900px)`);
  const profileImgClass = profileImgSrc === ProfileLoadImg ? "loading" : "loaded"

  useEffect(() => {
    const img = new Image();
    img.src = ProfilePhoto
    img.onload = () => {
      setProfileImgSrc(ProfilePhoto)
    }
  }, [profileImgSrc])


  return (
    <motion.section
      className={classNames({
        "px-3 sm:px-8 flex-col justify-center gap-y-16 text-center": isScreenWidthLessThan900,
        "px-24 justify-around gap-x-16 flex-row": !isScreenWidthLessThan900,
        "flex items-center py-12": true,
      })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="space-y-3 sm:space-y-5">
        <h1 className="sm:text-left text-4xl xs:text-5xl sm:text-6xl">
          I&apos;m
          <span className="text-red-500 font-bold"> Rohit</span>
        </h1>

        <p className="xs:text-left text-sky-500 font-bold dark:font-normal dark:text-yellow-300 text-lg">- frontend developer</p>

        <p
          className={classNames({
            "text-md xs:text-xl": isScreenWidthLessThan900,
            "text-2xl": !isScreenWidthLessThan900,
            "font-bold dark:font-normal dark:text-slate-100 xs:text-left": true,
          })}
        >
          I&apos;m a aspiring frontend developer with expertise in NextJS, ReactJS, TypeScript and Javascript. My passion lies in crafting seamless web experiences, with a knack for integrating backend services and APIs. Let&apos;s explore how my skills can transform your digital vision into reality.
        </p>

        <Link
          to={`https://flowcv.com/resume/vgsaaqno90`}
          target="_blank"
          className={cn(buttonVariants({
            size: "lg",
            variant: "default",
            className: "mt-4 font-bold mx-auto"
          }))}
        >
          Resume
        </Link>
      </div>

      <img
        placeholder="blur"
        src={profileImgSrc}
        height={`${isScreenWidthLessThan900 ? "250" : "300"}`}
        width={`${isScreenWidthLessThan900 ? "250" : "300"}`}
        alt="My photo"
        className={`${profileImgClass} rounded-3xl`}
      />
    </motion.section>
  )
}

