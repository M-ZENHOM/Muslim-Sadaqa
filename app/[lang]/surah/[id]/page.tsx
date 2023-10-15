import { ScrollArea } from '@/components/ui/scroll-area';
import { Icons } from '@/components/Icons';
import React from 'react'
import { Locale } from '@/i18n-config';
import { SurahType } from '@/types';
import SurahSideBar from '@/components/SurahSideBar';
import AyahBox from '@/components/AyahBox';
import AudioPlayer from '@/components/AudioPlayer';
import { getMusliumData, getSurah } from '@/lib/getMusliumData';
import { getDictionary } from '@/dictionaries';


export default async function page({ params, searchParams }: { params: { id: number, lang: Locale }, searchParams: { [key: string]: string | string[] | undefined } }) {
    const ayahNum = typeof searchParams.ayahNum === 'string' ? Number(searchParams.ayahNum) : 0
    const Surah = await getSurah(params.id);
    const { SurahPage } = await getDictionary(params.lang)
    const reciters = await getMusliumData("reciters");


    return (
        <section className='flex flex-col lg:flex-row gap-4 px-4'>
            <div className='flex flex-col h-full flex-1'>
                <ScrollArea className="w-full h-[80vh] pb-20 pt-5">
                    <Icons.Bismallah className='text-center w-full' />
                    {Surah?.data?.ayahs.map((sur: SurahType) => (
                        <div key={sur.number} className='flex justify-between items-center w-full p-2 group'>
                            <span className='bg-muted w-12 h-12 rounded-full text-center flex justify-center items-center group-hover:bg-primary  text-lg'>{sur.numberInSurah}</span>
                            <AyahBox sur={sur} Surah={Surah} ayahNum={ayahNum} />
                        </div>
                    ))}
                </ScrollArea>
                <AudioPlayer src={`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayahNum}.mp3`} autoPlay={true} ayahNum={ayahNum} />
            </div>
            <SurahSideBar lang={params.lang} Surah={Surah} SurahPage={SurahPage} surahNumber={params.id} reciters={reciters} />
        </section>
    )
}
