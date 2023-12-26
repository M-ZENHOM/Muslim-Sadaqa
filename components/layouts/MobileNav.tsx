"use client"
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { cn } from '@/lib/utils'
import { Icons } from '../Icons'
import { buttonVariants } from '../ui/button'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { ThemeToggle } from '../ThemeToggle'
import { usePathname, useRouter } from 'next/navigation'
import LangToggle from '../LangToggle'
import { Locale } from '@/i18n-config'
import { Badge } from '../ui/badge'


function MobileNav({ NavMenu, lang }: { NavMenu: { title: string, href: string, IsNew?: boolean }[], lang: Locale }) {
    const router = useRouter()
    const [open, setOpen] = React.useState(false)
    const pathName = usePathname()
    const handleNavigate = (href: string) => {
        router.push(href)
        setOpen(false)
    }
    return (
        <nav dir={lang === "ar" ? "rtl" : "ltr"} className='fixed top-0 md:hidden w-full bg-muted p-3 flex  items-center justify-between'>
            <Link href='/'>{siteConfig.title}</Link>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger className={cn(buttonVariants({ variant: "outline" }), "mx-2")}>
                    <Icons.Bars aria-label='Bars' />
                </SheetTrigger>
                <SheetContent className='flex flex-col items-start space-y-5 py-16'>
                    <ul className='flex flex-col  items-start space-y-3 text-lg font-extrabold'>
                        {NavMenu.map((link, i) => (
                            <li aria-label={link.title} key={i}>
                                <button aria-label={link.title} onClick={() => handleNavigate(`/${lang}${link.href}`)} key={i} className={cn('bg-gradient-to-tl from-primary/25 to-60% p-2  rounded-lg hover:bg-primary/50 transition-all duration-300', { "flex items-center": link.IsNew, "bg-primary text-primary-foreground": pathName === `/${lang}${link.href}` })} >
                                    {link.title}
                                    {link.IsNew && <Badge className={cn({ "mr-2": lang === "ar", "ml-2": lang === "en" })} variant="new">{lang === 'ar' ? 'جديد' : 'new'}</Badge>}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                    <LangToggle />
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav