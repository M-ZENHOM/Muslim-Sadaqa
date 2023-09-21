import Wrapper from '@/components/Wrapper'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function loading() {
    return (
        <Wrapper className='py-20'>
            <Skeleton className='w-[200px] h-4' />
            <div className='flex items-center'>
                <Skeleton className='w-full' />
                <Skeleton className='w-[150px] rounded-lg h-10' />
            </div>
        </Wrapper>
    )
}
