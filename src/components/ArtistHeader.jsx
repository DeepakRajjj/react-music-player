import React from 'react';
import { BadgeCheck } from 'lucide-react';

export default function ArtistHeader() {
  return (
    <div className="relative h-[300px] rounded-2xl overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1619983081563-430f63602796?w=1200)',
          filter: 'brightness(0.7)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-8 left-8">
        <div className="flex items-center gap-2 mb-2">
          <BadgeCheck className="text-blue-400 w-5 h-5" />
          <span className="text-sm font-medium">Verified Artist</span>
        </div>
        <h1 className="text-5xl font-bold mb-4">Michael Jackson</h1>
        <p className="text-gray-300">27,832,581 monthly listeners</p>
      </div>
    </div>
  );
}