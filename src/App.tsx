import React from 'react';
import { Play, Pause, Volume2, Music, Youtube, Radio } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80"
            alt="Album Cover"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-in">
            The Retro Geek
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            The Retro Geek blends nostalgia with modern vibes, crafting a unique sound inspired by classic video games, synthwave, and electronic beats. From chiptune-infused melodies to atmospheric synth-driven tracks, The Retro Geek takes listeners on a journey through time—where pixelated dreams meet futuristic rhythms. Whether you're reliving your favorite gaming moments or discovering fresh, retro-inspired sounds, this music is for those who love the past but are always looking ahead.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-stretch sm:items-start">
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto text-center">
              Listen Now
            </button>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://open.spotify.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#1DB954] text-white px-6 py-4 rounded-full font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <Music className="w-5 h-5" />
                <span>Spotify</span>
              </a>
              <a 
                href="https://music.apple.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#FA243C] text-white px-6 py-4 rounded-full font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <Radio className="w-5 h-5" />
                <span>Apple Music</span>
              </a>
              <a 
                href="https://music.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#FF0000] text-white px-6 py-4 rounded-full font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube Music</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-24 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center p-6 rounded-xl hover:bg-zinc-800/50 transition-colors">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Play className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4">12 Tracks</h3>
              <p className="text-gray-400">Each carefully crafted to take you on a journey</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-zinc-800/50 transition-colors">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Volume2 className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Spatial Audio</h3>
              <p className="text-gray-400">Immersive listening experience with Dolby Atmos</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-zinc-800/50 transition-colors">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Pause className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Hi-Res Lossless</h3>
              <p className="text-gray-400">Studio-quality sound in every note</p>
            </div>
          </div>
        </div>
      </div>

      {/* Track List */}
      <div className="py-16 sm:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Track List</h2>
          <div className="max-w-2xl mx-auto space-y-3">
            {[
              "1. Pixel Dreams - 3:42",
              "2. 8-Bit Memories - 4:15",
              "3. Game Over (But Not Really) - 3:58",
              "4. Retro Wave Runner - 4:30",
              "5. Boss Battle - 3:45",
              "6. Loading... - 2:55",
              "7. High Score - 4:12",
              "8. Insert Coin - 3:33",
              "9. Power Up! - 3:21",
              "10. Final Stage - 5:01",
              "11. Achievement Unlocked - 4:08",
              "12. New Game Plus - 4:44"
            ].map((track) => (
              <div 
                key={track}
                className="flex items-center justify-between p-4 hover:bg-zinc-900 rounded-lg transition-colors"
              >
                <span className="text-base sm:text-lg">{track}</span>
                <Play className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 text-center text-gray-400">
          <p>© 2025 All rights reserved.</p>
          <p className="mt-2">Available on all major streaming platforms</p>
        </div>
      </footer>
    </div>
  );
}

export default App;