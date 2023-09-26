"use client"
import useStore from '@/hooks/useStore'
import { useSurahStore } from '@/store'
import { Card, CardTitle } from './ui/card'
import { Icons } from './Icons'
import { useRouter } from 'next/navigation'
import { ScrollArea } from './ui/scroll-area'
import Animate from './Animate'


const FavBox = () => {
    const surahStore = useStore(useSurahStore, (state) => state)
    const router = useRouter()
    return (
        <Card className='w-full h-60 p-8 text-center space-y-3 bg-gradient-to-br from-primary/25 to-50%'>
            <CardTitle className='text-muted-foreground'>المفضلة</CardTitle>
            <ScrollArea className="rounded-md p-4 h-full" >
                {surahStore?.surahList.length !== 0 ?
                    <>
                        {surahStore?.surahList.map((surah) => (
                            <Animate key={surah.surahID}>
                                <Card className='w-full p-4 bg-secondary my-2 flex items-center justify-between text-center hover:bg-primary/50'>
                                    <CardTitle className='cursor-pointer text-lg' onClick={() => router.push(`/surah/${surah.surahID}`)}>{surah.title}</CardTitle>
                                    <Icons.Remove className='cursor-pointer hover:scale-125 hover:text-red-500 transition-all duration-300' onClick={() => surahStore.removeFromList(surah.surahID)} />
                                </Card>
                            </Animate>
                        ))}
                    </>
                    : (<div className='space-y-3'>
                        <h2 className='cursor-pointer text-xl'>فارغة</h2>
                        <p className='text-muted-foreground'> ابدأ بأضافة سور القرأن التي تقرأها يوميا لسهولة الوصول اليها كل يوم</p>
                    </div>)}
            </ScrollArea>
        </Card>
    )

}

export default FavBox