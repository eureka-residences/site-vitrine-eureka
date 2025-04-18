import PageBanner from '../components/PageBanner';

const TrackingPage = () => {
  return (
    <div>
      <PageBanner 
        title="Suivi de réservation" 
        subtitle="Consultez l'état de votre demande de réservation"
      />
   
      <div className="container mx-auto px-4 py-8 pt-10">
        {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">Suivi de réservation</h1> */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="tracking-number" className="block text-sm font-medium text-gray-700 mb-2">
                  Numéro de pré-réservation
                </label>
                <input
                  type="text"
                  id="tracking-number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                  placeholder="Entrez votre numéro de pré-réservation"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#F7BF57] text-white px-4 py-2 rounded-md hover:bg-[#D9BEA3] transition-colors"
              >
                Vérifier le statut
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;