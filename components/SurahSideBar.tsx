"use client"
import React, { FC } from 'react'
import { Card } from './ui/card'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import Image from 'next/image'
import QuranImg from '../public/Quran2.png'
import { QuranData } from '@/types'
import Link from 'next/link'
import SheikhSelect from './SheikhSelect'
import { Locale } from '@/i18n-config'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import AudioPlayer from './AudioPlayer'

interface SurahSideBarProps {
    Surah: {
        data: QuranData
    }
    lang: Locale
    surahNumber: number
    SurahPage: {
        surahBtn: string,
        surahBtnTwo: string,
        Ayahs: string
        SurahAudio: string
    }
    reciters: {
        reciter_id: string,
        name: {
            en: string,
            ar: string
        },
        type: {
            en: string,
            ar: string
        },
        poster: string
    }[]
}

const SurahSideBar: FC<SurahSideBarProps> = ({ Surah, lang, SurahPage, surahNumber, reciters }) => {
    const [reciter, setReciter] = useLocalStorage("reciter", 'ar.alafasy')
    return (
        <Card className='flex flex-col items-start  h-fit lg:h-[89vh] w-full lg:w-[300px] p-8 my-5 border border-primary/50 rounded-lg  bg-muted/25 bg-gradient-to-tr from-primary/25 to-50% '>
            <Image src={QuranImg} width={200} height={200} priority alt='Quran img' className='hidden lg:block' />
            <div className='flex flex-col space-y-5 font-extrabold w-full'>
                <h2>{lang === "ar" ? Surah.data?.name : Surah.data?.englishName} </h2>
                {lang === "en" && <h4>{Surah.data?.englishNameTranslation}</h4>}
                <span>{Surah.data?.numberOfAyahs} {SurahPage.Ayahs}</span>
                <span>{lang === "ar" ? Surah.data?.revelationType === "Medinan" ? "مدنيه" : "مكيه" : Surah.data?.revelationType}</span>
                {/* <Link className={cn(buttonVariants({ variant: "default" }), { 'pointer-events-none opacity-50': Surah.data.number === 114 })} href={{ pathname: `/${lang}/surah/${Surah.data.number + 1}` }} >{SurahPage.surahBtn}</Link>
                <Link className={cn(buttonVariants({ variant: "default" }), { 'pointer-events-none opacity-50': Surah.data.number === 1 })} href={{ pathname: `/${lang}/surah/${Surah.data.number - 1}` }} >{SurahPage.surahBtnTwo}</Link> */}
            </div>
            <div className='flex flex-col gap-4 w-full rounded-lg  my-5'>
                <h2>{SurahPage.SurahAudio}</h2>
                <AudioPlayer src={`https://cdn.islamic.network/quran/audio-surah/128/${reciter}/${surahNumber}.mp3`} autoPlay={false} />
            </div>
            <SheikhSelect reciters={reciters} lang={lang} reciter={reciter} setReciter={setReciter} />
        </Card>
    )
}

export default SurahSideBar