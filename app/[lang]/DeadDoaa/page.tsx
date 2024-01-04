import DoaaByName from '@/components/DoaaByName'
import Wrapper from '@/components/Wrapper'
import { Locale } from '@/i18n-config'
import { getMusliumData } from '@/lib/getMusliumData'
import { getDictionary } from '@/dictionaries'

export async function generateMetadata({ params }: { params: { id: number, lang: Locale } }) {
    return {
        title: `${params.lang === 'ar' ? 'دعاء للمتوفي' : 'Dead Doaa'}`,
    }
}


export default async function page({ params: { lang } }: { params: { lang: Locale } }) {
    const { DeadDoaaPage } = await getDictionary(lang)
    const DeadDoaa = await getMusliumData("DeadDoaa", lang)
    return (
        <Wrapper className='py-20'>
            <h2 className='text-2xl md:text-5xl font-extrabold  py-10 '> {DeadDoaaPage.Title}</h2>
            <DoaaByName DeadDoaaPage={DeadDoaaPage} DeadDoaa={DeadDoaa} />
        </Wrapper>
    )
}
