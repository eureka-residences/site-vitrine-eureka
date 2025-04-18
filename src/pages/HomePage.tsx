import { ArrowRight, Shield, Wifi, Utensils, Users, MapPin, Phone, Mail, Clock } from 'lucide-react';
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
          <h2 className="text-3xl font-bold text-gray-900  dark:text-gray-100 mb-8 text-center">
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                A propos de la résidence 
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Profitez d'espaces modernes,
                d'une localisation premium et de services adaptés à vos besoins.
              </p>
              <ul className="space-y-3 mb-8">
                {['Chambres et studios modernes', 'Espaces communs conviviaux', 'Salle de sport', 'Laverie'].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-700 dark:text-gray-400">
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

      {/* Section Services */}
      <div className="py-16 bg-gray-50 dark:bg-[#A5CBD9]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nous proposons un large éventail de services pour rendre votre séjour confortable et pratique
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sécurité */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-[#F7BF57]/20 dark:bg-[#F7BF57]/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#F7BF57]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Sécurité 24/7</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Accès sécurisé par badge, vidéosurveillance et personnel de sécurité présent jour et nuit pour votre tranquillité.
              </p>
            </div>
            
            {/* Wi-Fi */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-[#F7BF57]/20 dark:bg-[#F7BF57]/10 rounded-full flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6 text-[#F7BF57]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Wi-Fi Haut Débit</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connexion internet fibre optique illimitée dans toutes les chambres et espaces communs pour vos études et loisirs.
              </p>
            </div>
            
            {/* Restauration */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-[#F7BF57]/20 dark:bg-[#F7BF57]/10 rounded-full flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6 text-[#F7BF57]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Restauration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Cafétéria sur place proposant des repas équilibrés et variés. Options végétariennes disponibles et espaces pour cuisiner.
              </p>
            </div>
            
            {/* Espaces communs */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-[#F7BF57]/20 dark:bg-[#F7BF57]/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#F7BF57]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Espaces Communs</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Salles d'études, espaces de coworking, salle de sport et espaces de détente pour étudier et socialiser.
              </p>
            </div>
          </div>
          
          {/* Lien vers tous les services */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Des installations modernes pour faciliter votre vie étudiante
            </p>
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 bg-[#F7BF57] text-white px-6 py-3 rounded-lg hover:bg-[#e6af4a] transition-colors"
            >
              <span>Découvrir tous nos services</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

        {/* Section Contact & Localisation */}
        <div className="py-16 bg-white dark:bg-[#A5CBD9]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Contact & Localisation</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Nous sommes idéalement situés au cœur de la ville, proches des universités et des transports
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Carte */}
              <div className="rounded-lg overflow-hidden shadow-md h-[400px] bg-gray-100 dark:bg-gray-800">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127370.78491418701!2d11.447627126891665!3d3.866009451441545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7977%3A0x7e563358293cf92c!2sYaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1655384878964!5m2!1sfr!2sfr"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation de la résidence Eureka"
                  className="dark:opacity-90"
                ></iframe>
              </div>
              
              {/* Informations de contact */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#F7BF57]/20 dark:bg-[#F7BF57]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <MapPin className="w-5 h-5 text-[#F7BF57]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Adresse</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Yaoundé, Cameroun
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#F7BF57]/20 dark:bg-[#F7BF57]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Phone className="w-5 h-5 text-[#F7BF57]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Téléphone</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        +237 699 88 99 67<br />
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#F7BF57]/20 dark:bg-[#F7BF57]/10 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-[#F7BF57]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        info@eureka-residences.com
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#F7BF57]/20 dark:bg-[#F7BF57]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Clock className="w-5 h-5 text-[#F7BF57]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Horaires</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Lundi - Vendredi: 8h00 - 20h00<br />
                        Samedi: 9h00 - 18h00<br />
                        Dimanche: Fermé (Urgences uniquement)
                      </p>
                    </div>
                  </div>
                </div> */}
                
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full bg-[#F7BF57] text-white py-3 px-4 rounded-md font-medium hover:bg-[#D9BEA3] transition-colors dark:hover:bg-[#F7BF57]/80"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>


      {/* Testimonials */}
      <section className="py-16 bg-[#A5CBD9]/10 dark:bg-[#A5CBD9]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Prêt à rejoindre la communauté Eureka ?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
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