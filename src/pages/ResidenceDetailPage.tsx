import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Users, Wifi, UtensilsCrossed, Dumbbell, Shield } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import type { Residence } from '../types';

const residences: Record<string, Residence> = {
  'gamma': {
    id: 'gamma',
    name: 'Résidence Gamma',
    address: '15 Rue des Arts, Bordeaux Centre',
    description: 'Au cœur de Bordeaux, la résidence Gamma offre un cadre idéal pour les étudiants cherchant à combiner confort, modernité et emplacement premium. À quelques pas des principales universités et des commerces, cette résidence allie parfaitement vie étudiante et praticité.',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2000',
    availability: 'Septembre 2024',
    capacity: 150,
    blocks: [
      {
        id: 'a',
        name: 'Bloc A',
        capacity: 50,
        rooms: [
          {
            id: 'a1',
            floor: 1,
            area: 18,
            price: 450,
            available: true,
            imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2000',
            type: 'studio'
          },
          {
            id: 'a2',
            floor: 2,
            area: 20,
            price: 500,
            available: true,
            imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2000',
            type: 'studio'
          }
        ]
      }
    ]
  },
  'sigma': {
    id: 'sigma',
    name: 'Résidence Sigma',
    address: '42 Avenue des Sciences, Campus Talence',
    description: 'Située au cœur du campus universitaire de Talence, la résidence Sigma est l\'endroit idéal pour les étudiants cherchant la proximité avec leurs lieux d\'études tout en profitant d\'un environnement calme et verdoyant.',
    imageUrl: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=2000',
    availability: 'Septembre 2024',
    capacity: 200,
    blocks: [
      {
        id: 'b',
        name: 'Bloc B',
        capacity: 75,
        rooms: [
          {
            id: 'b1',
            floor: 1,
            area: 22,
            price: 550,
            available: true,
            imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2000',
            type: 'studio'
          }
        ]
      }
    ]
  }
};

const amenities = [
  { icon: <Wifi className="w-6 h-6" />, name: 'Wi-Fi Haut Débit' },
  { icon: <UtensilsCrossed className="w-6 h-6" />, name: 'Cafétéria' },
  { icon: <Dumbbell className="w-6 h-6" />, name: 'Salle de Sport' },
  { icon: <Shield className="w-6 h-6" />, name: 'Sécurité 24/7' }
];

export default function ResidenceDetailPage() {
  const { id } = useParams();
  const residence = residences[id || ''];

  const availableRooms = useMemo(() => {
    if (!residence) return 0;
    return residence.blocks.reduce((total, block) => 
      total + block.rooms.filter(room => room.available).length, 0);
  }, [residence]);

  if (!residence) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Résidence non trouvée
          </h1>
          <Link 
            to="/residences"
            className="text-[#F7BF57] hover:text-[#D9BEA3] transition-colors"
          >
            Retour à la liste des résidences
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageBanner 
        title={residence.name}
        subtitle={residence.address}
      />

      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src={residence.imageUrl}
          alt={residence.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">{residence.name}</h1>
              <p className="text-xl mb-8">{residence.description}</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-[#F7BF57]" />
                  <span>{residence.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-[#F7BF57]" />
                  <span>Disponible dès {residence.availability}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-[#F7BF57]" />
                  <span>{residence.capacity} places</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column: Room Types */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos Logements</h2>
              <div className="grid gap-6">
                {residence.blocks.map(block => (
                  <div key={block.id}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{block.name}</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {block.rooms.map(room => (
                        <div 
                          key={room.id}
                          className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                          <div className="relative h-48">
                            <img
                              src={room.imageUrl}
                              alt={`${residence.name} - ${room.type}`}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            {room.available && (
                              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                                Disponible
                              </div>
                            )}
                          </div>
                          <div className="p-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {room.type === 'studio' ? 'Studio' : 'Chambre'} - {room.area}m²
                            </h4>
                            <div className="flex justify-between items-center mb-4">
                              <span className="text-2xl font-bold text-[#F7BF57]">
                                {room.price}€
                                <span className="text-sm text-gray-600 font-normal">/mois</span>
                              </span>
                              <span className="text-gray-600">Étage {room.floor}</span>
                            </div>
                            <Link
                              to="/reservation"
                              className="block w-full text-center bg-[#F7BF57] text-white py-2 rounded-md hover:bg-[#D9BEA3] transition-colors"
                            >
                              Réserver
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Info & CTA */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Informations rapides
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Chambres disponibles</span>
                  <span className="font-semibold text-gray-900">{availableRooms}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Capacité totale</span>
                  <span className="font-semibold text-gray-900">{residence.capacity} places</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Date de disponibilité</span>
                  <span className="font-semibold text-gray-900">{residence.availability}</span>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Services inclus
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="text-[#F7BF57]">{amenity.icon}</div>
                    <span className="text-gray-600">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#F7BF57]/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Intéressé(e) ?
              </h3>
              <p className="text-gray-600 mb-4">
                Réservez dès maintenant votre logement pour la prochaine rentrée
              </p>
              <Link
                to="/reservation"
                className="block w-full text-center bg-[#F7BF57] text-white py-3 rounded-md hover:bg-[#D9BEA3] transition-colors"
              >
                Réserver maintenant
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}