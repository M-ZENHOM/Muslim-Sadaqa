import DoaaByName from '@/components/DoaaByName'
import Wrapper from '@/components/Wrapper'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function page() {
    return (
        <Wrapper className='py-20'>
            <h2 className='text-2xl md:text-5xl font-extrabold  py-10 '>دعاء للمتوفي بأسمه</h2>
            <DoaaByName />
        </Wrapper>
    )
}
