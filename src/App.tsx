import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ResidenceListPage from './pages/ResidenceListPage';
import ResidenceDetailPage from './pages/ResidenceDetailPage';
import ReservationPage from './pages/ReservationPage';
import TrackingPage from './pages/TrackingPage';
import WaitlistPage from './pages/WaitlistPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16"> {/* Padding top qui correspond à la hauteur de la navbar */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/residences" element={<ResidenceListPage />} />
          <Route path="/residences/:id" element={<ResidenceDetailPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/suivi" element={<TrackingPage />} />
          <Route path="/liste-attente" element={<WaitlistPage />} />
        </Routes>
        </div>
    </div>
  );
}

export default App;