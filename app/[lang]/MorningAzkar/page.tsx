import Wrapper from '@/components/Wrapper'
import React from 'react'
import axios from 'axios';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/Icons';

interface Zekr {
    zekr: string,
    repeat: number,
    bless: string
}

export default async function page() {
    const res = await axios.get('/api/Azkar');
    const data = JSON.parse(res.data)
    return (
        <Wrapper className='py-20'>
            <h2 className='text-5xl font-extrabold text-center py-10 flex items-center justify-between'>{data.title} <Icons.Sun className='w-14 h-14' /></h2>
            <div className='space-y-3'>
                {data?.content.map((zakr: Zekr) => (
                    <Card key={zakr.repeat} className='p-4 space-y-3 bg-gradient-to-bl from-yellow-500/25 to-60%'>
                        <CardTitle className='leading-9'>{zakr.zekr}</CardTitle>
                        <CardDescription>{zakr.bless}</CardDescription>
                        <CardContent className='flex gap-2 bg-muted py-2 px-4 rounded-lg w-fit'>
                            <h2>عدد المرات</h2>
                            <span>{zakr.repeat}</span>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Wrapper>
    )
}   
