import { formatTime } from "@/lib/utils";
import React from "react";

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onProgressChange: (newTime: number) => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentTime,
  duration,
  onProgressChange,
}) => {
  return (
    <div className="flex items-center gap-1 flex-grow mx-4">
      <span>{formatTime(currentTime)}</span>
      <input
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={(e) => onProgressChange(Number(e.target.value))}
        className="w-full h-2 bg-muted-foreground rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:w-[16px] [&::-webkit-slider-thumb]:h-[16px] [&::-webkit-slider-thumb]:bg-primary"
      />
      <span>{formatTime(duration)}</span>
    </div>
  );
};
