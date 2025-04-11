import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParallaxSection from '../components/ParallaxSection';
import TestimonialCard from '../components/TestimonialCard';
import GuidedTour from '../components/GuidedTour';
import ImmersiveVideo from '../components/ImmersiveVideo'; // Importez le nouveau composant

import type { Testimonial } from '../types';

import room2 from '../assets/images/room2.jpeg';


const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Thérèse Nanfack',
    role: 'Étudiante en 1ère Année',
    content: 'Ma résidence Eureka est devenue mon deuxième chez-moi. L\'ambiance est parfaite pour les études et la vie étudiante.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '2',
    name: 'Mamadou Diallo',
    role: 'Étudiant en ingénierie',
    content: 'Les installations modernes et l\'emplacement stratégique m\'ont permis de me concentrer sur mes études tout en profitant de la vie étudiante.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
  }
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section with Parallax */}
      {/* <ParallaxSection 
      imageUrl="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=2000"
      className="h-[600px]" // Augmentation de la hauteur (était 500px par défaut)

      >
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Votre Résidence Étudiante Idéale
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Des logements modernes, confortables et adaptés à la vie étudiante
            </p>
            <Link
              to="/reservation"
              className="bg-[#F7BF57] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#D9BEA3] transition-colors flex items-center gap-2 w-fit"
            >
              Réserver maintenant
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </ParallaxSection> */}

      <ParallaxSection 
        imageUrl="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=2000"
        className="h-[600px]" // Augmentation de la hauteur (était 500px par défaut)
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Residences Eureka
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Des logements modernes, confortables et adaptés à la vie étudiante
            </p>
            <div className="flex justify-center">
              <Link
                to="/reservation"
                className="bg-[#F7BF57] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#D9BEA3] transition-colors flex items-center gap-2"
              >
                Réserver maintenant
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </ParallaxSection>

        {/* Guided Tour Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Visite Guidée de la Résidence
          </h2>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <GuidedTour />
          </div>
        </div>
      </section>

      {/* Featured Residence */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                A propos de la résidence 
              </h2>
              <p className="text-gray-600 mb-6">
                Profitez d'espaces modernes,
                d'une localisation premium et de services adaptés à vos besoins.
              </p>
              <ul className="space-y-3 mb-8">
                {['Chambres et studios modernes', 'Espaces communs conviviaux', 'Salle de sport', 'Laverie'].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-[#F7BF57] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/residences/gamma"
                className="text-[#D9BEA3] font-semibold hover:text-[#A5CBD9] transition-colors flex items-center gap-2 w-fit"
              >
                Découvrir la résidence
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
              src={room2}
              alt="Chambre Témoin"
              className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Immersive Video Section */}
      {/* Section Vidéo Immersive */}
      {/* <ImmersiveVideo 
        videoUrl="https://www.youtube.com/embed/6LAMKlj0RE1i0-b8" 
        title="Visitez notre résidence" 
        description="Découvrez l'environnement unique de nos résidences étudiantes Eureka"
      /> */}

      {/* Testimonials */}
      <section className="py-16 bg-[#A5CBD9]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ce que disent nos résidents
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à rejoindre la communauté Eureka ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant votre logement étudiant et bénéficiez
            d'un environnement optimal pour réussir vos études.
          </p>
          <Link
            to="/reservation"
            className="bg-[#F7BF57] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#D9BEA3] transition-colors inline-flex items-center gap-2"
          >
            Commencer ma réservation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}