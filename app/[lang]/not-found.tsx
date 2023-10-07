import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from 'lucide-react'
import React from 'react'

export default function NotFound() {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center space-y-5'>
            <div className='w-full h-screen bg-gradient-to-br from-violet-500/25 to-60% absolute ' />
            <h2 className="text-8xl">404</h2>
            <p className='w-full max-w-2xl text-center text-3xl'>We are sorry{","} the page you requested could not be found. Please go back to homepage or contact site owner.</p>
            <Link className={cn(buttonVariants({ variant: "default" }))} aria-label='Go to Home' href="/" >Go to Home</Link>
        </div>
    )
}
