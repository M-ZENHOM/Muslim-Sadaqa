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
        <div key={number} className='flex w-full  max-w-[300px] justify-between items-center p-4 py-6 bg-muted rounded-lg border hover:border-yellow-500 hover:bg-gradient-to-r hover:from-yellow-500/10 group'>
            <Link href={`surah/${number}`} className='flex items-center justify-between space-x-4 w-full'>
                <span className="w-[35px] h-[35px] bg-gray-300 dark:bg-black rounded-full text-center leading-[35px] group-hover:bg-yellow-500">
                    {number}
                </span>
                <span className={cn({ "text-sm": lang === "en" })}>{name}</span>
                <span className={cn("group-hover:text-yellow-500", { "text-sm": lang === "en" })} >{`${numberOfAyahs} آيات`}</span>
            </Link>
            <Icons.Heart onClick={() => surahStore?.addToList(name, number)} className={cn("hover:text-red-500 hover:scale-125 transition-all duration-300 cursor-pointer", { "text-red-500 scale-125": surahStore?.surahList.find((s) => s.surahID === number) }, { "mx-2": lang === "en" })} />
        </div>
    )
}

export default SurhaBox