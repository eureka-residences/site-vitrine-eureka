import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

import logoImage from '../assets/images/logo-eureka-97x160.png';


export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* <span className="text-2xl font-bold text-[#D9BEA3]">Eureka</span>
              <span className="text-2xl font-light text-[#A5CBD9]">Résidences</span> */}

                <img src={logoImage} alt="Eureka Résidences" className="h-14" /> 
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-[#D9BEA3]">Accueil</Link>
            <Link to="/residences" className="text-gray-600 hover:text-[#D9BEA3]">Nos Résidences</Link>
            <Link to="/reservation" className="text-gray-600 hover:text-[#D9BEA3]">Réserver</Link>
            <Link to="/suivi" className="text-gray-600 hover:text-[#D9BEA3]">Suivi</Link>
            <Link
              to="/reservation"
              className="bg-[#F7BF57] text-white px-4 py-2 rounded-md hover:bg-[#D9BEA3] transition-colors"
            >
              Pré-réserver
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#D9BEA3]"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-[#D9BEA3]">Accueil</Link>
              <Link to="/residences" className="block px-3 py-2 text-gray-600 hover:text-[#D9BEA3]">Nos Résidences</Link>
              <Link to="/reservation" className="block px-3 py-2 text-gray-600 hover:text-[#D9BEA3]">Réserver</Link>
              <Link to="/suivi" className="block px-3 py-2 text-gray-600 hover:text-[#D9BEA3]">Suivi</Link>
              <Link
                to="/reservation"
                className="block w-full text-left bg-[#F7BF57] text-white px-3 py-2 rounded-md hover:bg-[#D9BEA3] transition-colors"
              >
                Pré-réserver
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}