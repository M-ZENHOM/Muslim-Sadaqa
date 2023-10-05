import DoaaByName from '@/components/DoaaByName'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { getDictionary } from '../dictionaries'
import { Locale } from '@/i18n-config'

export default async function page({ params: { lang } }: { params: { lang: Locale } }) {
    const { DeadDoaaPage } = await getDictionary(lang)
    return (
        <Wrapper className='py-20'>
            <h2 className='text-2xl md:text-5xl font-extrabold  py-10 '> {DeadDoaaPage.Title}</h2>
            <DoaaByName DeadDoaaPage={DeadDoaaPage} />
        </Wrapper>
    )
}
