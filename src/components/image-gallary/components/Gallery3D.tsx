import React, { useRef, useEffect, useState, useCallback } from 'react';
import { GalleryItem } from '../types';

interface Gallery3DProps {
  items: GalleryItem[];
}

export const Gallery3D: React.FC<Gallery3DProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(800);
  const [cardWidth, setCardWidth] = useState(300);
  
  // Animation state
  const rotationRef = useRef(0); // Current rotation in degrees
  const targetRotationRef = useRef(0); // Target rotation (for smooth damping)
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);
  const autoRotateRef = useRef(true);
  const animationFrameRef = useRef<number>(0);

  // Constants
  const CARD_HEIGHT = cardWidth * 1.4; // 1:1.4 Aspect Ratio
  const ANGLE_PER_ITEM = 360 / items.length;
  const DRAG_SENSITIVITY = 0.2;
  const DAMPING = 0.95;
  const AUTO_ROTATION_SPEED = 0.05;

  // Responsive sizing
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setRadius(400);
        setCardWidth(200);
      } else if (width < 1024) {
        setRadius(600);
        setCardWidth(260);
      } else {
        setRadius(900);
        setCardWidth(320);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation Loop
  const animate = useCallback(() => {
    if (!containerRef.current) return;

    // Auto rotation if not interacting
    if (!isDraggingRef.current && Math.abs(velocityRef.current) < 0.01 && autoRotateRef.current) {
      targetRotationRef.current -= AUTO_ROTATION_SPEED;
    }

    // Apply inertia/velocity
    if (!isDraggingRef.current) {
        velocityRef.current *= DAMPING;
        targetRotationRef.current += velocityRef.current;
    }

    // Smooth interpolation to target
    const diff = targetRotationRef.current - rotationRef.current;
    rotationRef.current += diff * 0.1;

    // Apply transform to container
    // IMPORTANT: We translate BACK by radius to put the center of the carousel at the pivot point,
    // then we rotate. With transform-origin centered, this spins the carousel in place.
    containerRef.current.style.transform = `translateZ(-${radius}px) rotateY(${rotationRef.current}deg)`;

    // Update opacity/visibility of children for performance and visuals
    const children = containerRef.current.children;
    for (let i = 0; i < items.length; i++) {
        const child = children[i] as HTMLElement;
        if (!child) continue;

        // Calculate the absolute angle of this item
        const itemAngle = i * ANGLE_PER_ITEM;
        // Current global rotation places this item at:
        let currentItemAngle = (itemAngle + rotationRef.current) % 360;
        if (currentItemAngle < 0) currentItemAngle += 360;

        // Calculate opacity based on how close it is to the front (0 or 360 degrees)
        let distanceFromFront = Math.min(
            Math.abs(currentItemAngle - 0),
            Math.abs(currentItemAngle - 360)
        );
        
        // Normalize distance (0 to 180) to opacity
        let opacity = 1 - (distanceFromFront / 100);
        opacity = Math.max(0.1, Math.min(1, opacity));

        // Optimization: Hide items behind the camera (mostly)
        const isVisible = distanceFromFront < 120; // Increased visibility range slightly
        child.style.display = isVisible ? 'block' : 'none';
        
        child.style.setProperty('--card-opacity', opacity.toString());
        
        // Active state style
        if (distanceFromFront < 10) {
           child.style.zIndex = '10';
        } else {
           child.style.zIndex = '0';
        }
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [items.length, radius, ANGLE_PER_ITEM]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [animate]);


  // Event Handlers
  const getClientX = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if ('touches' in e) {
        return e.touches[0].clientX;
    }
    return (e as React.MouseEvent).clientX;
  };

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDraggingRef.current = true;
    autoRotateRef.current = false;
    const clientX = getClientX(e);
    startXRef.current = clientX;
    lastXRef.current = clientX;
    velocityRef.current = 0;
  };

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    
    const clientX = getClientX(e);
    const deltaX = clientX - lastXRef.current;
    
    // Update target rotation directly
    targetRotationRef.current += deltaX * DRAG_SENSITIVITY;
    
    // Calculate velocity for inertia
    velocityRef.current = deltaX * DRAG_SENSITIVITY;
    lastXRef.current = clientX;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    setTimeout(() => {
        if (!isDraggingRef.current) autoRotateRef.current = true;
    }, 3000);
  };

  return (
    <div 
      className="relative w-full h-[600px] md:h-[800px] touch-none cursor-grab active:cursor-grabbing overflow-visible flex items-center justify-center"
      style={{ perspective: `${radius * 2.5}px` }} 
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
    >
        {/* The 3D World Wrapper */}
        <div 
            ref={containerRef}
            className="relative preserve-3d will-change-transform"
            style={{ 
                width: cardWidth, 
                height: CARD_HEIGHT,
                // Removed transformOrigin to default to center (50% 50%)
                // This ensures the carousel spins around its own center, 
                // while translateZ pushes it back into the scene.
            }}
        >
            {items.map((item, index) => {
                const angle = index * ANGLE_PER_ITEM;
                return (
                    <div
                        key={item.id}
                        className="absolute top-0 left-0 w-full h-full preserve-3d backface-hidden"
                        style={{
                            transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                        } as React.CSSProperties}
                    >
                        <CardWrapper imageUrl={item.imageUrl} />
                    </div>
                );
            })}
        </div>
    </div>
  );
};

// Helper component to read the CSS variable for opacity
const CardWrapper: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
    return (
        <div className="w-full h-full relative group">
             {/* Main Card */}
            <div 
                className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 relative"
            >
                <img 
                    src={imageUrl} 
                    alt="Gallery Item" 
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                />
                 {/* Shadow Overlay controlled by CSS Var */}
                <div 
                    className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-200"
                    style={{ opacity: 'calc(1 - var(--card-opacity, 1))' }} 
                />
                
                {/* Highlight/Sheen */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>

             {/* Reflection */}
             <div 
                className="absolute top-full left-0 w-full h-[60%] mt-4 rounded-2xl overflow-hidden opacity-40 pointer-events-none transform scale-y-[-1]"
                style={{
                    maskImage: 'linear-gradient(to bottom, transparent, black)',
                    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.8) 100%)'
                }}
            >
                <img 
                    src={imageUrl} 
                    alt="" 
                    className="w-full h-full object-cover blur-[2px]"
                />
                 <div 
                    className="absolute inset-0 bg-black"
                    style={{ opacity: 'calc(1 - var(--card-opacity, 1))' }}
                />
            </div>
        </div>
    )
}
