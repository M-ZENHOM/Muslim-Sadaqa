"use client"
import { FC } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Icons } from './Icons'
import Tafsir from './Tafsir'
import Link from 'next/link'
import { SurahType } from '@/types'
import { cn } from '@/lib/utils'
import { useSettings } from '@/store'
import useStore from '@/hooks/useStore'

interface AyahBoxProps {
    sur: {
        text: string,
        number: number
        numberInSurah: number
    }
    Surah: {
        data: SurahType
    }
    ayahNum: number
    lang: string
}

const AyahBox: FC<AyahBoxProps> = ({ Surah, sur, ayahNum, lang }) => {
    const setting = useStore(useSettings, (state) => state.settings[0])

    return (
        <Popover modal={false}>
            <PopoverTrigger style={{ fontSize: `${setting?.fontSize}px`, fontWeight: `${setting?.fontStyle}` }} className={cn('text-2xl p-2 group-hover:text-primary transition-all duration-300 text-center w-full',
                { "text-primary": ayahNum === sur.number })}>
                {lang === "ar" ? sur.numberInSurah === 1 ? Surah.data?.number === 1 ? sur.text : sur.text.slice(39) : sur.text : sur.text}
            </PopoverTrigger>
            <PopoverContent className='flex items-center justify-between w-[100px] text-center '>
                <Link href={{ query: { ayahNum: sur.number } }} >
                    <Icons.Play className='hover:text-primary w-6 h-6' />
                </Link>
                {/* Refactor Tafsir Dialog Modal Later ... */}
                <Tafsir ayahNum={sur.number} ayahText={sur.text} />
            </PopoverContent>
        </Popover>
    )
}

export default AyahBox