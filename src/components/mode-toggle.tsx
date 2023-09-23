import { Moon, Sun, Computer } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"


export default function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem className="cursor-cell" onClick={() => setTheme("light")}>
                    <Sun className="mr-3 scale-75" />
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-cell" onClick={() => setTheme("dark")}>
                    <Moon className="mr-3 scale-75" />
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-cell" onClick={() => setTheme("system")}>
                    <Computer className="mr-3 scale-75" />
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
