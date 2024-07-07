"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { PlayPauseButton } from "./PlayPauseButton";
import { ProgressBar } from "./ProgressBar";
import { VolumeControl } from "./VolumeControl";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "../Icons";
import { useSettings } from "@/store";
import useStore from "@/hooks/useStore";

interface AudioPlayerProps {
  title: string;
  surahNum: number;
  lang: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  title,
  surahNum,
  lang,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const setting = useStore(useSettings, (state) => state.settings[0]);
  const audioUrl = `https://cdn.islamic.network/quran/audio-surah/128/${setting?.reciter}/${surahNum}.mp3`;
  const audioRef = useRef<HTMLAudioElement>(null);

  const setAudioData = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
    setCurrentTime(audioRef.current.currentTime);
  };

  const setAudioTime = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.ended) {
      setCurrentTime(0);
      setIsPlaying(false);
    }
  }, [currentTime, isPlaying]);

  // Reset audio when reciter setting changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setCurrentTime(0);
    setIsPlaying(false);
    audio.currentTime = 0;
  }, [setting?.reciter]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const handleVolumeChange = (newVolume: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = newVolume;
    setVolume(newVolume);
  };

  const handleProgressChange = (newTime: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.target = "_blank";
    anchor.href = audioUrl;
    anchor.download = `${title}.mp3`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div
      dir="ltr"
      className="absolute bottom-2 left-0 right-0 p-3 bg-gradient-to-br from-primary/25 to-60% w-full flex flex-col justify-center items-center z-50 rounded-2xl border border-violet/25"
    >
      <audio ref={audioRef} src={audioUrl} />
      <Icons.Download
        onClick={handleDownload}
        className=" absolute right-5 bottom-3 text-muted-foreground hover:text-primary/80 cursor-pointer w-8 h-8"
      />
      <h2 className="text-xl font-semibold  text-muted-foreground mb-2">
        {title}
      </h2>
      <div className="flex items-center w-full">
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          onProgressChange={handleProgressChange}
        />
        <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
      </div>
      <div className="flex items-center gap-4">
        <Link
          className={cn({
            "pointer-events-none opacity-50": Number(surahNum) === 114,
          })}
          href={{ pathname: `/${lang}/surah/${Number(surahNum) + 1}` }}
        >
          <Icons.PlayNext className="text-muted-foreground hover:text-primary/80" />
        </Link>
        <PlayPauseButton isPlaying={isPlaying} onClick={togglePlayPause} />
        <Link
          className={cn({
            "pointer-events-none opacity-50": Number(surahNum) === 1,
          })}
          href={{ pathname: `/${lang}/surah/${Number(surahNum) - 1}` }}
        >
          <Icons.PlayPrev className="text-muted-foreground hover:text-primary/80" />
        </Link>
      </div>
    </div>
  );
};
