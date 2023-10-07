"use client"
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { Button } from './ui/button';

interface AudioPlayerProps {
    src: string;
    ayahNum: number;
    autoPlay: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, autoPlay, ayahNum }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const audioRef = React.useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            isPlaying ? audioRef.current.play() : audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {

        const currentAudioRef = audioRef.current;
        const timeUpdateHandler = () => {
            setCurrentTime(audioRef.current?.currentTime || 0);
            setProgress((audioRef.current?.currentTime! / audioRef.current?.duration!) * 100 || 0);
        };

        const endedHandler = () => {
            setIsPlaying(false);
            setCurrentTime(0);
            setProgress(0);
        };

        currentAudioRef && currentAudioRef.addEventListener('timeupdate', timeUpdateHandler);
        currentAudioRef && currentAudioRef.addEventListener('ended', endedHandler);

        // Cleanup function
        return () => {
            currentAudioRef && currentAudioRef.pause();
            currentAudioRef && currentAudioRef.removeEventListener('timeupdate', timeUpdateHandler);
            currentAudioRef && currentAudioRef.removeEventListener('ended', endedHandler);
        };
    }, []);


    return (
        <div className='border border-primary/50 rounded-lg  bg-muted/25 bg-gradient-to-tr from-primary/25 to-50% p-6 '>
            <audio ref={audioRef} src={src} autoPlay={autoPlay} />
            <div className='flex items-center  justify-center'>
                <Link className={cn("hover:text-primary p-2 rounded-full", { "pointer-events-none opacity-50": ayahNum === 0 })} href={{ query: { ayahNum: ayahNum + 1, } }} >
                    <Icons.PlayNext />
                </Link>
                <Button variant="outline" size="icon" disabled={ayahNum === 0} onClick={() => setIsPlaying(!isPlaying)} className={cn(`p-2 px-3 text-white rounded-full`, { "bg-red-500": isPlaying || progress > 0 }, { "bg-primary": !isPlaying })}>
                    {isPlaying ? <Icons.Stop /> : <Icons.Play />}
                </Button>
                <Link className={cn("hover:text-primary p-2 rounded-full", { "pointer-events-none opacity-50": ayahNum <= 1 })} href={{ query: { ayahNum: ayahNum - 1, } }} >
                    <Icons.PlayPrev />
                </Link>
            </div>
            <div className="w-full h-1 rounded-lg bg-gray-200 mt-4">
                <div className={cn("h-full bg-primary transition-all duration-300")} style={{ width: `${progress}%` }} />
            </div>
            {/* <div className="text-center mt-2">
                {Math.floor(currentTime)}s /{' '}
                {Math.floor(audioRef.current?.duration || 0)}s
            </div> */}
        </div>
    );
};

export default AudioPlayer;
