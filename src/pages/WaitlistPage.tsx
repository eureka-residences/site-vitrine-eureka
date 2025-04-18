import React, { useState } from 'react';
import { Check, AlertCircle, Clock, Calendar, User, Mail, Phone, Home, ChevronRight } from 'lucide-react';
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
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <PageBanner 
        title="Liste d'attente" 
        subtitle="Inscrivez-vous sur notre liste d'attente pour être prioritaire dès qu'un logement se libère"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {step === 1 && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
              {/* Bannière d'information */}
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/20 p-6 border-b border-amber-200 dark:border-amber-800">
                <div className="flex items-start">
                  <div className="bg-amber-100 dark:bg-amber-700/40 rounded-lg p-2 mr-4">
                    <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 dark:text-amber-300 text-lg mb-2">Pourquoi s'inscrire sur la liste d'attente ?</h3>
                    <p className="text-amber-800 dark:text-amber-200">
                      Toutes nos résidences sont actuellement complètes, mais des désistements peuvent survenir. 
                      En vous inscrivant sur notre liste d'attente, vous serez contacté en priorité dès qu'un logement 
                      correspondant à vos critères se libère.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Formulaire */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Formulaire d'inscription</h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
                    {/* Informations personnelles */}
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-[#F7BF57]/10 dark:bg-[#F7BF57]/20 rounded-lg p-2 mr-3">
                          <User className="w-5 h-5 text-[#F7BF57]" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Informations étudiant</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Nom de l'étudiant
                          </label>
                          <input
                            type="text"
                            id="studentName"
                            name="studentName"
                            placeholder="Ex: Jean Dupont"
                            required
                            value={formData.studentName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent transition-colors"
                          />
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Nom complet de l'étudiant qui occupera le logement
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
                            required
                            value={formData.parentName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent transition-colors"
                          />
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Personne à contacter en cas de disponibilité
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Coordonnées */}
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-[#F7BF57]/10 dark:bg-[#F7BF57]/20 rounded-lg p-2 mr-3">
                          <Mail className="w-5 h-5 text-[#F7BF57]" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Coordonnées</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ex: parent@exemple.com"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent transition-colors"
                          />
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Nous vous contacterons à cette adresse en priorité
                          </p>
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Téléphone
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <Phone className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                            </div>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              placeholder="Ex: +225 01 23 45 67 89"
                              pattern="[0-9+\s]+"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent transition-colors"
                            />
                          </div>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Format: code pays et numéro de téléphone
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Préférences de logement */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-6">
                      <div className="bg-[#F7BF57]/10 dark:bg-[#F7BF57]/20 rounded-lg p-2 mr-3">
                        <Home className="w-5 h-5 text-[#F7BF57]" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Préférences de logement</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
                      <div>
                        <label htmlFor="preferredRoom" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Type de logement souhaité
                        </label>
                        <select
                          id="preferredRoom"
                          name="preferredRoom"
                          value={formData.preferredRoom}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 appearance-none focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent transition-colors"
                        >
                          <option value="standard">Chambre Standard</option>
                          <option value="comfort">Chambre Confort</option>
                          <option value="studio">Studio</option>
                          <option value="any">N'importe quel type</option>
                        </select>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          Sélectionnez le type de logement que vous préférez
                        </p>
                      </div>
                      
                      <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Date d'emménagement souhaitée
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Calendar className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                          </div>
                          <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            required
                            value={formData.startDate}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent transition-colors"
                          />
                        </div>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          À partir de quand souhaitez-vous emménager ?
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <label htmlFor="comments" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Commentaires supplémentaires
                      </label>
                      <textarea
                        id="comments"
                        name="comments"
                        rows={4}
                        placeholder="Précisez ici toute information complémentaire qui pourrait nous aider à répondre à votre demande..."
                        value={formData.comments}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent transition-colors"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#F7BF57] text-white rounded-lg hover:bg-[#e6af4a] transition-colors shadow-md hover:shadow-lg flex items-center font-medium"
                      aria-label="S'inscrire sur la liste d'attente"
                    >
                      S'inscrire sur la liste d'attente
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation d'inscription */}
        {step === 2 && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Inscription réussie !
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Votre numéro d'inscription sur la liste d'attente est :
              </p>
              
              <div className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-lg shadow-inner mb-10">
                <span className="text-3xl font-mono font-bold text-gray-900 dark:text-gray-100">{waitlistNumber}</span>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-left mb-10">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-800/40 rounded-lg p-2 mr-4 mt-1">
                    <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-300 text-lg mb-3">Ce qui se passe maintenant</h3>
                    <ul className="text-blue-800 dark:text-blue-200 space-y-3">
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-200 dark:bg-blue-700 rounded-full text-xs font-medium text-blue-800 dark:text-blue-200">1</span>
                        Vous êtes inscrit(e) sur notre liste d'attente prioritaire
                      </li>
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-200 dark:bg-blue-700 rounded-full text-xs font-medium text-blue-800 dark:text-blue-200">2</span>
                        Vous recevrez un email de confirmation dans les prochaines minutes
                      </li>
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-200 dark:bg-blue-700 rounded-full text-xs font-medium text-blue-800 dark:text-blue-200">3</span>
                        Nous vous contacterons dès qu'un logement correspondant à vos critères se libère
                      </li>
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-200 dark:bg-blue-700 rounded-full text-xs font-medium text-blue-800 dark:text-blue-200">4</span>
                        Vous disposerez alors de 48h pour confirmer votre réservation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Vous pouvez suivre l'état de votre position sur la liste d'attente à tout moment
                  sur la page de suivi avec votre numéro d'inscription.
                </p>
                
                <button
                  onClick={() => window.location.href = '/suivi'}
                  className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Aller à la page de suivi
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistPage;