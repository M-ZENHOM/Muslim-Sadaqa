import { Icons } from '@/components/Icons'
import SurhaBox from '@/components/SurhaBox'
import Wrapper from '@/components/Wrapper'
import { cn } from '@/lib/utils'
import FavBox from '@/components/FavBox'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/dictionaries'
import { getRandomAyah } from '@/lib/getMusliumData'
import { QuranData } from '@/types'
import { getQuranSurahs } from '@/lib/getQuranSurahs'
import TodayAyah from '@/components/TodayAyah'


export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  return {
    title: `${params.lang === 'ar' ? '  القران الكريم - مسلم صدقة' : 'Quran Kareem - Muslism Sadqa'}`,
  }
}


export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const ayah = await getRandomAyah()
  const { IndexPage } = await getDictionary(lang)
  const QuranSurahs = await getQuranSurahs();
  return (
    <Wrapper>
      <Icons.QuranKareem className='w-4/12 mx-auto py-28 md:py-20' />
      <div className='flex flex-wrap md:flex-nowrap gap-4 items-center justify-between'>
        <TodayAyah AyahBoxTitle={IndexPage.AyahBoxTitle} Ayah={ayah.data.text} lang={lang} />
        <FavBox IndexPage={IndexPage} lang={lang} />
      </div>
      {QuranSurahs?.code === 200 ? (
        <div className={cn('grid grid-cols-fluid gap-4 py-4 place-items-center')}>
          {QuranSurahs.data.map((q: QuranData) => (
            <SurhaBox key={q.number} {...q} lang={lang} />
          ))}
        </div>
      ) : (
        <p className='w-full text-center text-xl py-20 text-red-600'>*{lang === 'ar' ? 'فى مشكله في السرفر يا كينج تعالى كمان شوية ' : 'Something went wrong, try again later!'}</p>
      )}
    </Wrapper>
  )
}
