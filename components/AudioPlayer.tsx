"use client"
import { cn, formatTime } from '@/lib/utils';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { Button } from './ui/button';

interface AudioPlayerProps {
    src: string;
    ayahNum?: number;
    autoPlay: boolean;
    className?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, autoPlay, ayahNum, className }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const audioRef = React.useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            isPlaying ? audioRef.current.play() : audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {

        const currentAudioRef = audioRef.current;

        const playHandler = () => {
            setIsPlaying(true);
            currentAudioRef && currentAudioRef.play();
        };

        const timeUpdateHandler = () => {
            setCurrentTime(audioRef.current?.currentTime || 0);
            setProgress((audioRef.current?.currentTime! / audioRef.current?.duration!) * 100 || 0);
        };


        const endedHandler = () => {
            setIsPlaying(false);
            setCurrentTime(0);
            setProgress(0);
        };

        currentAudioRef && currentAudioRef.addEventListener('playing', playHandler);
        currentAudioRef && currentAudioRef.addEventListener('timeupdate', timeUpdateHandler);
        currentAudioRef && currentAudioRef.addEventListener('ended', endedHandler);


        // Cleanup function
        return () => {
            currentAudioRef && currentAudioRef.pause();
            currentAudioRef && currentAudioRef.removeEventListener('playing', playHandler);
            currentAudioRef && currentAudioRef.removeEventListener('timeupdate', timeUpdateHandler);
            currentAudioRef && currentAudioRef.removeEventListener('ended', endedHandler);
        };
    }, []);

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const newTime = audioRef.current.currentTime !== 0 ? (parseFloat(e.target.value) / 100) * audioRef.current.duration : 0
            setCurrentTime(newTime);
            audioRef.current.currentTime = newTime;
        }
    };

    return (
        <div className={cn('border border-primary/50 rounded-lg  bg-muted/25 bg-gradient-to-tr from-primary/25 to-50% p-6', className)}>
            <audio ref={audioRef} src={src} autoPlay={autoPlay} />
            <div className='flex items-center  justify-center'>
                <Link className={cn("hover:text-primary p-2 rounded-full", { "pointer-events-none opacity-50": ayahNum === 0 || !ayahNum })} href={{ query: { ayahNum: ayahNum && ayahNum + 1, } }} >
                    <Icons.PlayNext />
                </Link>
                <Button variant="outline" size="icon" disabled={ayahNum === 0} onClick={() => setIsPlaying(!isPlaying)} className={cn(`p-2 px-3 text-white rounded-full`, { "bg-red-500": isPlaying || progress > 0 }, { "bg-primary": !isPlaying })}>
                    {isPlaying && currentTime === 0 ? <Icons.Stop /> : <Icons.Play />}
                </Button>
                <Link className={cn("hover:text-primary p-2 rounded-full", { "pointer-events-none opacity-50": ayahNum && ayahNum <= 1 || !ayahNum })} href={{ query: { ayahNum: ayahNum && ayahNum - 1, } }} >
                    <Icons.PlayPrev />
                </Link>
            </div>
            <input className='w-full bg-primary mt-4 border-primary' type="range" min="0" max="100" value={progress} onChange={handleProgressChange} />
            <div className="text-center mt-2">
                {formatTime(currentTime)} / {formatTime(audioRef.current?.duration || 0)}
            </div>
        </div>
    );
};

export default AudioPlayer;
