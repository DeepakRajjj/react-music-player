import { Home, TrendingUp, Library, Compass, Settings, LogOut, X, Music } from 'lucide-react';

function NavItem({ icon, text, active = false }) {
  return (
    <div className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer transition-colors ${
      active ? 'bg-red-500/10 text-red-500' : 'text-gray-400 hover:text-white'
    }`}>
      {icon}
      <span className="font-medium text-sm">{text}</span>
    </div>
  );
}

export default function Sidebar({ onClose }) {
  return (
    <div className="w-64 bg-[#0C0C0C] border-r border-white/10 h-full p-6 flex flex-col relative">
      {onClose && (
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
      )}
      
      <div className="flex items-center gap-2 mb-10">
        <Music className="h-8 w-8 text-red-500" />
        <span className="text-xl font-bold text-white">
          <span className="text-red-500">Dream</span>Music
        </span>
      </div>

      <div className="space-y-8 flex-1">
        <div className="space-y-2">
          <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-4">Menu</p>
          <NavItem icon={<Home className="w-5 h-5" />} text="Home" active />
          <NavItem icon={<TrendingUp className="w-5 h-5" />} text="Trends" />
          <NavItem icon={<Library className="w-5 h-5" />} text="Library" />
          <NavItem icon={<Compass className="w-5 h-5" />} text="Discover" />
        </div>

        <div className="space-y-2">
          <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-4">General</p>
          <NavItem icon={<Settings className="w-5 h-5" />} text="Settings" />
          <NavItem icon={<LogOut className="w-5 h-5" />} text="Log Out" />
        </div>
      </div>
    </div>
  );
}