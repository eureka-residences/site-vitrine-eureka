import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Wifi, 
  Shield, 
  Coffee, 
  Users, 
  ChevronDown,
  Bath,
  ShowerHead,
  Check,
  ArrowRight,
  Building,
  BadgeCheck,
  Star,
  Calendar,

} from 'lucide-react';



// Images from Unsplash (free to use)
const residenceImage = "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
const roomStandard = "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
const roomComfort = "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
const roomStudio = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

// Types
interface RoomType {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  size: number;
  images: string[];
  features: string[];
  available: boolean;
}

interface Residence {
  id: string;
  name: string;
  address: string;
  city: string;
  description: string;
  mainImage: string;
  images: string[];
  phone: string;
  email: string;
  openingHours: string;
  roomTypes: RoomType[];
  amenities: string[];
  nearbyPlaces: { name: string; distance: string }[];
  availability?: string;
  capacity?: number;
}

// Mock data
const residences: Record<string, Residence> = {
  'residence-eureka': {
    id: 'residence-eureka',
    name: 'Résidence Eureka',
    address: 'Carrefour de l\'Université',
    city: 'Yaoundé',
    description: "Notre résidence principale située près de l'université Saint-Jean. Moderne et confortable, elle offre un environnement idéal pour vos études.",
    mainImage: residenceImage,
    images: [residenceImage, residenceImage, residenceImage],
    phone: '+225 07 12 34 56 78',
    email: 'contact@eureka-residences.com',
    openingHours: 'Lun-Ven: 8h-18h, Sam: 9h-12h',
    availability: 'Septembre 2024',
    capacity: 150,
    roomTypes: [
      {
        id: 'solo-confort',
        name: 'Chambre Solo Confort',
        tagline: "L'indépendance tout confort !",
        description: 'Une chambre moderne et meublée, idéale pour une personne, avec lit simple (90x200), kitchenette, salle de bain privative et balcon.',
        price: 65000,
        size: 15,
        images: [roomStandard],
        features: ['Lit simple (90x200)', 'Kitchenette', 'Salle de bain privative', 'Balcon', 'Bureau d\'étude', 'Wifi haut débit', 'Rangements'],
        available: true
      },
      {
        id: 'duo-partagee',
        name: 'Chambre Duo Partagée',
        tagline: "Le bon plan pour colocs !",
        description: 'Spacieuse et optimisée pour deux étudiants, avec deux lits simples (90x200), kitchenette, salle de bain et balcon pour respirer.',
        price: 45000,
        size: 18,
        images: [roomComfort],
        features: ['Deux lits simples (90x200)', 'Kitchenette', 'Salle de bain partagée', 'Balcon', 'Bureau d\'étude pour chaque étudiant', 'Wifi haut débit', 'Rangements'],
        available: true
      },
      {
        id: 'premium-solo',
        name: 'Chambre Premium Solo',
        tagline: "Luxe et espace rien que pour vous.",
        description: 'Une chambre haut de gamme pour une personne, avec un grand lit double (180x200), kitchenette équipée, salle de bain privative et balcon. Le confort d\'un studio, l\'ambiance d\'une résidence.',
        price: 85000,
        size: 18,
        images: [roomStudio],
        features: ['Lit double (180x200)', 'Kitchenette équipée', 'Salle de bain privative', 'Balcon', 'Grand bureau d\'étude', 'Wifi haut débit', 'Rangements spacieux'],
        available: false
      }
    ],
    amenities: [
      'Sécurité 24/7',
      'Wifi haut débit',
      'Salle d\'étude',
      'Cafétéria',
      'Laverie',
      'Salle de sport',
      'Espaces détente',
      'Local à vélos'
    ],
    nearbyPlaces: [
      { name: 'Université d\'Abidjan', distance: '350 mètres' },
      { name: 'Bibliothèque municipale', distance: '500 mètres' },
      { name: 'Centre commercial', distance: '800 mètres' },
      { name: 'Parc public', distance: '600 mètres' },
      { name: 'Station de bus', distance: '200 mètres' }
    ]
  }
};

