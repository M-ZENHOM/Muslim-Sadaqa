"use client"
import React from 'react'
import AudioPlayer from './AudioPlayer'
import { useSettings } from '@/store'
import useStore from '@/hooks/useStore'

export default function SurahAudioBoxs({ ayahNum, SurahPage, surahNum }: { ayahNum: number, surahNum: number, SurahPage: { surahBtn: string, surahBtnTwo: string, Ayahs: string, SurahAudio: string, AyahAudio: string } }) {
    const setting = useStore(useSettings, (state) => state.settings[0])
    return (
        <div className='w-full max-w-xl'>
            <audio src={`${ayahNum !== 0 ? `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayahNum}.mp3` : '#'}`} autoPlay />
            <AudioPlayer src={setting?.reciter && surahNum !== 0 ? `https://cdn.islamic.network/quran/audio-surah/128/${setting?.reciter}/${surahNum}.mp3` : null} autoPlay={false} />
        </div>
    )
}
