"use client"
import { cn, formatTime } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { Icons } from './Icons';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface AudioPlayerProps {
    src: string | null;
    ayahNum?: number;
    autoPlay: boolean;
    className?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, autoPlay, ayahNum, className }) => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [currentTime, setCurrentTime] = React.useState<number>(0);
    const [progress, setProgress] = React.useState<number>(0);
    const audioRef = React.useRef<HTMLAudioElement>(null);

    React.useEffect(() => {
        const currentAudioRef = audioRef.current;
        if (currentAudioRef) {
            isPlaying ? currentAudioRef.play() : currentAudioRef.pause();
        }
    }, [isPlaying, src]);

    const playHandler = () => {
        setIsPlaying(true);
        audioRef?.current?.play();

    };
    const timeUpdateHandler = () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
        setProgress((audioRef.current?.currentTime! / audioRef.current?.duration!) * 100 || 0);

    };

    const endHandler = () => {
        setIsPlaying(false);
        setCurrentTime(0);
        setProgress(0);
    };



    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const newTime = audioRef.current.currentTime !== 0 ? (parseFloat(e.target.value) / 100) * audioRef.current.duration : 0
            setCurrentTime(newTime);
            audioRef.current.currentTime = newTime;
        }
    };

    return (
        <div className={cn('border border-primary/50 rounded-lg  bg-muted/25 bg-gradient-to-tr from-primary/25 to-50% p-3 md:p-4', className)}>
            <audio ref={audioRef} src={src!} onPlay={playHandler} onEnded={endHandler} onTimeUpdate={timeUpdateHandler} autoPlay={autoPlay} />
            <div className='flex items-center  justify-center'>
                <Link aria-label='Next Button' className={cn("hover:text-primary p-2 rounded-full", { "pointer-events-none opacity-50": ayahNum === 0 || !ayahNum })} href={{ query: { ayahNum: ayahNum && ayahNum + 1 } }} scroll={false} >
                    <Icons.PlayNext />
                </Link>
                <Button variant="outline" size="icon" asria-label="Play Audio button" disabled={ayahNum === 0} onClick={() => setIsPlaying(!isPlaying)} className={cn(`p-2 px-3 text-white rounded-full`, { "bg-cyan-800": isPlaying }, { "bg-primary text-primary-foreground": !isPlaying })}>
                    {isPlaying && currentTime !== 0 ? <Icons.Stop /> : <Icons.Play />}
                </Button>
                <Link aria-label='Previous Button' className={cn("hover:text-primary p-2 rounded-full", { "pointer-events-none opacity-50": ayahNum && ayahNum <= 1 || !ayahNum })} href={{ query: { ayahNum: ayahNum && ayahNum - 1 } }} scroll={false} >
                    <Icons.PlayPrev />
                </Link>
            </div>
            <label htmlFor='progress' className='sr-only' >Audio Progress</label>
            <Input id="progress" className='w-full mt-4' type="range" min="0" max="100" value={progress} onTimeUpdate={handleProgressChange} onChange={handleProgressChange} />
            <div className="text-center mt-2">
                {formatTime(currentTime)} / {formatTime(audioRef.current?.duration || 0)}
            </div>
        </div>
    );
};

export default AudioPlayer;
