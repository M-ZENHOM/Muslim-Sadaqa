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
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'

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
    const [_, copy] = useCopyToClipboard()
    return (
        <Popover modal={false}>
            <PopoverTrigger style={{ fontSize: `${setting?.fontSize}px`, fontWeight: `${setting?.fontStyle}` }} className={cn('text-2xl p-2 group-hover:text-primary transition-all duration-300 text-center w-full',
                { "text-primary": ayahNum === sur.number })}>
                {lang === "ar" ? sur.numberInSurah === 1 ? Surah.data?.number === 1 ? sur.text : sur.text.slice(39) : sur.text : sur.text}
            </PopoverTrigger>
            <PopoverContent className='w-[180px] flex items-center justify-around'>
                <Link href={{ query: { ayahNum: sur.number } }} className='hover:bg-primary hover:rounded-sm hover:text-primary-foreground ' >
                    <Icons.Play className='w-6 h-6 p-1' />
                </Link>
                {/* Refactor Tafsir Dialog Modal Later ... */}
                <Tafsir ayahNum={sur.number} ayahText={sur.text} lang={lang} />
                <Icons.Copy onClick={() => copy(sur.text)} className='w-6 h-6 cursor-pointer hover:bg-primary hover:rounded-sm hover:text-primary-foreground p-1' />
            </PopoverContent>
        </Popover>
    )
}

export default AyahBox