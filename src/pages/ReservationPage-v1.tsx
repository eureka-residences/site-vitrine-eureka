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
        <div className="grid md:grid-cols-3 gap-6">
          {roomTypes.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border-2 hover:border-[#F7BF57] transition-colors cursor-pointer"
              onClick={() => room.available > 0 && handleRoomSelect(room.id)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={room.imageUrl} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#F7BF57]">{room.price} F.CFA/mois</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    room.available > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {room.available > 0 ? `${room.available} disponible${room.available > 1 ? 's' : ''}` : 'Complet'}
                  </span>
                </div>
              </div>
            </div>
          ))}
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
                    required
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom du parent
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                  />
                </div>

                <div className="flex justify-between">
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