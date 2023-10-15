'use client'

import { Button } from "@/components/ui/button";

export default function Error({ error, reset, }: { error: Error & { digest?: string }, reset: () => void }) {
    console.error(error.message);
    return (
        <div className='w-full h-full flex flex-col justify-center items-center space-y-5 absolute left-0 z-50 '>
            <div className='w-full h-full bg-gradient-to-br from-primary/25 to-60% absolute ' />
            <h2 className="text-5xl">Something went wrong!</h2>
            <Button aria-label='Try again' onClick={() => reset()}>Try again</Button>
        </div>
    )
}