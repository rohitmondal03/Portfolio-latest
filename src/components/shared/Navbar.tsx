import { Link } from "react-router-dom";
import { Menu } from "lucide-react"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import ModeToggle from "../themes/mode-toggle";
import { socialLinks } from "@/lib/personal-data/social-links";



export default function Navbar() {
  return (
    <nav className="py-6 md:mb-10 flex flex-row items-center justify-around md:justify-evenly border-b-2 border-b-gray-500">
      <h1 className="text-3xl xs:text-4xl font-bold">Portfolio</h1>

      <ul className="hidden md:flex md:flex-row md:items-center md:justify-center md:gap-x-4 lg:gap-x-12">
        {socialLinks.map((link) => (
          <Link
            to={link.link}
            className="flex flex-row md:text-sm lg:text-lg md:gap-x-1 lg:gap-x-3 items-center md:hover:scale-110 md:transition-all"
            // md:border-2 lg:border-4 border-slate-500 dark:border-orange-500 md:p-2 lg:px-3 lg:py-2 md:rounded-2xl lg:rounded-3xl
            target="_blank"
            key={link.link}
          >
            <link.icon />
            {link.title}
          </Link>
        ))}
      </ul>

      <div className="flex flex-row items-center gap-x-4 sm:gap-x-10">
        <ModeToggle />

        <Sheet>
          <SheetTrigger asChild>
            <Menu className="cursor-pointer block md:hidden" />
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-4xl">Socials Links</SheetTitle>
            </SheetHeader>

            <div className="mt-10">
              <ul className="flex flex-col items-center justify-center text-xl my-20 gap-y-5 md:gap-y-7">
                {socialLinks.map((links: socialLinksType) => (
                  <Link
                    to={links.link}
                    className="flex flex-row gap-x-4 items-center border-b-2 border-zinc-800 dark:border-zinc-300 hover:scale-110 transition-all"
                    target="_blank"
                    key={links.link}
                  >
                    <links.icon />
                    {links.title}
                  </Link>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}