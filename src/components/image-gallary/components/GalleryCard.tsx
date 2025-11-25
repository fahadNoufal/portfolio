import React from 'react';

interface GalleryCardProps {
  imageUrl: string;
  isActive: boolean;
  opacity: number;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ imageUrl, isActive, opacity }) => {
  return (
    <div className="relative group w-full h-full select-none">
      {/* Main Card Image */}
      <div 
        className={`
          w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300
          ${isActive ? 'shadow-blue-500/20 ring-1 ring-blue-500/50' : ''}
        `}
      >
        <img 
          src={imageUrl} 
          alt="Gallery Item" 
          className="w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
        {/* Overlay for darkening cards further away */}
        <div 
          className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-100"
          style={{ opacity: 1 - opacity }}
        />
      </div>

      {/* Reflection Effect */}
      <div 
        className="absolute top-full left-0 w-full h-full mt-4 rounded-2xl overflow-hidden opacity-40 pointer-events-none transform scale-y-[-1] mask-image-gradient"
        style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%)'
        }}
      >
         <img 
          src={imageUrl} 
          alt="" 
          className="w-full h-full object-cover blur-sm opacity-50"
        />
         <div 
          className="absolute inset-0 bg-black transition-opacity duration-100"
          style={{ opacity: 1 - opacity }}
        />
      </div>
    </div>
  );
};