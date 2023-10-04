"use client"
import Image from 'next/image'
import React from 'react'
import MsbhaImg from '../public/Masbha/1.png'
import { cn } from '@/lib/utils'

const AzkarCounter = ({ className }: { className?: string }) => {
    const [count, setCount] = React.useState(0)
    return (
        <div className={cn('relative flex justify-center items-center w-full h-full', className)}>
            <Image className='relative' src={MsbhaImg} width={100} height={100} priority alt='Masbha' />
            <span className='absolute text-xl top-[18%] blur-[1px]'>{count}</span>
            <button onClick={() => setCount((prev) => prev + 1)} className='absolute top-[48%] translate-y-[37%] bg-black w-10 h-10 rounded-full' />
            <button onClick={() => setCount(0)} className='absolute top-[47%] translate-y-[37%] right-[32%] bg-black w-4 h-4 rounded-full' />
        </div>
    )
}

export default AzkarCounter