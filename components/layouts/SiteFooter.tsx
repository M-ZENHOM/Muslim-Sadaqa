import Link from 'next/link'
import React from 'react'
import { Separator } from '../ui/separator'

function SiteFooter() {
    return (
        <>
            <Separator />
            <footer className='flex flex-col items-center justify-center text-center text-xs md:text-sm bg-gradient-to-tl from-primary/25 to-50% h-20'>
                <p>Built by <Link className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-black dark:to-white' target='_blank' href="https://mahmoud-zenhom.tk/"> Mahmoud Zenhom</Link></p>
            </footer>
        </>
    )
}

export default SiteFooter