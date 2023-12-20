"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import { Icons } from "./Icons"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    return (
        <div className="flex items-center justify-center w-full">
            <Button className={cn("w-full", { "bg-primary text-primary-foreground": theme === "light" })} variant="outline" aria-label="Theme" value="light" onClick={() => setTheme("light")}>
                <Icons.Sun className="w-4 h-4" />
            </Button>
            <Button className={cn("w-full mx-1", { "bg-primary text-primary-foreground": theme === "dark" })} variant="outline" aria-label="Theme" value="dark" onClick={() => setTheme("dark")}>
                <Icons.Moon className="w-4 h-4" />
            </Button>
            <Button className={cn("w-full", { "bg-primary text-primary-foreground": theme === "system" })} variant="outline" aria-label="Theme" value="system" onClick={() => setTheme("system")}>
                <Icons.System className="w-4 h-4" />
            </Button>
            <span className="sr-only">Toggle theme</span>
        </div>
    )
}
