"use client"
import useStore from '@/hooks/useStore'
import { useSurahStore } from '@/store'
import { FC } from 'react'
import { Card, CardTitle } from './ui/card'
import { Icons } from './Icons'
import { useRouter } from 'next/navigation'

interface FavBoxProps {

}

const FavBox: FC<FavBoxProps> = ({ }) => {
    const surahStore = useStore(useSurahStore, (state) => state)
    const router = useRouter()
    return (
        <>
            {surahStore?.surahList.map((surah) => (
                <Card key={surah.surahID} className='w-full p-3 bg-yellow-500/25 my-2 flex items-center justify-between text-center '>
                    <CardTitle className='cursor-pointer text-lg' onClick={() => router.push(`/surah/${surah.surahID}`)}>{surah.title}</CardTitle>
                    <Icons.Remove className='cursor-pointer hover:scale-125 hover:text-red-500 transition-all duration-300' onClick={() => surahStore.removeFromList(surah.surahID)} />
                </Card>
            ))}
        </>
    )

}

export default FavBox