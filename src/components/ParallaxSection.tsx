import React, { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  imageUrl: string;
  children: React.ReactNode;
  className?: string; // Prop pour les classes personnalisées

}

export default function ParallaxSection({ imageUrl, children,  className = "" }: ParallaxSectionProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // <div className="relative h-[500px] overflow-hidden">
    <div className={`relative h-[500px] overflow-hidden ${className}`}>

      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative h-full z-10">
        {children}
      </div>
    </div>
  );
}