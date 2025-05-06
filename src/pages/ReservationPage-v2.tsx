import { useState } from 'react';
import { Check, AlertCircle, Star, Users, Bath, Coffee, ArrowRight, ShowerHead, Wifi } from 'lucide-react';
import PageBanner from '../components/PageBanner';

import room1 from '../assets/images/room1.jpeg';
import room2 from '../assets/images/room2.jpeg';
import room3 from '../assets/images/room3.jpeg';

interface RoomType {
  id: string;
  name: string;
  description: string;
  price: number;
  available: number;
  imageUrl: string;
  features?: string[];
}

const roomTypes: RoomType[] = [
  {
    id: 'standard',
    name: 'Chambre Standard',
    description: 'Chambre individuelle avec salle de bain partagée et de nombreuses commodités.',
    price: 60000,
    available: 5,
    imageUrl: room1,
    features: ['Lit simple', 'Bureau d\'étude', 'Wifi haut débit', 'Rangements']
  },
  {
    id: 'comfort',
    name: 'Chambre Confort',
    description: 'Chambre individuelle avec salle de bain privative pour plus d\'intimité.',
    price: 70000,
    available: 3,
    imageUrl: room2,
    features: ['Lit double', 'Bureau d\'étude', 'Wifi haut débit', 'Salle de bain privée']
  },
  {
    id: 'studio',
    name: 'Studio',
    description: 'Studio complet avec kitchenette équipée, idéal pour l\'indépendance.',
    price: 80000,
    available: 2,
    imageUrl: room3,
    features: ['Lit double', 'Kitchenette', 'Salle de bain privée', 'Espace repas']
  }
];

const ReservationPage = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: ''
  });
  const [reservationNumber, setReservationNumber] = useState<string>('');

  const handleRoomSelect = (roomId: string) => {
    setSelectedRoom(roomId);
    setStep(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a random reservation number
    const number = 'PR-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setReservationNumber(number);
    setStep(3);
  };

  // Helper function to get the room feature icon
  const getFeatureIcon = (feature: string) => {
    if (feature.includes('Lit')) return <Users size={14} />;
    if (feature.includes('Bureau')) return <Coffee size={14} />;
    if (feature.includes('Wifi')) return <Wifi size={14} />;
    if (feature.includes('Salle de bain')) return <Bath size={14} />;
    if (feature.includes('Kitchenette')) return <Coffee size={14} />;
    if (feature.includes('Rangements')) return <ShowerHead size={14} />;
    return <Star size={14} />;
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <PageBanner 
        title="Réservation" 
        subtitle="Réservez votre logement étudiant en quelques étapes simples"
      />
    
      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((number) => (
              <div key={number} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= number ? 'bg-[#F7BF57] text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {number}
                </div>
                {number < 3 && (
                  <div className={`w-24 h-1 ${
                    step > number ? 'bg-[#F7BF57]' : 'bg-gray-200 dark:bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 space-x-16">
            <span className="text-sm text-gray-600 dark:text-gray-400">Choix du logement</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Informations</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Confirmation</span>
          </div>
        </div>

        {/* Step 1: Room Selection */}
        {step === 1 && (
          <div className="py-6">
            <div className="flex flex-col gap-6">
              {roomTypes.map((room) => (
                <div
                  key={room.id}
                  className={`
                    bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden 
                    border border-gray-100 dark:border-gray-700
                    ${room.available > 0 ? "cursor-pointer hover:shadow-lg" : "opacity-75 cursor-not-allowed"} 
                    transition-all duration-300
                  `}
                  onClick={() => room.available > 0 && handleRoomSelect(room.id)}
                  role="button"
                  aria-pressed="false"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      room.available > 0 && handleRoomSelect(room.id);
                    }
                  }}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image section */}
                    <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                      <img 
                        src={room.imageUrl} 
                        alt={room.name} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className={`absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-medium
                        ${room.available > 0 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/60 dark:text-green-200' 
                          : 'bg-red-100 text-red-800 dark:bg-red-900/60 dark:text-red-200'
                        }`}>
                        {room.available > 0 
                          ? `${room.available} disponible${room.available > 1 ? 's' : ''}` 
                          : 'Complet'}
                      </div>
                    </div>
                    
                    {/* Content section */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{room.name}</h3>
                            <div className="w-12 h-0.5 bg-[#F7BF57] my-2"></div>
                          </div>
                          <div className="text-right">
                            {/* <span className="text-2xl font-bold text-[#F7BF57]">{room.price.toLocaleString()}</span> */}
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-1">F.CFA</span>
                            <div className="text-xs text-gray-500 dark:text-gray-500">par mois</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 my-3">{room.description}</p>
                        
                        {/* Features */}
                        <div className="mt-4 grid grid-cols-2 gap-2">
                          {room.features?.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <span className="mr-2 rounded-full bg-gray-100 dark:bg-gray-700 p-1">
                                {getFeatureIcon(feature)}
                              </span>
                              <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* CTA button */}
                      <div className="flex justify-end mt-6">
                        {room.available > 0 && (
                          <button 
                            className="group flex items-center text-[#F7BF57] font-medium hover:text-[#e6af4a] transition-colors"
                            aria-label={`Sélectionner ${room.name}`}
                          >
                            Sélectionner ce logement
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">
                              <ArrowRight size={18} />
                            </span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Contact Information */}
        {step === 2 && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nom de l'étudiant
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    placeholder="Ex: Jean Dupont"
                    aria-describedby="studentNameHelp"
                    required
                    aria-required="true"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                  />
                  <p id="studentNameHelp" className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Entrez le nom complet de l'étudiant qui occupera le logement.
                  </p>
                </div>
          
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nom du parent ou tuteur légal
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    placeholder="Ex: Marie Dupont"
                    aria-describedby="parentNameHelp"
                    required
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                  />
                  <p id="parentNameHelp" className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Nous contacterons cette personne pour finaliser la réservation.
                  </p>
                </div>
          
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ex: parent@exemple.com"
                    aria-describedby="emailHelp"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                  />
                  <p id="emailHelp" className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Vous recevrez les informations de réservation à cette adresse.
                  </p>
                </div>
          
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Ex: +225 01 23 45 67 89"
                    aria-describedby="phoneHelp"
                    pattern="[0-9+\s]+"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                  />
                  <p id="phoneHelp" className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Format: code pays et numéro (nous pouvons vous appeler pour confirmer les détails).
                  </p>
                </div>
          
                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#F7BF57] text-white rounded-md hover:bg-[#D9BEA3] dark:hover:bg-[#F7BF57]/80 transition-colors"
                    aria-label="Soumettre la pré-réservation"
                  >
                    Valider la pré-réservation
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Pré-réservation enregistrée !
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Votre numéro de pré-réservation est :
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-8">
                <span className="text-2xl font-mono font-bold text-gray-900 dark:text-gray-100">{reservationNumber}</span>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-left mb-8">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Prochaines étapes</h3>
                    <ul className="text-blue-800 dark:text-blue-200 space-y-2">
                      <li>1. Vous recevrez un email avec les instructions de paiement</li>
                      <li>2. Un acompte de 500€ est requis pour valider votre pré-réservation</li>
                      <li>3. Le dossier complet devra être fourni sous 7 jours</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                Vous pouvez suivre l'état de votre réservation à tout moment avec votre numéro de pré-réservation
                sur la page de suivi.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationPage;