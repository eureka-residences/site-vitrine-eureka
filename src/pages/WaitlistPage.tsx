import React, { useState } from 'react';
import { Check, AlertCircle, Clock } from 'lucide-react';
import PageBanner from '../components/PageBanner';

interface WaitlistFormData {
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  preferredRoom: string;
  startDate: string;
  comments: string;
}

const WaitlistPage = () => {
  const [step, setStep] = useState<number>(1);
  const [waitlistNumber, setWaitlistNumber] = useState<string>('');
  const [formData, setFormData] = useState<WaitlistFormData>({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    preferredRoom: 'standard',
    startDate: '',
    comments: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Générer un numéro de liste d'attente
    const number = 'WL-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setWaitlistNumber(number);
    setStep(2);
  };

  return (
    <div>
      <PageBanner 
        title="Liste d'attente" 
        subtitle="Inscrivez-vous sur notre liste d'attente pour être prioritaire dès qu'un logement se libère"
      />
      
      <div className="container mx-auto px-4 py-8">
        {step === 1 && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-start p-4 mb-6 bg-amber-50 border border-amber-200 rounded-lg">
                <Clock className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Pourquoi s'inscrire sur la liste d'attente ?</h3>
                  <p className="text-amber-800">
                    Toutes nos résidences sont actuellement complètes, mais des désistements peuvent survenir. 
                    En vous inscrivant sur notre liste d'attente, vous serez contacté en priorité dès qu'un logement 
                    correspondant à vos critères se libère.
                  </p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                    />
                    <p id="studentNameHelp" className="mt-1 text-sm text-gray-500">
                      Nom complet de l'étudiant qui occupera le logement.
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
                      Personne à contacter en cas de disponibilité.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
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
                      Nous vous contacterons à cette adresse en priorité.
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
                      Format: code pays et numéro de téléphone.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredRoom" className="block text-sm font-medium text-gray-700 mb-2">
                      Type de logement souhaité
                    </label>
                    <select
                      id="preferredRoom"
                      name="preferredRoom"
                      value={formData.preferredRoom}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                      aria-describedby="preferredRoomHelp"
                    >
                      <option value="standard">Chambre Standard</option>
                      <option value="comfort">Chambre Confort</option>
                      <option value="studio">Studio</option>
                      <option value="any">N'importe quel type</option>
                    </select>
                    <p id="preferredRoomHelp" className="mt-1 text-sm text-gray-500">
                      Sélectionnez le type de logement que vous préférez.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Date d'emménagement souhaitée
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      aria-describedby="startDateHelp"
                      required
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                    />
                    <p id="startDateHelp" className="mt-1 text-sm text-gray-500">
                      À partir de quand souhaitez-vous emménager ?
                    </p>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                    Commentaires supplémentaires
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows={3}
                    placeholder="Précisez ici toute information complémentaire qui pourrait nous aider à répondre à votre demande..."
                    value={formData.comments}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#F7BF57] text-white rounded-md hover:bg-[#D9BEA3] transition-colors"
                    aria-label="S'inscrire sur la liste d'attente"
                  >
                    S'inscrire sur la liste d'attente
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Inscription réussie !
              </h2>
              <p className="text-gray-600 mb-6">
                Votre numéro d'inscription sur la liste d'attente est :
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-8">
                <span className="text-2xl font-mono font-bold text-gray-900">{waitlistNumber}</span>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left mb-8">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Ce qui se passe maintenant</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>1. Vous êtes inscrit(e) sur notre liste d'attente prioritaire</li>
                      <li>2. Vous recevrez un email de confirmation dans les prochaines minutes</li>
                      <li>3. Nous vous contacterons dès qu'un logement correspondant à vos critères se libère</li>
                      <li>4. Vous disposerez alors de 48h pour confirmer votre réservation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                Vous pouvez suivre l'état de votre position sur la liste d'attente à tout moment avec votre numéro d'inscription
                sur la page de suivi.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistPage;