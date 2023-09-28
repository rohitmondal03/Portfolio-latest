import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

import { socialLinks } from "./data/social-links";
import { creditLinks } from "./data/tect-stack-credit-data"


export default function Footer() {
    const mediaQuery = useMediaQuery(`(max-width: 900px)`);

    return (
        <footer className={`${mediaQuery ? "justify-between" : ""} flex flex-col gap-y-5 px-4 sm:px-10 md:px-0 py-6 bg-black text-white dark:bg-zinc-100 dark:text-black text-center`}>

            <div className="flex flex-col sm:flex-row gap-y-3 items-center justify-between md:justify-around">
                <h1 className="text-lg">Developed with ❣️<br /> <span className="underline font-bold text-xl">@rohit_mondal</span> </h1>

                <div>
                    <h1 className="font-bold text-lg text-left">Credits</h1>

                    <ol className="footer-credit-list text-zinc-300 dark:text-zinc-600 list-decimal text-left">
                        {creditLinks.map((data) => (
                            <li key={data.redirect}>
                                <Link to={data.redirect}>
                                    {data.title}
                                </Link>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

            <div className="p-2 flex flex-row items-center justify-center rounded-2xl border-2 border-zinc-200 dark:border-slate-700 gap-x-12 w-fit mx-auto">
                <h1 className="text-sm sm:text-base font-bold">Connect w/ me</h1>

                <ul className="flex flex-row gap-x-1 sm:gap-x-3">
                    {socialLinks.map((links: socialLinksType) => (
                        <Link
                            to={links.link}
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