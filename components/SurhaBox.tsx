"use client"
import { Locale } from '@/i18n-config'
import Link from 'next/link'
import { FC } from 'react'
import { Icons } from './Icons'
import useStore from '@/hooks/useStore'
import { useSurahStore } from '@/store'
import { cn } from '@/lib/utils'

interface SurhaBoxProps {
    number: number,
    name: string,
    numberOfAyahs: number,
    englishName: string,
    lang: Locale
}

const SurhaBox: FC<SurhaBoxProps> = ({ number, name, numberOfAyahs, englishName, lang }) => {
    const surahStore = useStore(useSurahStore, (state) => state)
    return (
        <div key={number} className='flex w-full  max-w-[300px] justify-between items-center p-4 py-6 bg-muted rounded-lg border hover:border-primary hover:bg-gradient-to-r hover:from-primary/10 group'>
            <Link href={`surah/${number}`} className='flex items-center justify-between space-x-4 w-full'>
                <span className="w-[35px] h-[35px] bg-gray-300 dark:bg-black rounded-full text-center leading-[35px] group-hover:bg-primary">
                    {number}
                </span>
                <span className={cn({ "text-sm": lang === "en" })}>{lang === "ar" ? `سورة ${name} ` : englishName}</span>
                <span className={cn("group-hover:text-primary", { "text-sm": lang === "en" })} >{lang === "ar" ? `${numberOfAyahs} آيات` : `${numberOfAyahs} Ayahs`}</span>
            </Link>
            {surahStore?.surahList.find((s) => s.surahID === number) ? <Icons.FilledHeart onClick={() => surahStore?.toggleSurah(name, number)} className='w-7 h-7 cursor-pointer' /> : (
                <Icons.Heart onClick={() => surahStore?.toggleSurah(name, number)} className={cn("w-7 h-7 hover:scale-125 transition-all duration-300 cursor-pointer", { "mx-2": lang === "en" })} />
            )}
        </div>
    )
}

export default SurhaBox