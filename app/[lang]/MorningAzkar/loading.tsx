import Wrapper from '@/components/Wrapper'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

function loading() {
    return (
        <Wrapper className='py-20'>
            <h2 className='text-5xl font-extrabold text-center py-10 flex items-center justify-between'> <Skeleton className="w-[100px] h-[20px] rounded-md " />  <Skeleton className="w-[50px] h-[50px] rounded-full " /></h2>
            <div className='space-y-3'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((z, i) => (
                    <div key={i} className='p-4 space-y-3 bg-gradient-to-bl from-yellow-500/25 to-60%'>
                        <Skeleton className="w-full h-[20px] rounded-md " />
                        <Skeleton className="w-[200px] h-[20px] rounded-md " />
                        <Skeleton className="w-[150px] h-[20px] rounded-md " />
                    </div>
                ))}
            </div>
        </Wrapper>
    )
}

export default loading