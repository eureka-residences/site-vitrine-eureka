import { Routes, Route } from 'react-router-dom';
import Navbar from '@baselayout/Navbar';
import Footer from '@baselayout/Footer';

import {
  HomePage,
  ResidenceListPage,
  ResidenceDetailPage,
  ReservationPage,
  TrackingPage,
  WaitlistPage,
  ServicesPage,
  ContactPage,
  AccommodationListPage,
  AccommodationDetailPage,
  PaymentProcessPage,
  ShopPage,
  LoginPage,
  UserAccountPage
} from '@pages'



function App() {
  return (
    // <div className="min-h-screen bg-gray-50">
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar />

      <main className="pt-16"> {/* Padding top qui correspond à la hauteur de la navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/residences" element={<ResidenceListPage />} />
          <Route path="/residences/:id" element={<ResidenceDetailPage />} />
          <Route path="/logements" element={<AccommodationListPage />} />
          <Route path="/logements/:id" element={<AccommodationDetailPage />} />

          <Route path="/boutique" element={<ShopPage />} />
          <Route path="/boutique/payment-process/:id" element={<PaymentProcessPage />} />

          <Route path="/services" element={<ServicesPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/suivi" element={<TrackingPage />} />
          <Route path="/liste-attente" element={<WaitlistPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/account" element={<UserAccountPage />} />

          {/* ajoute page contact */}
          <Route path="/contact" element={<ContactPage />} /> 
        </Routes>
      </main>

      <Footer />
    </div>
  );
     
}

export default App;