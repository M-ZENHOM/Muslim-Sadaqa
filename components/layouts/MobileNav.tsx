"use client"
import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { cn } from '@/lib/utils'
import { Icons } from '../Icons'
import { buttonVariants } from '../ui/button'
import { Locale } from '@/i18n-config'
import { MobileLink } from '../MobileLink'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { ThemeToggle } from '../ThemeToggle'


function MobileNav({ lang, NavMenu }: { lang: Locale, NavMenu: { Home: string, MorningAzkar: string, EvenAzkar: string, title: string, Masbha: string } }) {
    const [open, setOpen] = React.useState(false)
    return (
        <nav className='fixed top-0 md:hidden w-full bg-muted p-3 flex flex-row-reverse items-center justify-between'>
            <Link href='/'>{siteConfig.title}</Link>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger className={cn(buttonVariants({ variant: "outline" }), { "mx-2": lang === "ar" })}>
                    <Icons.Bars />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader className='py-5 '>
                        <h2 className='font-extrabold uppercase text-xl bg-gradient-to-l from-yellow-500 p-4'>{NavMenu.title}</h2>
                        <ul className='flex flex-col space-y-3 text-lg font-extrabold'>
                            <Link href="/" >{NavMenu.Home}</Link>
                            <Link href="/MorningAzkar" >{NavMenu.MorningAzkar}</Link>
                            <Link href="/EvenAzkar" >{NavMenu.EvenAzkar}</Link>
                            <Link href="/Masbha" >{NavMenu.Masbha}</Link>
                        </ul>
                        <div className='flex flex-col items-baseline bottom-5 absolute'>
                            <ThemeToggle />
                            {/* <LangToggle /> */}
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav