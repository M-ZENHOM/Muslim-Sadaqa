import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import QuranImg from '../../../public/Quran2.png'
import { Card } from '@/components/ui/card';
import { Icons } from '@/components/Icons';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Tafsir from '@/components/Tafsir';
import { getSurah } from '@/lib/getSurah';

export interface SurahType {
    number: number,
    numberOfAyahs: number,
    text: string,
    audio: string,
    audioSecondary: string,
    numberInSurah: number,
    juz: number,
    manzil: number,
    page: number,
    ruku: number,
    hizbQuarter: number,
    sajda: boolean

}[]

export default async function page({ params, searchParams }: { params: { id: number }, searchParams: { [key: string]: string | string[] | undefined } }) {
    const ayahNum = typeof searchParams.ayahNum === 'string' ? Number(searchParams.ayahNum) : 1
    const Surah = await getSurah(params.id);

    return (
        <section className='flex flex-col lg:flex-row gap-4 px-4'>
            <div className='flex flex-col h-full flex-1'>
                <ScrollArea className="w-full h-[80vh] pb-20 pt-5">
                    <Icons.Bismallah className='text-center w-full' />
                    {Surah.data.ayahs.map((sur: SurahType) => (
                        <div key={sur.number} className='flex justify-between items-center w-full p-2 group'>
                            <span className='bg-muted w-12 h-12 rounded-full text-center flex justify-center items-center group-hover:bg-primary  text-lg'>{sur.numberInSurah}</span>
                            <Popover modal={false}>
                                <PopoverTrigger className='text-2xl p-2 group-hover:text-primary transition-all duration-300 text-center w-full'>{sur.numberInSurah === 1 ? Surah.data?.number === 1 ? sur.text : sur.text.slice(39) : sur.text}</PopoverTrigger>
                                <PopoverContent className='flex items-center justify-between w-[100px] text-center '>
                                    <Link href={{ query: { ayahNum: sur.number } }} >
                                        <Icons.Play className='hover:text-primary w-6 h-6' />
                                    </Link>
                                    {/* Refactor Tafsir Dialog Modal Later ... */}
                                    <Tafsir ayahNum={sur.number} ayahText={sur.text} />
                                </PopoverContent>
                            </Popover>
                        </div>
                    ))}
                </ScrollArea>
                <audio src={`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayahNum}.mp3`} autoPlay={ayahNum !== 1} controls className=' w-full h-full min-h-[45px] my-10' />
            </div>
            <Card className='flex flex-col items-start bg-muted h-fit lg:h-[89vh] w-full lg:w-[300px] p-8 '>
                <Image src={QuranImg} width={200} height={200} priority alt='Quran img' className='hidden lg:block' />
                <div className='flex flex-col space-y-5 font-extrabold w-full'>
                    <h2>{Surah.data?.name} </h2>
                    <span>{Surah.data?.numberOfAyahs} آيات</span>
                    <span>{Surah.data?.revelationType === "Medinan" ? "مدنيه" : "مكيه"}</span>
                    <Link className={cn(buttonVariants({ variant: "default" }), { 'pointer-events-none opacity-50': Surah.data.number === 114 })} href={{ pathname: `/surah/${Surah.data.number + 1}` }} >التالي</Link>
                    <Link className={cn(buttonVariants({ variant: "default" }), { 'pointer-events-none opacity-50': Surah.data.number === 1 })} href={{ pathname: `/surah/${Surah.data.number - 1}` }} >السابق</Link>
                </div>
            </Card>
        </section>
    )
}
