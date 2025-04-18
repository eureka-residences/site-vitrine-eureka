import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { Search, ChevronRight, CheckCircle2, Clock, AlertCircle, Calendar, MapPin, Home } from 'lucide-react';

// Types pour les statuts possibles
type ReservationStatus = 'pending' | 'confirmed' | 'processing' | 'ready' | 'notfound';

interface ReservationInfo {
  status: ReservationStatus;
  studentName: string;
  roomType: string;
  checkInDate: string;
  residence: string;
  paymentStatus: 'paid' | 'partial' | 'unpaid';
  nextStep?: string;
  lastUpdate: string;
}

export default function TrackingPage() {
  const [reservationNumber, setReservationNumber] = useState('');
  const [reservationInfo, setReservationInfo] = useState<ReservationInfo | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour simuler une recherche
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setError(null);

    // Simulation d'une requête API
    setTimeout(() => {
      setIsSearching(false);

      if (!reservationNumber.trim()) {
        setError("Veuillez saisir un numéro de réservation");
        setReservationInfo(null);
        return;
      }

      // Pour la démo, créons différentes réponses possibles selon le numéro
      if (reservationNumber === 'PR-ABC123') {
        setReservationInfo({
          status: 'confirmed',
          studentName: 'Sophie Mbarga',
          roomType: 'Studio Confort',
          checkInDate: '15 septembre 2024',
          residence: 'Résidence Gamma, Yaoundé Centre',
          paymentStatus: 'paid',
          lastUpdate: '10 juin 2023'
        });
      } else if (reservationNumber === 'PR-XYZ789') {
        setReservationInfo({
          status: 'pending',
          studentName: 'Jean Kouassi',
          roomType: 'Chambre Standard',
          checkInDate: '10 septembre 2024',
          residence: 'Résidence Sigma, Douala',
          paymentStatus: 'partial',
          nextStep: 'Compléter le paiement de la caution avant le 15 juillet',
          lastUpdate: '5 juin 2023'
        });
      } else {
        setReservationInfo({ status: 'notfound' } as ReservationInfo);
      }
    }, 800);
  };

  // Fonction pour afficher le statut avec couleur appropriée
  const getStatusInfo = (status: ReservationStatus) => {
    switch (status) {
      case 'confirmed':
        return {
          icon: <CheckCircle2 className="w-6 h-6 text-green-500 dark:text-green-400" />,
          label: 'Confirmée',
          color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
        };
      case 'pending':
        return {
          icon: <Clock className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
          label: 'En attente',
          color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300',
        };
      case 'processing':
        return {
          icon: <ChevronRight className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
          label: 'En traitement',
          color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
        };
      case 'ready':
        return {
          icon: <Home className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
          label: 'Prêt pour arrivée',
          color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300',
        };
      default:
        return {
          icon: <AlertCircle className="w-6 h-6 text-red-500 dark:text-red-400" />,
          label: 'Non trouvée',
          color: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300',
        };
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <PageBanner 
        title="Suivi de réservation" 
        subtitle="Consultez l'état de votre demande de logement" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Formulaire de recherche */}
        <div className="bg-gradient-to-r from-[#A5CBD9]/20 to-[#F7BF57]/15 dark:from-[#A5CBD9]/10 dark:to-[#F7BF57]/10 rounded-xl p-8 mb-10 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">Suivez votre réservation</h2>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="relative">
              <div className="flex">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-[#F7BF57]" />
                  </div>
                  <input 
                    type="text"
                    id="reservation-number"
                    placeholder="Entrez votre numéro de réservation (ex: PR-ABC123)" 
                    className="block w-full pl-12 pr-4 py-4 rounded-l-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent transition-all"
                    value={reservationNumber}
                    onChange={(e) => setReservationNumber(e.target.value)}
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-[#F7BF57] hover:bg-[#e6af4a] text-white px-8 py-4 rounded-r-lg font-medium flex items-center justify-center transition-colors shadow-sm dark:hover:bg-[#F7BF57]/90 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                  disabled={isSearching}
                >
                  {isSearching ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  ) : (
                    <ChevronRight className="h-5 w-5 mr-1" />
                  )}
                  <span>{isSearching ? 'Recherche...' : 'Rechercher'}</span>
                </button>
              </div>
              
              {error && (
                <div className="mt-2 text-red-600 dark:text-red-400 text-sm">
                  <AlertCircle className="inline-block w-4 h-4 mr-1" /> {error}
                </div>
              )}
              
              <div className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
                <p>Exemples pour tester : <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">PR-ABC123</code> ou <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">PR-XYZ789</code></p>
              </div>
            </div>
          </form>
        </div>

        {/* Résultats de la recherche */}
        {reservationInfo && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all animate-fade-in">
            {reservationInfo.status === 'notfound' ? (
              <div className="text-center py-8">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-red-100 dark:bg-red-900/30">
                  <AlertCircle className="w-8 h-8 text-red-500 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Réservation introuvable</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Aucune réservation ne correspond à ce numéro.
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Vérifiez le numéro saisi ou contactez notre service client si vous pensez qu'il s'agit d'une erreur.
                </p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-start flex-wrap gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      Réservation {reservationNumber}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Au nom de <span className="font-medium text-gray-900 dark:text-gray-200">{reservationInfo.studentName}</span>
                    </p>
                  </div>
                  <div>
                    <span className={`inline-flex items-center px-4 py-2 rounded-full ${getStatusInfo(reservationInfo.status).color}`}>
                      {getStatusInfo(reservationInfo.status).icon}
                      <span className="ml-2 font-medium">{getStatusInfo(reservationInfo.status).label}</span>
                    </span>
                  </div>
                </div>
              
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Détails de la réservation</h4>
                      
                      <div className="space-y-4">
                        <div className="flex">
                          <Home className="w-5 h-5 text-[#F7BF57] mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="block text-sm text-gray-500 dark:text-gray-400">Type de logement</span>
                            <span className="text-gray-900 dark:text-gray-100">{reservationInfo.roomType}</span>
                          </div>
                        </div>
                        
                        <div className="flex">
                          <Calendar className="w-5 h-5 text-[#F7BF57] mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="block text-sm text-gray-500 dark:text-gray-400">Date d'entrée prévue</span>
                            <span className="text-gray-900 dark:text-gray-100">{reservationInfo.checkInDate}</span>
                          </div>
                        </div>
                        
                        <div className="flex">
                          <MapPin className="w-5 h-5 text-[#F7BF57] mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="block text-sm text-gray-500 dark:text-gray-400">Résidence</span>
                            <span className="text-gray-900 dark:text-gray-100">{reservationInfo.residence}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Dernière mise à jour</h4>
                      <p className="text-gray-700 dark:text-gray-300">{reservationInfo.lastUpdate}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Statut du paiement</h4>
                      
                      <div className="flex items-center mb-6">
                        <div 
                          className={`w-3 h-3 rounded-full mr-2 ${
                            reservationInfo.paymentStatus === 'paid' 
                              ? 'bg-green-500' 
                              : reservationInfo.paymentStatus === 'partial' 
                                ? 'bg-amber-500' 
                                : 'bg-red-500'
                          }`}
                        ></div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {reservationInfo.paymentStatus === 'paid' 
                            ? 'Payé intégralement' 
                            : reservationInfo.paymentStatus === 'partial' 
                              ? 'Partiellement payé' 
                              : 'Non payé'}
                        </span>
                      </div>
                      
                      {reservationInfo.paymentStatus !== 'paid' && (
                        <button
                          className="w-full bg-[#F7BF57] hover:bg-[#e6af4a] text-white py-2 px-4 rounded-md font-medium transition-colors dark:hover:bg-[#F7BF57]/90"
                        >
                          Compléter le paiement
                        </button>
                      )}
                    </div>
                    
                    {reservationInfo.nextStep && (
                      <div className={`rounded-lg p-6 ${
                        reservationInfo.status === 'pending' 
                          ? 'bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800' 
                          : 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                      }`}>
                        <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Prochaine étape</h4>
                        <p className={`${
                          reservationInfo.status === 'pending' 
                            ? 'text-amber-800 dark:text-amber-300' 
                            : 'text-blue-800 dark:text-blue-300'
                        }`}>
                          {reservationInfo.nextStep}
                        </p>
                      </div>
                    )}
                    
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Besoin d'aide ?</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Si vous avez des questions concernant votre réservation, n'hésitez pas à nous contacter.
                      </p>
                      <button
                        className="w-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md font-medium transition-colors"
                      >
                        Contacter le service client
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}