import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Home, Shield, Wifi, Coffee } from 'lucide-react';
import PageBanner from '../components/PageBanner';

// Types pour les logements
interface Accommodation {
  id: string;
  name: string;
  type: string;
  size: number;
  price: number;
  features: string[];
  available: boolean;
  imageUrl: string;
  residenceId: string;
  residenceName: string;
}

// Données de démonstration pour les logements
const accommodations: Accommodation[] = [
  {
    id: 'solo-confort-1',
    name: 'Chambre Solo Confort',
    type: 'chambre',
    size: 15,
    price: 65000,
    features: ['Lit simple', 'Kitchenette', 'Salle de bain privative', 'Wifi'],
    available: true,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3',
    residenceId: 'residence-eureka',
    residenceName: 'Résidence Eureka'
  },
  {
    id: 'duo-partagee-1',
    name: 'Chambre Duo Partagée',
    type: 'chambre',
    size: 18,
    price: 45000,
    features: ['Deux lits simples', 'Kitchenette', 'Salle de bain partagée', 'Wifi'],
    available: true,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3',
    residenceId: 'residence-eureka',
    residenceName: 'Résidence Eureka'
  },
  {
    id: 'premium-solo-1',
    name: 'Chambre Premium Solo',
    type: 'chambre',
    size: 18,
    price: 85000,
    features: ['Lit double', 'Kitchenette équipée', 'Salle de bain privative', 'Balcon'],
    available: false,
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3',
    residenceId: 'residence-eureka',
    residenceName: 'Résidence Eureka'
  },
  // Vous pouvez ajouter d'autres logements ici
];

export default function AccommodationListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [availabilityFilter, setAvailabilityFilter] = useState('all');

  // Filtre des logements selon les critères
  const filteredAccommodations = accommodations.filter(accommodation => {
    const matchesSearch = accommodation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         accommodation.residenceName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || accommodation.type === typeFilter;
    const matchesAvailability = availabilityFilter === 'all' || 
                               (availabilityFilter === 'available' && accommodation.available) ||
                               (availabilityFilter === 'unavailable' && !accommodation.available);
    
    return matchesSearch && matchesType && matchesAvailability;
  });

  // Fonction pour obtenir l'icône correspondant à une caractéristique
  const getFeatureIcon = (feature: string) => {
    if (feature.toLowerCase().includes('lit')) return <Home size={16} className="text-[#F7BF57]" />;
    if (feature.toLowerCase().includes('wifi')) return <Wifi size={16} className="text-[#F7BF57]" />;
    if (feature.toLowerCase().includes('kitchenette')) return <Coffee size={16} className="text-[#F7BF57]" />;
    return <Shield size={16} className="text-[#F7BF57]" />;
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <PageBanner 
        title="Tous nos logements" 
        subtitle="Découvrez l'ensemble de nos chambres et studios disponibles dans nos résidences"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filtres et recherche */}
        <div className="bg-gradient-to-r from-[#A5CBD9]/20 to-[#F7BF57]/15 dark:from-[#A5CBD9]/10 dark:to-[#F7BF57]/10 rounded-xl p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Barre de recherche */}
            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F7BF57]">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Rechercher un logement..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent text-gray-800 dark:text-gray-100"
                aria-label="Rechercher un logement"
              />
            </div>
            
            {/* Filtre par type */}
            <div className="md:w-48">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent text-gray-800 dark:text-gray-100"
                aria-label="Filtrer par type"
              >
                <option value="all">Tous les types</option>
                <option value="chambre">Chambres</option>
                <option value="studio">Studios</option>
              </select>
            </div>
            
            {/* Filtre par disponibilité */}
            <div className="md:w-48">
              <select
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent text-gray-800 dark:text-gray-100"
                aria-label="Filtrer par disponibilité"
              >
                <option value="all">Toutes disponibilités</option>
                <option value="available">Disponibles</option>
                <option value="unavailable">Liste d'attente</option>
              </select>
            </div>
            
            <button
              className="bg-[#F7BF57] hover:bg-[#e6af4a] text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              aria-label="Filtrer les résultats"
            >
              <Filter size={18} className="mr-2" />
              Filtrer
            </button>
          </div>
        </div>

        {/* Nombre de résultats */}
        <div className="mb-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {filteredAccommodations.length} logement{filteredAccommodations.length > 1 ? 's' : ''} trouvé{filteredAccommodations.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Liste des logements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAccommodations.map((accommodation) => (
            <div 
              key={accommodation.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image du logement */}
              <div className="relative h-48">
                <img 
                  src={accommodation.imageUrl} 
                  alt={accommodation.name} 
                  className="w-full h-full object-cover"
                />
                {/* Badge de disponibilité */}
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${
                  accommodation.available 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/60 dark:text-green-200'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/60 dark:text-red-200'
                }`}>
                  {accommodation.available ? 'Disponible' : 'Liste d\'attente'}
                </div>
              </div>
              
              {/* Contenu */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {accommodation.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {accommodation.residenceName}
                  </p>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#F7BF57] font-medium">{accommodation.size} m²</span>
                  <span className="text-gray-900 dark:text-gray-100 font-bold">
                     {/* {accommodation.price.toLocaleString()} F.CFA */}
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">/mois</span>
                  </span>
                </div>
                
                {/* Caractéristiques */}
                <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mb-5">
                  <div className="grid grid-cols-2 gap-2">
                    {accommodation.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        {getFeatureIcon(feature)}
                        <span className="ml-2">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Boutons d'action */}
                <div className="flex justify-between">
                  {/* <Link
                    to={`/residences/${accommodation.residenceId}`}
                    className="text-[#F7BF57] hover:text-[#e6af4a] text-sm font-medium"
                  >
                    Voir la résidence
                  </Link> */}
                  <Link
                    to={`/logements/${accommodation.id}`}
                    className="text-[#F7BF57] hover:text-[#e6af4a] text-sm font-medium"
                    >
                    Plus de détails
                </Link>
                  
                  {accommodation.available ? (
                    <Link
                      to="/reservation"
                      className="bg-[#F7BF57] hover:bg-[#e6af4a] text-white px-4 py-2 rounded-md text-sm transition-colors"
                    >
                      Réserver
                    </Link>
                  ) : (
                    <Link
                      to="/liste-attente"
                      className="bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
                    >
                      Liste d'attente
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}