import React from 'react';
import { Volume2, VolumeX, Volume1 } from 'lucide-react';
import { usePlayerStore } from '../store/playerStore';

export default function VolumeSlider() {
  const { volume, setVolume } = usePlayerStore();

  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <div className="group relative flex items-center gap-2">
      <button
        onClick={() => setVolume(volume === 0 ? 0.5 : 0)}
        className="text-gray-400 hover:text-white transition-colors"
      >
        <VolumeIcon className="w-5 h-5" />
      </button>
      
      <div className="relative w-24">
        <div className="h-1 bg-white/10 rounded-full">
          <div
            className="h-full bg-white rounded-full transition-all duration-150"
            style={{ width: `${volume * 100}%` }}
          />
        </div>
        
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}