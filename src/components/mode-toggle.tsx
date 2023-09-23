import { useEffect, useState } from "react";
import { useTheme } from "next-themes"

import { Moon, SunIcon } from "lucide-react";


export default function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const [loaded, setLoaded] = useState<boolean>(false)


    useEffect(() => {
        setLoaded(true);
    }, [])

    if (!loaded) return null;


    return (
        <>
            {theme === "dark" ? (
                <SunIcon
                    onClick={() => setTheme("light")}
                    className="cursor-pointer scale-110"
                />
            ) : (
                <Moon
                    onClick={() => setTheme("dark")}
                    className="cursor-pointer scale-110"
                />
            )}
        </>
    )
}