import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, Check, Thermometer, Tv, Wifi, Coffee, Bath, Target, Utensils, Loader } from 'lucide-react';
import PageBanner from '../components/PageBanner';

// Type pour les détails du logement
interface AccommodationDetail {
  id: string;
  name: string;
  type: string;
  size: number;
  price: number;
  description: string;
  features: string[];
  amenities: string[];
  available: boolean;
  availableFrom?: string;
  images: string[];
  videoUrl: string;
  residenceId: string;
  residenceName: string;
  floor: number;
  orientation: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
}

// Données d'exemple pour un logement
const accommodationData: Record<string, AccommodationDetail> = {
  'solo-confort-1': {
    id: 'solo-confort-1',
    name: 'Chambre Solo Confort',
    type: 'chambre',
    size: 15,
    price: 65000,
    description: `
      Profitez d'un espace moderne et confortable, parfaitement aménagé pour les étudiants. 
      Cette chambre Solo Confort offre un environnement idéal pour étudier et se détendre.
      
      Située au 2ème étage de la résidence Eureka, elle bénéficie d'une orientation Est offrant 
      une luminosité naturelle agréable le matin. L'espace a été optimisé pour vous offrir 
      une expérience de vie étudiante de qualité.
    `,
    features: ['Lit simple', 'Kitchenette', 'Salle de bain privative', 'Wifi haut débit', 'Bureau d\'étude'],
    amenities: [
      'Climatisation', 
      'Réfrigérateur', 
      'Plaques de cuisson', 
      'Micro-ondes',
      'Rangements',
      'Prise TV',
      'Prise téléphone',
      'Volets roulants'
    ],
    available: true,
    availableFrom: '2023-09-01',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3'
    ],
    videoUrl: 'https://www.youtube.com/embed/nNzRoMZWlCw',
    residenceId: 'residence-eureka',
    residenceName: 'Résidence Eureka',
    floor: 2,
    orientation: 'Est',
    location: {
      lat: 5.345317,
      lng: -4.024429,
      address: '25 Boulevard de l\'Université, Abidjan'
    }
  },
  'duo-partagee-1': {
    id: 'duo-partagee-1',
    name: 'Chambre Duo Partagée',
    type: 'chambre',
    size: 18,
    price: 45000,
    description: `
      Idéale pour une colocation étudiante, notre chambre Duo Partagée vous offre un espace 
      fonctionnel et convivial à prix abordable. Parfaitement configurée pour deux occupants,
      cette chambre permet de partager les coûts tout en bénéficiant du confort de la résidence.
      
      Située au 3ème étage de la résidence Eureka, cette chambre dispose d'une exposition
      Ouest offrant de beaux couchers de soleil et une lumière douce en fin de journée  *****ajout texte Keria*****.(preuve Thomas)
    `,
    features: ['Deux lits simples', 'Kitchenette', 'Salle de bain partagée', 'Wifi haut débit', 'Double bureau d\'étude'],
    amenities: [
      'Ventilateurs', 
      'Réfrigérateur', 
      'Plaques de cuisson', 
      'Rangements doubles',
      'Prise TV',
      'Prise téléphone',
      'Volets roulants'
    ],
    available: true,
    availableFrom: '2023-08-15',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1536858974309-969976df0d4d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3'
    ],
    videoUrl: 'https://www.youtube.com/embed/5mcj1K88iBw',
    residenceId: 'residence-eureka',
    residenceName: 'Résidence Eureka',
    floor: 3,
    orientation: 'Ouest',
    location: {
      lat: 5.345317,
      lng: -4.024429,
      address: '25 Boulevard de l\'Université, Abidjan'
    }
  },
  'premium-solo-1': {
    id: 'premium-solo-1',
    name: 'Chambre Premium Solo',
    type: 'chambre',
    size: 22,
    price: 85000,
    description: `
        Découvrez notre chambre Premium Solo, l'option la plus luxueuse de notre gamme pour les étudiants exigeants.
        Cet espace spacieux et élégamment aménagé offre tout le confort nécessaire pour une expérience étudiante
        exceptionnelle.
        
        Située au 4ème étage de la résidence Eureka avec une vue imprenable sur le campus universitaire, cette
        chambre bénéficie d'une double exposition Sud-Est garantissant une luminosité optimale tout au long
        de la journée.
        
        Son agencement soigné et ses finitions haut de gamme en font un lieu de vie idéal pour étudier dans 
        les meilleures conditions tout en profitant d'un confort digne d'un appartement moderne.
    `,
    features: [
        'Lit double confort',
        'Coin salon avec fauteuil',
        'Kitchenette équipée',
        'Salle de bain privative avec douche à l\'italienne',
        'Balcon privatif',
        'Wifi haut débit fibre'
    ],
    amenities: [
        'Climatisation réversible', 
        'Réfrigérateur grande capacité', 
        'Plaques à induction', 
        'Four micro-ondes grill',
        'Rangements intégrés',
        'Smart TV 32"',
        'Station de travail ergonomique',
        'Coffre-fort',
        'Volets électriques'
    ],
    available: false,
    availableFrom: '2023-10-15',
    images: [
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?ixlib=rb-4.0.3'
    ],
    videoUrl: 'https://www.youtube.com/embed/jqA6MU6LmVs',
    residenceId: 'residence-eureka',
    residenceName: 'Résidence Eureka',
    floor: 4,
    orientation: 'Sud-Est',
    location: {
        lat: 5.345317,
        lng: -4.024429,
        address: '25 Boulevard de l\'Université, Abidjan'
    }
    },
  
  
  
};

