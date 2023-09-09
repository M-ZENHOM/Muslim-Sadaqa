import Wrapper from '@/components/Wrapper';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getSurah } from '@/lib/getQuran';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import QuranImg from '../../../../public/Quran2.png'
import { Card } from '@/components/ui/card';
import { Icons } from '@/components/Icons';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getDictionary } from '@/lib/dictionaries';
import { Locale } from '@/i18n-config';

interface SurahType {
    number: number,
    numberOfAyahs: number,
    text: string,
    audio: string,
    numberInSurah: number,
    juz: number,
    manzil: number,
    page: number,
    ruku: number,
    hizbQuarter: number,
    sajda: boolean

}[]

export default async function page({ params, searchParams, params: { lang } }: { params: { id: number, lang: Locale }, searchParams: { [key: string]: string | string[] | undefined } }) {
    const ayahNum = typeof searchParams.ayahNum === 'string' ? Number(searchParams.ayahNum) : 1
    const Surah = await getSurah(params.id);
    const { SurahPage } = await getDictionary(lang)

    return (
        <Wrapper >

            <ScrollArea className="w-full h-[85vh] pb-20 pt-5">
                <Icons.Bismallah className='text-center w-full' />
                {Surah.data.ayahs.map((sur: SurahType) => (
                    <div key={sur.number} className='flex justify-between items-center w-full p-2 group'>
                        <span className='bg-muted w-12 h-12 rounded-full text-center flex justify-center items-center group-hover:bg-yellow-500  text-lg'>{sur.numberInSurah}</span>
                        <Link href={{ pathname: `/surah/${Surah.data.number}`, query: { ayahNum: sur.number } }} className='text-2xl  p-2  group-hover:text-yellow-500 transition-all duration-300 text-center w-full'>
                            {sur.numberInSurah === 1 ? Surah.data?.number === 1 ? sur.text : sur.text.slice(39) : sur.text}
                        </Link>
                    </div>
                ))}
            </ScrollArea>
            <audio src={`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayahNum}.mp3`} autoPlay={ayahNum === 1 ? false : true} controls className=' w-full h-full min-h-[45px] my-10' />
            <Card className='flex flex-col items-start md:items-center md:flex-col p-8 md:absolute md:left-4 md:top-20 md:space-y-10 md:h-[80vh] bg-muted   '>
                <Image src={QuranImg} width={200} height={200} priority alt='Quran img' className='hidden md:block' />
                <div className='flex flex-col space-y-5 font-extrabold w-full'>
                    <h2>{lang === "ar" ? Surah.data?.name : Surah.data?.englishName} </h2>
                    {lang === "en" && <h4>{Surah.data?.englishNameTranslation}</h4>}
                    <span>{Surah.data?.numberOfAyahs} {SurahPage.Ayahs}</span>
                    <span>{lang === "ar" ? Surah.data?.revelationType === "Medinan" ? "مدنيه" : "مكيه" : Surah.data?.revelationType}</span>
                    <Link className={cn(buttonVariants({ variant: "default" }), { 'pointer-events-none opacity-50': Surah.data.number === 114 })} href={{ pathname: `/surah/${Surah.data.number + 1}` }} >{SurahPage.surahBtn}</Link>
                    <Link className={cn(buttonVariants({ variant: "default" }), { 'pointer-events-none opacity-50': Surah.data.number === 1 })} href={{ pathname: `/surah/${Surah.data.number - 1}` }} >{SurahPage.surahBtnTwo}</Link>
                </div>
            </Card>
        </Wrapper>
    )
}
