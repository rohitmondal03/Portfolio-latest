import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { LinkIcon, Github } from "lucide-react";

import { projectsData } from "@/components/data/projects-data";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";



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

            <motion.div className="flex flex-wrap flex-row mx-auto gap-y-12">
                {projectsData.map((data: projectsDataType) => {
                    return (
                        <Card className="w-fit mx-auto border-2 border-zinc-400" key={data.liveLink}>
                            <CardHeader className="text-center">
                                <CardTitle className="font-bold text-3xl">
                                    {data.title}
                                </CardTitle>
                                <CardDescription className="text-sm sm:text-lg">
                                    {data.desc}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-5">
                                <img
                                    src={data.img}
                                    alt=""
                                    width={600}
                                    height={600}
                                    className="border-2 border-zinc-600 rounded-lg p-1 mx-auto"
                                />

                                <ul className="text-left list-disc text-black dark:text-zinc-200 mx-auto">
                                    {data.featuresList.map((items: string) => (
                                        <li key={items}>{items}</li>
                                    ))}
                                </ul>

                                <CardFooter className="flex flex-row justify-center gap-x-6 w-fit mx-auto border-[3px] border-zinc-500 px-3 py-3 rounded-3xl">
                                    <Link
                                        to={data.liveLink}
                                        target="_blank"
                                    >
                                        <LinkIcon className="hover:scale-125 transition-all duration-200" />
                                    </Link>

                                    <Separator
                                        orientation="vertical"
                                        className="bg-black dark:bg-white h-[20px] m-0 p-0"
                                    />

                                    <Link
                                        to={data.githubLink}
                                        target="_blank"
                                    >
                                        <Github className="hover:scale-125 transition-all duration-200" />
                                    </Link>
                                </CardFooter>
                            </CardContent>
                        </Card>
                    );
                })}
            </motion.div>
        </motion.section>
    );
}
