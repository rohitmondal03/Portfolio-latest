import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion"

import { socialLinks } from "../../self_data/social-links";
import { creditLinks } from "../../self_data/tect-stack-credit-data"
import classNames from "classnames";


export default function Footer() {
  const mediaQuery = useMediaQuery(`(max-width: 900px)`);

  return (
    <motion.footer
      className={classNames({
        "justify-between": mediaQuery,
        "flex flex-col gap-y-5 px-4 sm:px-10 md:px-0 py-6 bg-black text-white dark:bg-zinc-100 dark:text-black text-center": true,
      })}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileInView={{ opacity: 1 }}
    >

      <div className="flex flex-col sm:flex-row gap-y-3 items-center justify-between md:justify-around">
        <h1 className="text-lg">Developed with ❣️<br /> <span className="underline font-bold text-xl">@rohit_mondal</span> </h1>

        <div>
          <h1 className="font-bold text-lg text-left">Credits</h1>

          <ul className="footer-credit-list text-zinc-300 dark:text-zinc-600 list-decimal text-left">
            {creditLinks.map((data) => (
              <li key={data.redirect}>
                <Link to={data.redirect}>
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-2 flex flex-row items-center justify-center rounded-2xl border-2 border-zinc-200 dark:border-slate-700 gap-x-6 sm:gap-x-12 w-fit mx-auto">
        <h1 className="text-sm sm:text-base font-bold">Connect w/ me</h1>

        <ul className="flex flex-row gap-x-1 sm:gap-x-3">
          {socialLinks.map((links: socialLinksType) => (
            <Link
              to={links.link}
              target="_blank"
              className="scale-90 sm:scale-100 md:hover:scale-125 md:hover:rotate-[360deg] md:duration-500 md:transition-all"
              key={links.link}
            >
              <links.icon className="h-5" />
            </Link>
          ))}
        </ul>
      </div>
    </motion.footer>
  )
}