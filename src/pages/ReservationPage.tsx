import { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';
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
  imageUrl: string; // Ajout de la propriété imageUrl

}

const roomTypes: RoomType[] = [
  {
    id: 'standard',
    name: 'Chambre Standard',
    description: 'Chambre individuelle avec salle de bain partagée',
    price: 60000,
    available: 5,
    imageUrl: room1
  },
  {
    id: 'comfort',
    name: 'Chambre Confort',
    description: 'Chambre individuelle avec salle de bain privative',
    price: 70000,
    available: 3,
    imageUrl: room2
  },
  {
    id: 'studio',
    name: 'Studio',
    description: 'Studio complet avec kitchenette',
    price: 80000,
    available: 2,
    imageUrl: room3
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

  return (
    // <div className="container mx-auto px-4 py-8 pt-24">
    <div >
       <PageBanner 
          title="Réservation" 
          subtitle="Réservez votre logement étudiant en quelques étapes simples"
        />
    
        <div className="container mx-auto px-4 py-8 ">

        {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">Réservation de logement étudiant</h1> */}
      

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((number) => (
              <div key={number} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= number ? 'bg-[#F7BF57] text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {number}
                </div>
                {number < 3 && (
                  <div className={`w-24 h-1 ${
                    step > number ? 'bg-[#F7BF57]' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 space-x-16">
            <span className="text-sm text-gray-600">Choix du logement</span>
            <span className="text-sm text-gray-600">Informations</span>
            <span className="text-sm text-gray-600">Confirmation</span>
          </div>
        </div>

        {/* Step 1: Room Selection */}
        {/* {step === 1 && (
          <div className="grid md:grid-cols-3 gap-6">
            {roomTypes.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-lg shadow-md p-6 border-2 hover:border-[#F7BF57] transition-colors cursor-pointer"
                onClick={() => room.available > 0 && handleRoomSelect(room.id)}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-[#F7BF57]">{room.price}€/mois</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    room.available > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {room.available > 0 ? `${room.available} disponible${room.available > 1 ? 's' : ''}` : 'Complet'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )} */}
        {step === 1 && (
        // <div className="grid md:grid-cols-3 gap-6">
        //   {roomTypes.map((room) => (
        //     <div
        //       key={room.id}
        //       className="bg-white rounded-lg shadow-md overflow-hidden border-2 hover:border-[#F7BF57] transition-colors cursor-pointer"
        //       onClick={() => room.available > 0 && handleRoomSelect(room.id)}
        //     >
        //       <div className="h-48 overflow-hidden">
        //         <img 
        //           src={room.imageUrl} 
        //           alt={room.name} 
        //           className="w-full h-full object-cover transition-transform hover:scale-105"
        //         />
        //       </div>
        //       <div className="p-6">
        //         <h3 className="text-xl font-semibold text-gray-900 mb-2">{room.name}</h3>
        //         <p className="text-gray-600 mb-4">{room.description}</p>
        //         <div className="flex justify-between items-center">
        //           <span className="text-2xl font-bold text-[#F7BF57]">{room.price} F.CFA/mois</span>
        //           <span className={`px-3 py-1 rounded-full text-sm ${
        //             room.available > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        //           }`}>
        //             {room.available > 0 ? `${room.available} disponible${room.available > 1 ? 's' : ''}` : 'Complet'}
        //           </span>
        //         </div>
        //       </div>
        //     </div>
        //   ))}
        // </div>
        <div className="py-8">
          <div className="grid md:grid-cols-3 gap-8">
            {roomTypes.map((room) => (
              <div
                key={room.id}
                className={`
                  bg-white rounded-xl shadow-lg overflow-hidden 
                  transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                  ${room.available > 0 ? "cursor-pointer" : "opacity-75 cursor-not-allowed"} 
                  relative group
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
                {/* Overlay au survol */}
                {room.available > 0 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center z-10 p-6">
                    <span className="text-white font-medium text-lg px-6 py-3 bg-[#F7BF57] rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Sélectionner
                    </span>
                  </div>
                )}
                
                {/* Badge disponibilité (affiché en permanence) */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`
                    px-4 py-1.5 rounded-full text-sm font-medium
                    ${room.available > 0 
                      ? 'bg-green-500 text-white' 
                      : 'bg-red-500 text-white'}
                  `}>
                    {room.available > 0 
                      ? `${room.available} disponible${room.available > 1 ? 's' : ''}` 
                      : 'Complet'}
                  </span>
                </div>
                
                {/* Image avec effet zoom */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={room.imageUrl} 
                    alt={room.name} 
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{room.name}</h3>
                  <div className="w-16 h-1 bg-[#F7BF57] mb-4"></div>
                  <p className="text-gray-600 mb-6 min-h-[3rem]">{room.description}</p>
                  
                  {/* Ajout de caractéristiques */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">Wifi</span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">Bureau</span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">Rangements</span>
                    {room.id === 'comfort' || room.id === 'studio' ? 
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">Salle de bain privative</span> : null}
                    {room.id === 'studio' ? 
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">Kitchenette</span> : null}
                  </div>
                  
                  {/* Prix avec design amélioré */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-3xl font-bold text-[#F7BF57]">
                          {room.price.toLocaleString()}
                        </span>
                        <span className="text-gray-600 ml-1">F.CFA</span>
                        <span className="text-sm text-gray-500 block">par mois</span>
                      </div>
                      
                      {room.available > 0 && (
                        <div className="rounded-full bg-[#F7BF57]/10 p-3 text-[#F7BF57]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </div>
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
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                />
                <p id="studentNameHelp" className="mt-1 text-sm text-gray-500">
                  Entrez le nom complet de l'étudiant qui occupera le logement.
                </p>
              </div>
        
              <div>
                <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                />
                <p id="parentNameHelp" className="mt-1 text-sm text-gray-500">
                  Nous contacterons cette personne pour finaliser la réservation.
                </p>
              </div>
        
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                />
                <p id="emailHelp" className="mt-1 text-sm text-gray-500">
                  Vous recevrez les informations de réservation à cette adresse.
                </p>
              </div>
        
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                />
                <p id="phoneHelp" className="mt-1 text-sm text-gray-500">
                  Format: code pays et numéro (nous pouvons vous appeler pour confirmer les détails).
                </p>
              </div>
        
              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Retour
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#F7BF57] text-white rounded-md hover:bg-[#D9BEA3] transition-colors"
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
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Pré-réservation enregistrée !
              </h2>
              <p className="text-gray-600 mb-6">
                Votre numéro de pré-réservation est :
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-8">
                <span className="text-2xl font-mono font-bold text-gray-900">{reservationNumber}</span>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left mb-8">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Prochaines étapes</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>1. Vous recevrez un email avec les instructions de paiement</li>
                      <li>2. Un acompte de 500€ est requis pour valider votre pré-réservation</li>
                      <li>3. Le dossier complet devra être fourni sous 7 jours</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600">
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