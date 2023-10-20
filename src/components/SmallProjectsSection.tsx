import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts"
import { Variants, motion } from "framer-motion";
import { GithubIcon, LinkIcon } from "lucide-react";
import classNames from "classnames";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button";
import { smallProjectsData } from "../self_data/small-projects-data";



const mainDivAnimation: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      staggerDirection: 1
    },
  },
};

const childDivAnimations: Variants = {
  hidden: { opacity: 0, x: 300 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};


export default function SmallProjectsSection() {
  const mediaQuery = useMediaQuery(`(max-width: 970px)`);
  const secondMediaQuery = useMediaQuery(`(max-width: 815px)`);


  return (
    <section
      className={classNames({
        "flex-col gap-y-10 py-24": secondMediaQuery,
        "flex-row": !secondMediaQuery,
        "gap-x-2 px-6 py-12": mediaQuery,
        "gap-x-10 p-12": !mediaQuery,
        "flex items-center justify-evenly overflow-x-hidden": true
      })}
    >
      <div>
        <motion.h1
          className={classNames({
            "text-3xl": mediaQuery,
            "text-4xl": !mediaQuery,
            "font-bold": true
          })}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.3 }}
        >
          Other appealing Projects: For going through the concepts of Vanilla Javascript.
        </motion.h1>
      </div>

      <motion.div
        className={classNames({
          "w-[70vw]": secondMediaQuery,
          "w-[90vw]": mediaQuery,
          "w-[80vw]": !mediaQuery,
          "space-y-5": true
        })}
        variants={mainDivAnimation}
        initial={`hidden`}
        whileInView={`show`}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {smallProjectsData.reverse().map((data: smallProjectsDataTypes) => (
          <motion.div
            key={data.liveLink}
            variants={childDivAnimations}
          >
            <Alert key={data.liveLink} className="border-2 rounded-2xl border-zinc-600 dark:border-zinc-500">
              <data.icon className="h-5 w-5" />
              <AlertTitle>{data.title}</AlertTitle>
              <AlertDescription>
                <h1>{data.abt}</h1>

                <div className="mt-5 flex flex-col xs:flex-row gap-y-3 xs:gap-x-[10px]">
                  <Link to={data.liveLink} target="_blank">
                    <Button>
                      Link
                      <LinkIcon className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>

                  <Link to={data.githubLink} target="_blank">
                    <Button variant={"secondary"}>
                      Github
                      <GithubIcon className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </AlertDescription>
            </Alert>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}