import { create } from 'zustand';

export const usePlayerStore = create((set) => ({
  currentSong: null,
  isPlaying: false,
  volume: 0.5,
  playlist: [
    {
      id: 1,
      title: "Billie Jean",
      artist: "Michael Jackson",
      album: "Thriller 25 Super Deluxe Edition",
      duration: "4:53",
      cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=300",
      url: "https://example.com/billiejean.mp3",
      plays: 1040811084
    },
    {
      id: 2,
      title: "Beat It",
      artist: "Michael Jackson",
      album: "Thriller 25 Super Deluxe Edition",
      duration: "4:18",
      cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=300",
      url: "https://example.com/beatit.mp3",
      plays: 643786045
    },
    {
      id: 3,
      title: "Smooth Criminal - 2012 Remaster",
      artist: "Michael Jackson",
      album: "Thriller 25 Super Deluxe Edition",
      duration: "4:17",
      cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=300",
      url: "https://example.com/smoothcriminal.mp3",
      plays: 407234004
    },
    {
      id: 4,
      title: "Thriller",
      artist: "Michael Jackson",
      album: "Thriller 25 Super Deluxe Edition",
      duration: "5:57",
      cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=300",
      url: "https://example.com/thriller.mp3",
      plays: 892156734
    },
    {
      id: 5,
      title: "Man in the Mirror",
      artist: "Michael Jackson",
      album: "Bad 25 Super Deluxe Edition",
      duration: "5:19",
      cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=300",
      url: "https://example.com/maninthemirror.mp3",
      plays: 567234891
    },
    {
      id: 6,
      title: "Black or White",
      artist: "Michael Jackson",
      album: "Dangerous",
      duration: "4:16",
      cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=300",
      url: "https://example.com/blackorwhite.mp3",
      plays: 432567123
    }
  ],
  setCurrentSong: (song) => set({ currentSong: song }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setVolume: (volume) => set({ volume }),
  setPlaylist: (playlist) => set({ playlist })
}));