const ResidenceDetailPage = () => {
  const { id = 'residence-eureka' } = useParams<{ id?: string }>();
  const residence = residences[id];
  const [activeTab, setActiveTab] = useState<string>(residence?.roomTypes[0]?.id || '');
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!residence) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center p-8 max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <div className="text-red-500 dark:text-red-400 text-5xl mb-4">404</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Résidence non trouvée</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            La résidence que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link to="/" className="bg-[#F7BF57] hover:bg-[#e6af4a] text-white py-2 px-4 rounded-lg inline-block">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes('Sécurité')) return <Shield size={18} className="text-[#F7BF57]" />;
    if (amenity.includes('Wifi')) return <Wifi size={18} className="text-[#F7BF57]" />;
    if (amenity.includes('étude')) return <Users size={18} className="text-[#F7BF57]" />;
    if (amenity.includes('Cafétéria')) return <Coffee size={18} className="text-[#F7BF57]" />;
    return <Check size={18} className="text-[#F7BF57]" />;
  };

  const getRoomFeatureIcon = (feature: string) => {
    if (feature.includes('Lit')) return <Users size={16} className="text-gray-600 dark:text-gray-400" />;
    if (feature.includes('Bureau')) return <Coffee size={16} className="text-gray-600 dark:text-gray-400" />;
    if (feature.includes('Wifi')) return <Wifi size={16} className="text-gray-600 dark:text-gray-400" />;
    if (feature.includes('bain')) return <Bath size={16} className="text-gray-600 dark:text-gray-400" />;
    if (feature.includes('Kitchenette')) return <Coffee size={16} className="text-gray-600 dark:text-gray-400" />;
    if (feature.includes('Balcon')) return <MapPin size={16} className="text-gray-600 dark:text-gray-400" />;
    if (feature.includes('Rangements')) return <ShowerHead size={16} className="text-gray-600 dark:text-gray-400" />;
    return <Check size={16} className="text-gray-600 dark:text-gray-400" />;
  };

  // Reste du code pour getAmenityIcon et truncateDescription reste inchangé...

  return (
    <div className="bg-white dark:bg-gray-900 pb-12">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src={residence.mainImage}
          alt={residence.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">{residence.name}</h1>
              <p className="text-xl mb-8">{residence.description}</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-[#F7BF57]" />
                  <span>{residence.address}, {residence.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-[#F7BF57]" />
                  <span>Disponible dès {residence.availability || 'Septembre 2024'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-[#F7BF57]" />
                  <span>{residence.capacity || '150'} places</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content (70%) */}
          <div className="lg:w-8/12">
            {/* Types de logements heading */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Types de logements</h2>
              <div className="w-20 h-1 bg-[#F7BF57] mt-2"></div>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                Découvrez nos différentes options de logement pour répondre à tous les besoins et budgets.
              </p>
            </div>

            {/* Room type tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex space-x-4">
                {residence.roomTypes.map(room => (
                  <button
                    key={room.id}
                    onClick={() => setActiveTab(room.id)}
                    className={`pb-3 px-1 font-medium text-lg relative transition-colors ${
                      activeTab === room.id 
                        ? 'text-[#F7BF57]' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                  >
                    {room.name}
                    {activeTab === room.id && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#F7BF57] rounded-t-lg"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Room type details */}
            {residence.roomTypes.map(room => (
              <div 
                key={room.id} 
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8 transition-opacity duration-300 ${
                  activeTab === room.id ? 'opacity-100' : 'hidden'
                }`}
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Room image */}
                  <div className="md:col-span-1 relative">
                    <img 
                      src={room.images[0]} 
                      alt={room.name}
                      className="w-full h-full object-cover min-h-[250px]" 
                    />
                    {!room.available && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white">
                        <div className="text-center bg-red-600/80 py-2 px-4 rounded">
                          <p className="font-bold text-lg">Complet</p>
                          <p className="text-sm">Inscrivez-vous sur la liste d'attente</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Room details */}
                  <div className="md:col-span-2 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{room.name}</h3>
                        <p className="text-[#F7BF57] font-medium">{room.size} m²</p>
                        <p className="text-sm italic mt-1 text-gray-500 dark:text-gray-400">{room.tagline}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          {/* {room.price.toLocaleString()} <span className="text-sm font-normal text-gray-500 dark:text-gray-400">F.CFA/mois</span> */}
                        </div>
                        <div className="flex items-center justify-end mt-1">
                          {room.available ? (
                            <span className="inline-flex items-center text-sm text-green-600 dark:text-green-400">
                              <BadgeCheck size={14} className="mr-1" />
                              Disponible
                            </span>
                          ) : (
                            <span className="inline-flex items-center text-sm text-red-500 dark:text-red-400">
                              Liste d'attente
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mt-3 mb-4">
                      {room.description}
                    </p>
                    
                    <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Caractéristiques</h4>
                      <div className="grid grid-cols-2 gap-y-3">
                        {room.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            {getRoomFeatureIcon(feature)}
                            <span className="ml-2 text-gray-700 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      {room.available ? (
                        <Link 
                          to="/reservation" 
                          className="inline-flex items-center bg-[#F7BF57] hover:bg-[#e6af4a] text-white py-2 px-4 rounded-lg font-medium transition-colors"
                        >
                          Réserver ce type de logement
                          <ArrowRight size={16} className="ml-2" />
                        </Link>
                      ) : (
                        <Link 
                          to="/liste-attente" 
                          className="inline-flex items-center bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                        >
                          S'inscrire sur la liste d'attente
                          <ArrowRight size={16} className="ml-2" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Room comparison table */}
            <div className="hidden lg:block bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Comparaison des logements</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="pb-3 text-gray-500 dark:text-gray-400">Type</th>
                        <th className="pb-3 text-gray-500 dark:text-gray-400">Surface</th>
                        <th className="pb-3 text-gray-500 dark:text-gray-400">Prix</th>
                        <th className="pb-3 text-gray-500 dark:text-gray-400">Disponibilité</th>
                        <th className="pb-3 text-gray-500 dark:text-gray-400"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {residence.roomTypes.map(room => (
                        <tr key={room.id} className="border-b border-gray-100 dark:border-gray-700">
                          <td className="py-4">
                            <div className="font-semibold text-gray-900 dark:text-gray-100">{room.name}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{room.tagline}</div>
                          </td>
                          <td className="py-4 text-gray-600 dark:text-gray-300">{room.size} m²</td>
                          <td className="py-4">
                            {/* <div className="font-semibold text-gray-900 dark:text-gray-100">{room.price.toLocaleString()} F.CFA</div> */}
                            <div className="text-xs text-gray-500 dark:text-gray-400">par mois</div>
                          </td>
                          <td className="py-4">
                            {room.available ? (
                              <span className="inline-flex items-center text-sm text-green-600 dark:text-green-400">
                                <BadgeCheck size={14} className="mr-1" />
                                Disponible
                              </span>
                            ) : (
                              <span className="inline-flex items-center text-sm text-red-500 dark:text-red-400">
                                Liste d'attente
                              </span>
                            )}
                          </td>
                          <td className="py-4">
                            {room.available ? (
                              <Link 
                                to="/reservation" 
                                className="text-[#F7BF57] hover:text-[#e6af4a] font-medium"
                              >
                                Réserver
                              </Link>
                            ) : (
                              <Link 
                                to="/liste-attente" 
                                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium"
                              >
                                Liste d'attente
                              </Link>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar (30%) reste inchangé */}
          <div className="lg:w-4/12">
            {/* Contact information */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 pb-3 mb-4">
                Informations de contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone size={18} className="text-[#F7BF57] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Téléphone</p>
                    <p className="text-gray-900 dark:text-gray-100">{residence.phone}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail size={18} className="text-[#F7BF57] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a href={`mailto:${residence.email}`} className="text-gray-900 dark:text-gray-100 hover:text-[#F7BF57] dark:hover:text-[#F7BF57]">
                      {residence.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock size={18} className="text-[#F7BF57] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Horaires d'ouverture</p>
                    <p className="text-gray-900 dark:text-gray-100">{residence.openingHours}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="text-[#F7BF57] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Adresse</p>
                    <p className="text-gray-900 dark:text-gray-100">{residence.address}, {residence.city}</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="block w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-center py-2 rounded-md text-gray-700 dark:text-gray-200 font-medium transition-colors">
                  Voir sur Google Maps
                </a>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 pb-3 mb-4">
                Services et équipements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {residence.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    {getAmenityIcon(amenity)}
                    <span className="ml-2 text-gray-700 dark:text-gray-300">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby places */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 pb-3 mb-4">
                À proximité
              </h3>
              <ul className="space-y-3">
                {residence.nearbyPlaces.map((place, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300 flex items-center">
                      <MapPin size={14} className="text-[#F7BF57] mr-2" />
                      {place.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{place.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Call to action - Centered at bottom */}
        <div className="max-w-2xl mx-auto my-12">
          <div className="bg-gradient-to-r from-[#F7BF57]/20 to-[#D9BEA3]/20 dark:from-[#F7BF57]/10 dark:to-[#D9BEA3]/10 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-[#F7BF57]/20 mr-3">
                <Star size={20} className="text-[#F7BF57]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Réservez votre logement</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ne manquez pas l'opportunité de réserver votre logement pour la prochaine année universitaire.
            </p>
            <Link
              to="/reservation"
              className="block w-full bg-[#F7BF57] hover:bg-[#e6af4a] text-center py-3 rounded-lg text-white font-medium transition-colors"
            >
              Réserver maintenant
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidenceDetailPage;