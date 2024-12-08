import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { usePlayerStore } from './store/playerStore';
import Sidebar from './components/Sidebar';
import SongList from './components/SongList';
import MusicPlayer from './components/MusicPlayer';
import ArtistHeader from './components/ArtistHeader';
import Header from './components/Header';
import { Menu } from 'lucide-react';
import { useState } from 'react';

function App() {
  const { playlist, setPlaylist } = usePlayerStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (active.id !== over.id) {
      const oldIndex = playlist.findIndex((song) => song.id === active.id);
      const newIndex = playlist.findIndex((song) => song.id === over.id);
      
      setPlaylist(arrayMove(playlist, oldIndex, newIndex));
    }
  };

  return (
    <div className="flex h-screen bg-[#0C0C0C] text-white overflow-hidden">
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-[70] p-2 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className={`
        fixed inset-y-0 left-0 z-[65] w-64 transform transition-transform duration-300 ease-in-out lg:relative lg:transform-none bg-[#0C0C0C]
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>
      
      <main className="flex-1 overflow-auto w-full">
        <Header />

        <div className="px-4 md:px-8 pb-32">
          <ArtistHeader />

          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Popular</h2>
              <button className="text-sm text-gray-400 hover:text-white">See All</button>
            </div>
            
            <div className="bg-white/5 rounded-xl p-2 md:p-4">
              <div className="hidden md:grid grid-cols-12 text-sm text-gray-400 px-4 py-2">
                <div className="col-span-6">#  TITLE</div>
                <div className="col-span-3">PLAYING</div>
                <div className="col-span-2">TIME</div>
                <div className="col-span-1">ALBUM</div>
              </div>
              
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={playlist.map(song => song.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <SongList />
                </SortableContext>
              </DndContext>
            </div>
          </div>
        </div>
      </main>

      <MusicPlayer />
    </div>
  );
}

export default App;