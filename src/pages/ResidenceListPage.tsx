import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, ChevronDown } from 'lucide-react';
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
        {/* <div className="bg-[#A5CBD9]/10 py-8">
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
        </div> */}
        {/* Search Section - Enhanced */}
        <div className="bg-gradient-to-r from-[#A5CBD9]/20 to-[#F7BF57]/10 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-6">
                {/* <h2 className="text-2xl font-bold text-gray-800">Trouvez votre résidence idéale</h2> */}
                <p className="text-gray-600 mt-2">Filtrez par nom ou emplacement pour découvrir nos résidences</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F7BF57]">
                      <Search size={20} />
                    </div>
                    <input
                      type="text"
                      placeholder="Rechercher une résidence..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent transition-all duration-200"
                      aria-label="Rechercher une résidence"
                    />
                  </div>
                  
                  <div className="md:w-48 relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F7BF57]">
                      <MapPin size={20} />
                    </div>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-gray-50 appearance-none focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent transition-all duration-200"
                      aria-label="Filtrer par ville"
                    >
                      <option value="all">Toutes les villes</option>
                      <option value="yaounde">Yaoundé</option>
                      <option value="douala">Douala</option>
                      <option value="abidjan">Abidjan</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                  
                  <button 
                    className="bg-[#F7BF57] hover:bg-[#e6af4a] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    onClick={() => {/* Vous pouvez ajouter une fonction de recherche explicite ici */}}
                    aria-label="Lancer la recherche"
                  >
                    <Search size={18} className="mr-2" />
                    Rechercher
                  </button>
                </div>
                
                {/* Tags populaires */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-gray-500">Recherches populaires :</span>
                    <button 
                      onClick={() => setSearchTerm("Centre-ville")}
                      className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                    >
                      Centre-ville
                    </button>
                    <button 
                      onClick={() => setSearchTerm("Campus")}
                      className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                    >
                      Près des campus
                    </button>
                    <button 
                      onClick={() => setSelectedCity("abidjan")}
                      className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                    >
                      Abidjan
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Résultats stats - optionnel */}
              <div className="mt-4 text-center text-sm text-gray-600">
                {filteredResidences.length} résidence(s) trouvée(s)
              </div>
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