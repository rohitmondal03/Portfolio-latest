import { Link } from "react-router-dom";
import { Menu } from "lucide-react"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import ModeToggle from "./mode-toggle";
import { socialLinks } from "./data/social-links";



export default function Navbar() {
    return (
        <nav className="py-8 flex flex-row items-center justify-around">
            <h1 className="text-3xl xs:text-4xl font-bold">Portfolio</h1>

            <div className="flex flex-row items-center gap-x-4 sm:gap-x-10">
                <ModeToggle />

                <Sheet>
                    <SheetTrigger asChild>
                        <Menu className="cursor-pointer" />
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