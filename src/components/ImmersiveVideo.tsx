import React from 'react';

interface ImmersiveVideoProps {
  videoUrl: string;
  title?: string;
  description?: string;
}

export default function ImmersiveVideo({ videoUrl, title, description }: ImmersiveVideoProps) {
  return (
    <section className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>}
          {description && <p className="text-xl text-white/80 max-w-3xl mx-auto">{description}</p>}
        </div>
        
        <div className="relative h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-2xl">
          <iframe 
            src={videoUrl}
            title="Visite virtuelle des résidences Eureka"
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}