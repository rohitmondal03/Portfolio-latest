import Link from "next/link";
import { Menu } from "lucide-react"

import ModeToggle from "./mode-toggle";
import { socialLinks } from "./data/social-links";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";



export default function Navbar() {
    return (
        <nav className="py-8 flex flex-row items-center justify-around">
            <h1 className="text-3xl xs:text-4xl font-bold">Portfolio</h1>

            <div className="flex flex-row items-center gap-x-6 xs:gap-x-10">
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
                            {/* <h1 className="text-lg">Social links</h1> */}

                            <ul className="flex flex-col items-center justify-center text-xl my-20 gap-y-5 md:gap-y-7">
                                {socialLinks.map((links: socialLinksType) => (
                                    <Link
                                        href={links.link}
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