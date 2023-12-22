"use client"
import React from 'react'
import AudioPlayer from './AudioPlayer'
import { useSettings } from '@/store'
import useStore from '@/hooks/useStore'

export default function SurahAudioBoxs({ ayahNum, SurahPage, surahNum }: { ayahNum: number, surahNum: number, SurahPage: { surahBtn: string, surahBtnTwo: string, Ayahs: string, SurahAudio: string, AyahAudio: string } }) {
    const setting = useStore(useSettings, (state) => state.settings[0])
    return (
        <div className='flex flex-col md:flex-row gap-5 w-full justify-center  items-center py-4'>
            <audio src={`${ayahNum !== 0 ? `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayahNum}.mp3` : '#'}`} autoPlay />
            <div className='text-center w-full px-4 space-y-4'>
                <h2 className='bg-secondary text-secondary-foreground rounded-xl p-1'>{SurahPage.SurahAudio}</h2>
                <AudioPlayer src={`https://cdn.islamic.network/quran/audio-surah/128/${setting?.reciter}/${surahNum}.mp3`} autoPlay={false} />
            </div>
        </div>
    )
}
