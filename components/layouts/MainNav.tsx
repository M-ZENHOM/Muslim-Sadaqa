import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from '../ThemeToggle'
import { siteConfig } from '@/config/site'


function MainNav() {
    return (
        <nav className='w-60 h-screen p-6 space-y-5 hidden md:flex md:flex-col'>
            <ul className='flex flex-col space-y-3 text-lg font-extrabold border border-primary/50 rounded-lg p-6 bg-muted/25 bg-gradient-to-tr from-primary/25 to-50%'>
                {siteConfig.NavMenu.map((link, i) => (
                    <Link key={i} className='p-2 rounded-lg hover:bg-primary/50 transition-all duration-300' href={link.href} >{link.title}</Link>
                ))}
            </ul>
            <div className='flex w-full border border-primary/50 rounded-lg p-6 bg-muted/25 bg-gradient-to-tr from-primary/25 to-50%'>
                <ThemeToggle />
            </div>
        </nav>
    )
}

export default MainNav