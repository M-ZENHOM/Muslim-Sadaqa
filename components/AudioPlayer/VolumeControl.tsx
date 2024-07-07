import React from "react";
import { Icons } from "../Icons";

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (newVolume: number) => void;
}

export const VolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  onVolumeChange,
}) => {
  return (
    <div className="flex items-center">
      <Icons.Audio className="h-5 w-5 text-primary mr-2" />
      <input
        type="range"
        min={0}
        max={1}
        step={0.1}
        value={volume}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
        className="w-20 h-2 bg-muted-foreground rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};
