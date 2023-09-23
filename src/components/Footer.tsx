import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

import { socialLinks } from "./data/social-links";


export default function Footer() {
    const mediaQuery = useMediaQuery(`(max-width: 900px)`);

    return (
        <footer className={`${mediaQuery ? "justify-between" : ""} flex flex-col gap-y-5 px-4 sm:px-10 md:px-0 py-6 bg-black text-white dark:bg-zinc-100 dark:text-black text-center`}>

            <div className="flex flex-col sm:flex-row gap-y-3 items-center justify-between md:justify-around">
                <h1 className="text-lg">Developed with ❣️ <br /> <span className="underline font-bold text-xl">@Rohit Mondal</span> </h1>

                <div>
                    <h1 className="font-bold text-lg text-left">Credits</h1>

                    <ol className="footer-credit-list list-decimal text-left">
                        <li>
                            <Link href={`https://nextjs.org`} target="_blank">nextjs</Link>
                        </li>

                        <li>
                            <Link href={`https://tailwindcss.com/`} target="_blank">TailwindCSS</Link>
                        </li>

                        <li>
                            <Link href={`https://www.framer.com/motion/`} target="_blank">Framer Motion</Link>
                        </li>

                        <li>
                            <Link href={`https://ui.shadcn.com/`} target="_blank">shadcnUI</Link>
                        </li>

                        <li>
                            <Link href={`https://usehooks-ts.com/`} target="_blank">usehooks-ts</Link>
                        </li>
                    </ol>
                </div>
            </div>

            <div className="p-2 flex flex-row items-center justify-center rounded-2xl border-2 border-zinc-200 dark:border-slate-700 gap-x-12 w-fit mx-auto">
                <h1 className="text-sm sm:text-base font-bold">Connect w/ me</h1>

                <ul className="flex flex-row gap-x-1 sm:gap-x-3">
                    {socialLinks.map((links: socialLinksType) => (
                        <Link
                            href={links.link}
                            target="_blank"
                            className="scale-90 sm:scale-100 hover:scale-125 hover:rotate-[360deg] duration-500 transition-all"
                            key={links.link}
                        >
                            <links.icon className="h-5" />
                        </Link>
                    ))}
                </ul>
            </div>
        </footer>
    )
}