import React, { useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';
import img4 from '../assets/images/img4.jpeg';
import img5 from '../assets/images/img5.jpeg';
import img6 from '../assets/images/img6.jpeg';
import img7 from '../assets/images/img7.jpeg';
import img8 from '../assets/images/img8.jpeg';
import img9 from '../assets/images/img9.jpeg';
import img10 from '../assets/images/img10.jpeg';



interface TourStop {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const tourStops: TourStop[] = [
    {
      id: '1',
      title: 'Vue d\'ensemble',
      description: 'Résidence moderne avec espaces verts et équipements',
      imageUrl: img1
    },
    {
      id: '2',
      title: 'Espace commun',
      description: 'Zone de détente et de coworking avec wifi haut débit',
      imageUrl: img2
    },
    {
      id: '3',
      title: 'Studio type',
      description: 'Découvrez nos studios entièrement meublés et équipés',
      imageUrl: img3
    },
    {
      id: '4',
      title: 'Salle de sport',
      description: 'Équipements modernes pour rester en forme',
      imageUrl: img4
    },
    {
      id: '5',
      title: 'Espace cuisine',
      description: 'Cuisines entièrement équipées avec appareils modernes',
      imageUrl: img5
    },
    {
      id: '6',
      title: 'Salle de bain',
      description: 'Salles de bain élégantes et fonctionnelles',
      imageUrl: img6
    },
    {
      id: '7',
      title: 'Toit-terrasse',
      description: 'Espace extérieur partagé avec vue panoramique',
      imageUrl: img7
    },
    {
      id: '8',
      title: 'Espace de travail',
      description: 'Bureaux et espaces de coworking confortables',
      imageUrl: img8
    },
    {
      id: '9',
      title: 'Zone de relaxation',
      description: 'Espaces dédiés à la détente et au bien-être',
      imageUrl: img9
    },
    {
      id: '10',
      title: 'Entrée du bâtiment',
      description: 'Une façade moderne et accueillante',
      imageUrl: img10
    }
  ];

export default function GuidedTour() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [{ x }, api] = useSpring(() => ({ x: 0 }));
  const [{ scale }, scaleApi] = useSpring(() => ({ scale: 1 }));

  const bind = useGesture(
    {
      onDrag: ({ movement: [mx], down }) => {
        if (down) {
          api.start({ x: mx, immediate: true });
        } else {
          if (Math.abs(mx) > 100) {
            const newIndex = mx > 0 
              ? Math.max(0, currentIndex - 1)
              : Math.min(tourStops.length - 1, currentIndex + 1);
            setCurrentIndex(newIndex);
          }
          api.start({ x: 0 });
        }
      },
      onHover: ({ hovering }) => {
        scaleApi.start({ scale: hovering ? 1.05 : 1 });
      }
    },
    {
      drag: {
        from: () => [x.get(), 0],
        rubberband: true,
      }
    }
  );

  const navigateStop = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'next' && currentIndex < tourStops.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentStop = tourStops[currentIndex];

  return (
    <div className="relative bg-black">
      {/* Main Content */}
      <div 
        ref={containerRef}
        {...bind()}
        className="relative h-[600px] overflow-hidden touch-none"
      >
        <animated.div
          style={{ 
            x,
            scale,
          }}
          className="h-full w-full"
        >
          <div className="relative h-full">
            <div 
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${currentStop.imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/20" />
          </div>
        </animated.div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <ImageIcon className="w-6 h-6" />
              <span className="text-sm font-medium">Photo</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">{currentStop.title}</h2>
            <p className="text-lg text-white/90">{currentStop.description}</p>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4 z-20">
        <button
          onClick={() => navigateStop('prev')}
          disabled={currentIndex === 0}
          className={`p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors
            ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <div className="text-white font-medium">
          {currentIndex + 1} / {tourStops.length}
        </div>
        <button
          onClick={() => navigateStop('next')}
          disabled={currentIndex === tourStops.length - 1}
          className={`p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors
            ${currentIndex === tourStops.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {tourStops.map((stop, index) => (
          <button
            key={stop.id}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}