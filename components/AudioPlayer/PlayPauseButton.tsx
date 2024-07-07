import React from "react";
import { Icons } from "../Icons";

interface PlayPauseButtonProps {
  isPlaying: boolean;
  onClick: () => void;
}

export const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({
  isPlaying,
  onClick,
}) => {
  return (
    <button
      className="bg-muted-foreground hover:bg-primary/80 text-primary-foreground rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/25"
      onClick={onClick}
    >
      {!isPlaying ? <Icons.Play /> : <Icons.Stop />}
    </button>
  );
};
