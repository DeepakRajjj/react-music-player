import { Search } from 'lucide-react';
import NavLink from './NavLink';

export default function Header() {
  return (
    <div className="sticky top-0 z-[60] bg-[#0C0C0C]/95 backdrop-blur-md px-4 md:px-8 py-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for songs, artists..."
            className="w-full bg-white/5 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        
        <nav className="flex gap-4 md:gap-6 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          <NavLink href="#" active>Music</NavLink>
          <NavLink href="#">Podcast</NavLink>
          <NavLink href="#">Live</NavLink>
          <NavLink href="#">Radio</NavLink>
        </nav>
      </div>
    </div>
  );
}