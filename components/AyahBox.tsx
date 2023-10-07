import * as React from "react";
import { FC } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Icons } from './Icons'
import Tafsir from './Tafsir'
import Link from 'next/link'
import { SurahType } from '@/types'
import { cn } from '@/lib/utils'


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
}

const AyahBox: FC<AyahBoxProps> = ({ Surah, sur, ayahNum }) => {
    return (
        <Popover modal={false}>
            <PopoverTrigger className={cn('text-2xl p-2 group-hover:text-primary transition-all duration-300 text-center w-full',
                { "text-primary": ayahNum === sur.number })}>
                {sur.numberInSurah === 1 ? Surah.data?.number === 1 ? sur.text : sur.text.slice(39) : sur.text}
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