"use client"
import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'

const Masbaha = ({ className }: { className?: string }) => {
    const [count, setCount] = React.useState(0)
    return (
        <div className={cn('relative flex justify-center items-center w-[400px] h-[400px]', className)}>
            <Image className='relative' src='/Masbha.png' width={400} height={400} priority alt='Masbha' />
            <span className='absolute text-5xl md:text-6xl top-[20%] md:top-[16%] blur-[1px]'>{count}</span>
            <button onClick={() => setCount((prev) => prev + 1)} className='absolute top-[50%] translate-y-[40%] md:translate-y-[50%] bg-transparent w-32 h-32 rounded-full' />
            <button onClick={() => setCount(0)} className='absolute top-[50%] translate-y-[40%] right-[20%] bg-transparent w-10 h-10 rounded-full' />
        </div>
    )
}

export default Masbaha