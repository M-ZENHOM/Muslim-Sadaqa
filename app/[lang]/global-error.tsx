'use client'

export default function Error({ error, reset, }: { error: Error & { digest?: string }, reset: () => void }) {
    console.error(error.message);
    return (
        <div className='w-full h-full flex flex-col justify-center items-center space-y-5 absolute left-0 '>
            <div className='w-full h-full bg-gradient-to-br from-primary/25 to-60% absolute ' />
            <h2 className="text-5xl">Some thing went wrong!</h2>
            <p className='w-full max-w-2xl text-center text-xl text-muted-foreground'>There is a problem Try again later</p>
        </div>
    )
}