export default function AccommodationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [accommodation, setAccommodation] = useState<AccommodationDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    // Simuler une requête API
    const fetchData = async () => {
      setLoading(true);
      try {
        // Dans une app réelle, vous feriez un fetch() ici
        setTimeout(() => {
          if (id && accommodationData[id]) {
            setAccommodation(accommodationData[id]);
          } else {
            // Gérer le cas où le logement n'est pas trouvé
            console.error('Logement non trouvé');
          }
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const nextImage = () => {
    if (!accommodation) return;
    setCurrentImageIndex((prev) => (prev === accommodation.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    if (!accommodation) return;
    setCurrentImageIndex((prev) => (prev === 0 ? accommodation.images.length - 1 : prev - 1));
  };

  // Fonction pour obtenir l'icône correspondant à une caractéristique
  const getFeatureIcon = (feature: string) => {
    if (feature.toLowerCase().includes('lit')) return <Target size={20} className="text-[#F7BF57]" />;
    if (feature.toLowerCase().includes('wifi')) return <Wifi size={20} className="text-[#F7BF57]" />;
    if (feature.toLowerCase().includes('kitchenette') || feature.toLowerCase().includes('cuisson')) return <Coffee size={20} className="text-[#F7BF57]" />;
    if (feature.toLowerCase().includes('salle de bain')) return <Bath size={20} className="text-[#F7BF57]" />;
    if (feature.toLowerCase().includes('clim')) return <Thermometer size={20} className="text-[#F7BF57]" />;
    if (feature.toLowerCase().includes('tv')) return <Tv size={20} className="text-[#F7BF57]" />;
    if (feature.toLowerCase().includes('micro-ondes') || feature.toLowerCase().includes('refrig') || feature.toLowerCase().includes('cuisi')) return <Utensils size={20} className="text-[#F7BF57]" />;
    return <Check size={20} className="text-[#F7BF57]" />;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <Loader size={40} className="animate-spin mx-auto text-[#F7BF57]" />
          <p className="mt-4 text-gray-600 dark:text-gray-300">Chargement des informations...</p>
        </div>
      </div>
    );
  }

  if (!accommodation) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-10">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Logement non trouvé</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Nous n'avons pas pu trouver les informations pour ce logement.
          </p>
          <Link 
            to="/logements" 
            className="bg-[#F7BF57] hover:bg-[#e6af4a] text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center"
          >
            <ChevronLeft size={16} className="mr-2" />
            Retourner à la liste des logements
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <PageBanner 
        title={accommodation.name} 
        subtitle={`${accommodation.residenceName} • ${accommodation.size} m² • ${accommodation.type.charAt(0).toUpperCase() + accommodation.type.slice(1)}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link 
            to="/logements" 
            className="text-[#F7BF57] hover:text-[#e6af4a] inline-flex items-center"
          >
            <ChevronLeft size={16} className="mr-1" />
            Retour à la liste des logements
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Section principale: galerie + vidéo */}
          <div className="lg:col-span-8">
            {/* Galerie photo */}
            <div className="relative mb-6 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 h-[400px] group">
              <img 
                src={accommodation.images[currentImageIndex]} 
                alt={`${accommodation.name} - vue ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Contrôles de navigation des images */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Image précédente"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Image suivante"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Indicateurs de position */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {accommodation.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentImageIndex 
                        ? 'bg-white' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Voir l'image ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Badge de disponibilité */}
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                accommodation.available 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {accommodation.available ? 'Disponible' : 'Liste d\'attente'}
              </div>
            </div>
            
            {/* Miniatures des images */}
            <div className="grid grid-cols-4 gap-2 mb-8">
              {accommodation.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative h-20 rounded-lg overflow-hidden ${
                    idx === currentImageIndex 
                      ? 'ring-2 ring-[#F7BF57]' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${accommodation.name} - miniature ${idx + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Vidéo YouTube */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Visite virtuelle</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <iframe
                  src={accommodation.videoUrl}
                  title={`Visite virtuelle de ${accommodation.name}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[400px]"
                ></iframe>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Description</h2>
              <div className={`prose prose-gray dark:prose-invert max-w-none ${showFullDescription ? '' : 'line-clamp-4'}`}>
                {accommodation.description.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-gray-700 dark:text-gray-300">{paragraph}</p>
                ))}
              </div>
              
              {accommodation.description.split('\n').length > 2 && (
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-[#F7BF57] hover:text-[#e6af4a] font-medium mt-2"
                >
                  {showFullDescription ? 'Voir moins' : 'Voir plus'}
                </button>
              )}
            </div>
            
            {/* Caractéristiques et équipements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Caractéristiques principales</h2>
                <ul className="space-y-3">
                  {accommodation.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      {getFeatureIcon(feature)}
                      <span className="ml-3 text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Équipements</h2>
                <ul className="space-y-3">
                  {accommodation.amenities.map((amenity, idx) => (
                    <li key={idx} className="flex items-center">
                      {getFeatureIcon(amenity)}
                      <span className="ml-3 text-gray-700 dark:text-gray-300">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Informations supplémentaires */}
            {/* <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Informations supplémentaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Étage</p>
                  <p className="text-gray-900 dark:text-white">{accommodation.floor}ème étage</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Orientation</p>
                  <p className="text-gray-900 dark:text-white">{accommodation.orientation}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Résidence</p>
                  <p className="text-gray-900 dark:text-white">{accommodation.residenceName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Adresse</p>
                  <p className="text-gray-900 dark:text-white">{accommodation.location.address}</p>
                </div>
                {accommodation.available && accommodation.availableFrom && (
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Disponible à partir du</p>
                    <p className="text-gray-900 dark:text-white flex items-center">
                      <Calendar size={16} className="mr-2 text-[#F7BF57]" />
                      {new Date(accommodation.availableFrom).toLocaleDateString('fr-FR', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                )}
              </div>
            </div> */}
          </div>
          
          {/* Sidebar: prix + réservation */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {/* {accommodation.price.toLocaleString()} F.CFA */}
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">/mois</span>
                  </h3>
                  
                  <div className="flex items-center mb-6">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Chambre {accommodation.size} m² • {accommodation.type}
                    </span>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Caution</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {/* {(accommodation.price * 2).toLocaleString()} F.CFA */}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Frais de dossier</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {/* {Math.round(accommodation.price * 0.1).toLocaleString()} F.CFA */}
                      </span>
                    </div>
                    <div className="flex justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <span className="font-semibold text-gray-900 dark:text-white">Total à l'entrée</span>
                      <span className="font-bold text-gray-900 dark:text-white">
                        {/* {(accommodation.price * 3.1).toLocaleString()} F.CFA */}
                      </span>
                    </div>
                  </div>
                  
                  {accommodation.available ? (
                    <Link 
                      to="/reservation"
                      className="block w-full bg-[#F7BF57] hover:bg-[#e6af4a] text-white text-center py-3 px-4 rounded-lg transition-colors font-medium"
                    >
                      Réserver maintenant
                    </Link>
                  ) : (
                    <Link 
                      to="/liste-attente"
                      className="block w-full bg-gray-500 hover:bg-gray-600 text-white text-center py-3 px-4 rounded-lg transition-colors font-medium"
                    >
                      Rejoindre la liste d'attente
                    </Link>
                  )}
                  
                  <div className="mt-4">
                    <button className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 py-3 px-4 rounded-lg transition-colors">
                      Poser une question
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Logements similaires */}
              <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Également disponible</h3>
                <Link
                  to="/logements"
                  className="block text-[#F7BF57] hover:text-[#e6af4a] font-medium text-center mt-3"
                >
                  Voir tous les logements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}