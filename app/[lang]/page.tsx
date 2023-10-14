import { Icons } from '@/components/Icons'
import SurhaBox from '@/components/SurhaBox'
import Wrapper from '@/components/Wrapper'
import { Card, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import FavBox from '@/components/FavBox'
import { getRandomAyah } from '@/lib/getRandomAyah'
import { Locale } from '@/i18n-config'
import { getDictionary } from './dictionaries'
import { type QuranData } from '@/types'
import { promises as fs } from 'fs';


export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const ayah = await getRandomAyah(Math.floor(Math.random() * 6236))
  const { IndexPage } = await getDictionary(lang)
  const file = await fs.readFile(process.cwd() + '/config/QuranFahras.json', 'utf8');
  const QuranFahras = JSON.parse(file);
  return (
    <Wrapper>
      <Icons.QuranKareem className='w-4/12 mx-auto py-28 md:py-20' />
      <div className='flex flex-wrap md:flex-nowrap gap-4 items-center justify-between'>
        <Card className='w-full h-60  p-8 text-center space-y-3 bg-gradient-to-br from-primary/25 to-50% flex flex-col items-center justify-center'>
          <CardTitle className='text-muted-foreground'>{IndexPage.AyahBoxTitle}</CardTitle>
          <h2 className='text-lg'>{ayah.data.text}</h2>
        </Card>
        <FavBox IndexPage={IndexPage} />
      </div>
      <div className={cn('grid grid-cols-fluid gap-4 py-4 place-items-center')}>
        {QuranFahras.map((q: QuranData) => (
          <SurhaBox key={q.number} number={q.number} name={q.name} numberOfAyahs={q.numberOfAyahs} englishName={q.englishName} lang={lang} />
        ))}
      </div>
    </Wrapper>
  )
}
