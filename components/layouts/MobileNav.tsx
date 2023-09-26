"use client"
import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet'
import { cn } from '@/lib/utils'
import { Icons } from '../Icons'
import { buttonVariants } from '../ui/button'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { ThemeToggle } from '../ThemeToggle'
import { useRouter } from 'next/navigation'


function MobileNav() {
    const router = useRouter()
    const [open, setOpen] = React.useState(false)
    const handleNavigate = (href: string) => {
        router.push(href)
        setOpen(false)
    }
    return (
        <nav className='fixed top-0 md:hidden w-full bg-muted p-3 flex flex-row-reverse items-center justify-between'>
            <Link href='/'>{siteConfig.title}</Link>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger className={cn(buttonVariants({ variant: "outline" }), "mx-2")}>
                    <Icons.Bars aria-label='Bars' />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader className='py-5 '>
                        <ul className='flex flex-col space-y-3 text-lg font-extrabold'>
                            {siteConfig.NavMenu.map((link, i) => (
                                <button onClick={() => handleNavigate(link.href)} key={i} className='bg-gradient-to-tl from-primary/25 to-60% p-2 rounded-lg hover:bg-primary/50 transition-all duration-300' >{link.title}</button>
                            ))}
                        </ul>
                        <div className='flex flex-col items-baseline bottom-5 absolute'>
                            <ThemeToggle />
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav