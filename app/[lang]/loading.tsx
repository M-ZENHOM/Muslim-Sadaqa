import Wrapper from '@/components/Wrapper'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function loading() {
    return (
        <Wrapper>
            <Skeleton className="w-4/12 mx-auto py-28 md:py-20 my-20" />
            <div className='flex flex-wrap md:flex-nowrap gap-4 items-center justify-between'>
                <div className='w-full h-60  p-8 text-center space-y-3 bg-gradient-to-br from-primary/25 to-50% flex flex-col items-center justify-center'>
                    <Skeleton className="w-[200px] h-[30px] rounded-md" />
                    <Skeleton className="w-[100px] h-[30px] rounded-md" />
                </div>
                <div className='w-full h-60  p-8 text-center space-y-3 bg-gradient-to-br from-primary/25 to-50% flex flex-col items-center justify-center'>
                    <Skeleton className="w-[200px] h-[30px] rounded-md" />
                    <Skeleton className="w-[100px] h-[30px] rounded-md" />
                </div>
            </div>
            <div className={'grid grid-cols-fluid gap-4 py-4 place-items-center'}>
                {Array.from({ length: 20 }).map((q, i) => (
                    <Skeleton key={i} className="w-[200px] h-[80px] rounded-md" />
                ))}
            </div>
        </Wrapper>

    )
}
