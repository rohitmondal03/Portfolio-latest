import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { LinkIcon, Github } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projectsData } from "@/lib/personal-data/projects-data";


export default function ProjectSection() {
  return (
    <motion.section
      className="px-3 sm:px-10 md:py-10 md:px-16 space-y-12 md:space-y-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
    >
      <div className="space-y-3 md:space-y-6">
        <h1 className="text-5xl text-orange-500 dark:text-yellow-500 font-bold text-center ">
          Projects
        </h1>
        <p className="text-center text-md sm:text-xl">
          Highlighted Projects: Showcasing Innovative Websites Driven by React,
          Backend and Seamless APIs.
        </p>
      </div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 mx-auto md:gap-x-4 gap-y-6">
        {projectsData.map((data: projectsDataType) => {
          return (
            <Card className="w-fit mx-auto rounded-2xl sm:rounded-3xl border-4 border-zinc-400 dark:border-zinc-400" key={data.id}>
              <CardHeader className="text-center">
                <CardTitle className="font-bold text-3xl">
                  {data.id}. {data.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-lg">
                  {data.desc}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                <img
                  src={data.img}
                  alt=""
                  width={500}
                  height={500}
                  className="border-2 border-zinc-600 rounded-lg p-1 mx-auto"
                />

                <ul className="text-left list-disc text-black dark:text-zinc-200 mx-auto">
                  {data.featuresList.map((items: string) => (
                    <li key={items}>{items}</li>
                  ))}
                </ul>

                <CardFooter className="flex flex-row justify-center gap-x-6 w-fit mx-auto border-[3px] border-zinc-500 px-3 py-2 rounded-3xl">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        to={data.liveLink}
                        target="_blank"
                      >
                        <LinkIcon className="hover:scale-125 transition-all duration-200" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent className="bg-black text-white dark:bg-white dark:text-black">
                      <p>{data.liveLink}</p>
                    </TooltipContent>
                  </Tooltip>

                  <Separator
                    orientation="vertical"
                    className="bg-black dark:bg-white h-[20px] m-0 p-0"
                  />

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        to={data.githubLink}
                        target="_blank"
                      >
                        <Github className="hover:scale-125 transition-all duration-200" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent className="bg-black text-white dark:bg-white dark:text-black">
                      <p>Github link of {data.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </CardFooter>
              </CardContent>
            </Card>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
