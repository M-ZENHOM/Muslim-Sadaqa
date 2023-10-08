import DoaaByName from '@/components/DoaaByName'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { getDictionary } from '../dictionaries'
import { Locale } from '@/i18n-config'
import { getMusliumData } from '@/lib/getMusliumData'

export default async function page({ params: { lang } }: { params: { lang: Locale } }) {
    const { DeadDoaaPage } = await getDictionary(lang)
    const DeadDoaa = await getMusliumData("DeadDoaa")
    return (
        <Wrapper className='py-20'>
            <h2 className='text-2xl md:text-5xl font-extrabold  py-10 '> {DeadDoaaPage.Title}</h2>
            <DoaaByName DeadDoaaPage={DeadDoaaPage} DeadDoaa={DeadDoaa} />
        </Wrapper>
    )
}
