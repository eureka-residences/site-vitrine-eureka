import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import type { Residence } from '../types';
import PageBanner from '../components/PageBanner';


const residences: Residence[] = [
  {
    id: 'gamma',
    name: 'Gamma',
    address: '15 Rue des Arts, Yaounde Centre',
    description: 'Au cœur de Yaoudé, la résidence Gamma offre un cadre idéal pour les étudiants.',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2000',
    availability: 'Septembre 2024',
    capacity: 150,
    blocks: []
  },
  {
    id: 'sigma',
    name: 'Sigma',
    address: '42 Avenue des Sciences, Campus Douala',
    description: 'À proximité immédiate du campus, la résidence Sigma allie confort et praticité.',
    imageUrl: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=2000',
    availability: 'Septembre 2024',
    capacity: 200,
    blocks: []
  },

  {
    id: 'theta',
    name: 'Theta',
    address: '42 Avenue des Sciences, Campus Douala',
    description: 'À proximité immédiate du campus, la résidence Sigma allie confort et praticité.',
    imageUrl: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=2000',
    availability: 'Septembre 2024',
    capacity: 200,
    blocks: []
  },
  {
    id: 'eureka',
    name: 'Eureka',
    address: '42 Avenue des Sciences, Campus Douala',
    description: 'À proximité immédiate du campus, la résidence Sigma allie confort et praticité.',
    imageUrl: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=2000',
    availability: 'Septembre 2024',
    capacity: 200,
    blocks: []
  },
];

export default function ResidenceListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');

  const filteredResidences = residences.filter(residence => {
    const matchesSearch = residence.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         residence.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === 'all' || residence.address.toLowerCase().includes(selectedCity.toLowerCase());
    return matchesSearch && matchesCity;
  });

  return (
    <div>
      <PageBanner 
        title="Nos Résidences" 
        subtitle="Découvrez nos résidences étudiantes dans les meilleures villes universitaires"
      />
    
      <div className="pt-0">
        {/* Search Section */}
        <div className="bg-[#A5CBD9]/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher une résidence..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                />
              </div>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
              >
                <option value="all">Toutes les villes</option>
                <option value="yaounde">Yaoundé</option>
                <option value="douala">Douala</option>
              </select>
            </div>
          </div>
        </div>

        {/* Residences List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredResidences.map(residence => (
              <Link
                key={residence.id}
                to={`/residences/${residence.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={residence.imageUrl}
                    alt={residence.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{residence.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin size={16} />
                    <span>{residence.address}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Calendar size={16} />
                      <span>{residence.availability}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Users size={16} />
                      <span>{residence.capacity} places</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{residence.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}