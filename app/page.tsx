import { Icons } from '@/components/Icons'
import SurhaBox from '@/components/SurhaBox'
import Wrapper from '@/components/Wrapper'
import { getQuran } from '@/lib/getQuran'
import { Card, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import FavBox from '@/components/FavBox'
import { QuranData } from '@/types'
import { getRandomAyah } from '@/lib/getRandomAyah'


export default async function Home() {
  const ayah = await getRandomAyah(Math.floor(Math.random() * 6236))
  const Quran = await getQuran();
  return (
    <Wrapper>
      <Icons.QuranKareem className='w-4/12 mx-auto py-28 md:py-20' />
      <div className='flex flex-wrap md:flex-nowrap gap-4 items-center justify-between'>
        <Card className='w-full h-60  p-8 text-center space-y-3 bg-gradient-to-br from-primary/25 to-50% flex flex-col items-center justify-center'>
          <CardTitle className='text-muted-foreground'>آية اليوم</CardTitle>
          <h2 className='text-lg'>{ayah.data.text}</h2>
        </Card>
        <FavBox />
      </div>
      <div className={cn('grid grid-cols-fluid gap-4 py-4 place-items-center')}>
        {Quran.code !== 200 ? (
          <h2 className='text-red-500 font-extrabold text-center'>{Quran}</h2>
        ) : (
          <>
            {Quran.data.map((q: QuranData) => (
              <SurhaBox key={q.number} number={q.number} name={q.name} numberOfAyahs={q.numberOfAyahs} />
            ))}
          </>
        )}
      </div>
    </Wrapper>
  )
}
