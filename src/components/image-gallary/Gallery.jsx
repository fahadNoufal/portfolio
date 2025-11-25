import React from 'react';
import { Gallery3D } from './components/Gallery3D.jsx';
import { ArrowRight, Instagram, Twitter, Linkedin } from 'lucide-react';

const ITEMS = Array.from({ length: 14 }).map((_, i) => ({
  id: i,
  imageUrl: `https://picsum.photos/600/800?random=${i + 10}`,
  title: `Work ${i + 1}`,
}));

function Gallery() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-blue-500/30">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full blur-[10px] absolute opacity-50"></div>
            <span className="relative z-10">VORTEX</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Showcase</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <button className="hidden md:block px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-sm font-medium">
            Menu
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center relative overflow-hidden pt-20">
        
        {/* Background Ambient Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="text-center mb-4 z-10 space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                Our Works
            </h1>
            <p className="text-gray-400 max-w-md mx-auto text-sm md:text-base px-4">
                Explore a curated selection of our finest digital masterpieces. 
                Drag to rotate the gallery.
            </p>
        </div>

        {/* 3D Gallery */}
        <div className="w-full relative z-20 -mt-8 md:-mt-16">
            <Gallery3D items={ITEMS} />
        </div>

        {/* Floating Action Button */}
        <div className="absolute bottom-12 md:bottom-20 z-30">
            <button className="group relative px-8 py-4 bg-blue-600 rounded-full font-bold text-lg overflow-hidden shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-10px_rgba(37,99,235,0.7)] transition-all transform hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                    Hire Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
            </button>
        </div>

      </main>

      {/* Footer / Socials */}
      <footer className="fixed bottom-6 right-6 z-40 hidden md:flex gap-4 text-gray-500">
        <a href="#" className="hover:text-white hover:scale-110 transition-all"><Instagram size={20} /></a>
        <a href="#" className="hover:text-white hover:scale-110 transition-all"><Twitter size={20} /></a>
        <a href="#" className="hover:text-white hover:scale-110 transition-all"><Linkedin size={20} /></a>
      </footer>

       {/* Vignette Overlay */}
       <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10" />
    </div>
  );
}

export default Gallery;