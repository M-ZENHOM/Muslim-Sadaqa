"use client"
import React from 'react'
import { useSettings } from '@/store'
import useStore from '@/hooks/useStore'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { cn } from '@/lib/utils';

export default function SurahAudioBoxs({ ayahNum, SurahPage, surahNum }: { ayahNum: number, surahNum: number, SurahPage: { surahBtn: string, surahBtnTwo: string, Ayahs: string, SurahAudio: string, AyahAudio: string } }) {
    const setting = useStore(useSettings, (state) => state.settings[0])
    return (
        <div className='w-full max-w-xl' dir='ltr'>
            <AudioPlayer
                autoPlay={false}
                style={{ height: '160px', }}
                className={cn("custom-audio-player rounded-xl  bg-muted/25 bg-gradient-to-tr from-primary/25 to-50%")}
                src={setting?.reciter && surahNum !== 0 ? `https://cdn.islamic.network/quran/audio-surah/128/${setting?.reciter}/${surahNum}.mp3` : "#"}
            />
            <AudioPlayer
                style={{ width: '100%', display: `${ayahNum === 0 ? 'none' : 'block'}` }}
                className={cn("absolute bottom-0 left-[50%] translate-x-[-50%] custom-audio-player")}
                layout='horizontal'
                autoPlay={false}
                src={`${`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayahNum}.mp3`}`}
            />
        </div>
    )
}
