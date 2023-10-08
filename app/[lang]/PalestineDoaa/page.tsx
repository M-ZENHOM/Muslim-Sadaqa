import { Icons } from '@/components/Icons'
import Wrapper from '@/components/Wrapper'
import { Card, CardTitle } from '@/components/ui/card'
import { Locale } from '@/i18n-config'
import React from 'react'
import { getDictionary } from '../dictionaries'
import { getMusliumData } from '@/lib/getMusliumData'
import { PalestineDoaaType } from '@/types'

export default async function page({ params: { lang } }: { params: { lang: Locale } }) {
    const { PalestineDoaaPage } = await getDictionary(lang)
    const PalestineDoaa = await getMusliumData("PalestineDoaa")
    return (
        <Wrapper className='space-y-4 mx-auto py-20  '>
            <h2 className='text-2xl md:text-5xl font-extrabold text-center py-4 flex items-center justify-between'> {PalestineDoaaPage.Title} <Icons.Doaa className='w-14 h-14' /></h2>
            {PalestineDoaa.map((doaa: PalestineDoaaType, i: number) => (
                <Card key={i} className='p-4 space-y-3 bg-gradient-to-bl from-primary/25 to-60%  w-full'>
                    <CardTitle className='leading-10 text-md md:text-xl tracking-wider'>{lang === 'ar' ? doaa.arabic : doaa.english}</CardTitle>
                </Card>
            ))}
        </Wrapper>
    )
}
