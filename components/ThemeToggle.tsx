"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import { Icons } from "./Icons"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    return (
        <div className="space-y-4">
            <Tabs defaultValue={theme} className="w-full">
                <TabsList className="w-full flex justify-between">
                    <TabsTrigger value="system"><Icons.System className="w-full" onClick={() => setTheme("system")} /></TabsTrigger>
                    <TabsTrigger value="dark"><Icons.Moon className="w-full" onClick={() => setTheme("dark")} /></TabsTrigger>
                    <TabsTrigger value="light"><Icons.Sun className="w-full" onClick={() => setTheme("light")} /></TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )
}
