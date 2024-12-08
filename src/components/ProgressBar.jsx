import React, { useState, useEffect } from 'react';
import { usePlayerStore } from '../store/playerStore';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const { currentSong, isPlaying } = usePlayerStore();
  
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 0.1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, currentSong]);

  return (
    <div className="relative w-96 group">
      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-500 rounded-full transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="absolute h-3 w-3 bg-red-500 rounded-full -top-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
           style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
      />
      
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={(e) => setProgress(parseFloat(e.target.value))}
        className="absolute inset-0 w-full opacity-0 cursor-pointer"
      />
    </div>
  );
}