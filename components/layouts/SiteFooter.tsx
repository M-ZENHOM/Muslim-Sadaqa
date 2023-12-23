import React from 'react'
import { Separator } from '../ui/separator'

function SiteFooter() {
    return (
        <footer>
            <Separator />
            <div className='flex flex-col items-center justify-center text-center text-xs md:text-sm bg-gradient-to-tl from-primary/25 to-50% h-20'>
                <p>أتمني أن يكون هذا الموقع صادقه جارية لي ولعائلتي ولكل من يقرأ منه.</p>
            </div>
        </footer>
    )
}

export default SiteFooter