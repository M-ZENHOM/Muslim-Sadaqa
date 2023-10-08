import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from '../ThemeToggle'
import { Locale } from '@/i18n-config'
import LangToggle from '../LangToggle'
import { cn } from '@/lib/utils'


function MainNav({ lang, NavMenu }: { lang: Locale, NavMenu: { title: string, href: string, IsNew: boolean }[] }) {
    return (
        <nav className='w-60 h-screen p-6 space-y-5 hidden md:flex md:flex-col'>
            <ul className='flex flex-col space-y-3 text-lg font-extrabold border border-primary/50 rounded-lg p-6 bg-muted/25 bg-gradient-to-tr from-primary/25 to-50%'>
                {NavMenu.map((link, i) => (
                    <Link key={i} className={cn('p-2 rounded-lg hover:bg-primary/50 transition-all duration-300', { "bg-green-500/50": link.IsNew })} href={link.href}>{link.title}</Link>
                ))}
            </ul>
            <div className='flex flex-col gap-4 w-full border border-primary/50 rounded-lg p-6 bg-muted/25 bg-gradient-to-tr from-primary/25 to-50%'>
                <ThemeToggle />

            </div>
            <div className='flex flex-col gap-4 w-full border border-primary/50 rounded-lg p-6 bg-muted/25 bg-gradient-to-tr from-primary/25 to-50%'>
                <LangToggle />
            </div>
        </nav>
    )
}

export default MainNav