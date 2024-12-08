import { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { usePlayerStore } from '../store/playerStore';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';
import VolumeSlider from './VolumeSlider';
import ProgressBar from './ProgressBar';
import VisualizerCanvas from './VisualizerCanvas';

export default function MusicPlayer() {
  const { currentSong, isPlaying, volume, setIsPlaying } = usePlayerStore();
  const soundRef = useRef(null);

  useEffect(() => {
    if (currentSong) {
      if (soundRef.current) {
        soundRef.current.unload();
      }
      
      soundRef.current = new Howl({
        src: [currentSong.url],
        volume: volume,
        onend: () => setIsPlaying(false)
      });

      if (isPlaying) {
        soundRef.current.play();
      }
    }

    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, [currentSong, volume]);

  useEffect(() => {
    if (soundRef.current) {
      if (isPlaying) {
        soundRef.current.play();
      } else {
        soundRef.current.pause();
      }
    }
  }, [isPlaying]);

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#1A1A1A] to-[#0C0C0C] border-t border-white/10 p-4 animate-slide-up backdrop-blur-lg z-[550]">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative group">
            <img
              src={currentSong.cover}
              alt={currentSong.title}
              className="w-14 h-14 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <VisualizerCanvas />
              </div>
            )}
          </div>
          <div className="group cursor-pointer">
            <h3 className="text-white font-medium group-hover:text-red-500 transition-colors">
              {currentSong.title}
            </h3>
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              {currentSong.artist}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 w-full md:w-auto">
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Shuffle className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <SkipBack className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className={`w-10 h-10 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-all duration-300 transform hover:scale-110 ${
                isPlaying ? 'animate-glow' : ''
              }`}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white translate-x-0.5" />
              )}
            </button>
            <button className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <SkipForward className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Repeat className="w-5 h-5" />
            </button>
          </div>
          <ProgressBar />
        </div>

        <div className="hidden md:block">
          <VolumeSlider />
        </div>
      </div>
    </div>
  );
}