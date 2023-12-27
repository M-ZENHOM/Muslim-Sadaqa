import React from 'react'
import { Separator } from '../ui/separator'

function SiteFooter() {
    return (
        <>
            <Separator />
            <footer className='flex w-full h-[10vh] items-center justify-center text-center text-xs md:text-sm bg-gradient-to-tl from-primary/25 to-50% px-6 ' >
                <p>أتمني أن يكون هذا الموقع صادقه جارية لي ولعائلتي ولكل من يقرأ منه.</p>
            </footer>
        </>
    )
}

export default SiteFooter