"use client"
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from '../ThemeToggle'
import LangToggle from '../LangToggle'
import { cn } from '@/lib/utils'
import { Locale } from '@/i18n-config'
import { Badge } from '../ui/badge'
import { usePathname } from 'next/navigation'
import Share from '../Share'


function MainNav({ NavMenu, lang }: { NavMenu: { title: string, href: string, IsNew?: boolean }[], lang: Locale }) {
    const pathName = usePathname()
    return (
        <nav className='w-[300px] min-h-screen p-6 space-y-5 hidden md:flex md:flex-col'>
            <ul className='flex flex-col space-y-3 text-lg font-extrabold border border-primary/50 rounded-lg p-6 bg-muted/25 bg-gradient-to-tr from-primary/25 to-50%'>
                {NavMenu.map((link, i) => (
                    <Link aria-label={link.title} key={i} className={cn('px-2 py-0.5 rounded-lg flex items-center transition-all duration-300 hover:underline hover:underline-offset-2 ', { "bg-primary text-primary-foreground": pathName === `/${lang}${link.href}` })} href={`/${lang}${link.href}`}>
                        {link.title} {link.IsNew && <Badge className={cn({ "mr-2": lang === "ar", "ml-2": lang === "en" })} variant="new">{lang === 'ar' ? 'جديد' : 'new'}</Badge>}
                    </Link>
                ))}
            </ul>
            <div className='flex flex-col gap-4 w-full border border-primary/50 rounded-lg p-6 bg-muted/25 bg-gradient-to-tr from-primary/25 to-50%'>
                <ThemeToggle />
            </div>
            <div className='flex flex-col gap-4 w-full border border-primary/50 rounded-lg p-6 bg-muted/25 bg-gradient-to-tr from-primary/25 to-50%'>
                <LangToggle />
            </div>
            <div className='w-full border border-primary/50 rounded-lg p-6 bg-muted/25 bg-gradient-to-tr from-primary/25 to-50%'>
                <Share lang={lang} />
            </div>
        </nav>
    )
}

export default MainNav