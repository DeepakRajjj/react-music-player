import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';
import { usePlayerStore } from '../store/playerStore';

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function SongItem({ song, index }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: song.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const { currentSong, setCurrentSong, setIsPlaying } = usePlayerStore();
  const isActive = currentSong?.id === song.id;

  const handlePlay = () => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className={`grid grid-cols-1 md:grid-cols-12 items-center px-4 py-2 rounded-lg hover:bg-white/5 cursor-pointer gap-4 md:gap-0 ${
        isActive ? 'bg-red-500/10' : ''
      }`}
      onClick={handlePlay}
    >
      <div className="col-span-1 md:col-span-6 flex items-center gap-4">
        <div {...listeners} className="cursor-grab hidden md:block">
          <GripVertical className="text-gray-400" />
        </div>
        <span className="text-gray-400 w-4 hidden md:block">{index + 1}</span>
        <img src={song.cover} alt={song.title} className="w-10 h-10 rounded object-cover" />
        <div>
          <h3 className={`font-medium ${isActive ? 'text-red-500' : 'text-white'}`}>{song.title}</h3>
          <p className="text-sm text-gray-400">{song.artist}</p>
        </div>
      </div>
      <div className="hidden md:block md:col-span-3 text-gray-400">{formatNumber(song.plays)}</div>
      <div className="hidden md:block md:col-span-2 text-gray-400">{song.duration}</div>
      <div className="hidden md:block md:col-span-1 text-gray-400 truncate">{song.album}</div>
    </div>
  );
}

export default function SongList() {
  const playlist = usePlayerStore((state) => state.playlist);

  return (
    <div className="space-y-1">
      {playlist.map((song, index) => (
        <SongItem key={song.id} song={song} index={index} />
      ))}
    </div>
  );
}