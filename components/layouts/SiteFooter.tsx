import Link from 'next/link'
import React from 'react'
import { Separator } from '../ui/separator'

function SiteFooter() {
    return (
        <>
            <Separator />
            <footer className='flex flex-col items-center justify-center text-center text-xs md:text-sm bg-gradient-to-tl from-yellow-500/25 to-50% h-20'>
                <p>Quran Website built by <Link className='border-b border-white' target='_blank' href="https://mahmoud-zenhom.tk/">Mahmoud Zenhom</Link></p>
            </footer>
        </>
    )
}

export default SiteFooter