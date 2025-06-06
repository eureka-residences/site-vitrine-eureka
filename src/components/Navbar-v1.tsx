import React from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';


import logoImage from '../assets/images/logo-eureka-97x160.png';


export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };


  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      className={`relative text-gray-600 dark:text-gray-300 hover:text-[#D9BEA3] dark:hover:text-[#D9BEA3] transition-colors pb-1
        ${isActive(to) ? 'text-[#D9BEA3] dark:text-[#D9BEA3]' : ''}`}
    >
      {children}
      {isActive(to) && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F7BF57] rounded-full" />
      )}
    </Link>
  );


  return (
    // <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* <span className="text-2xl font-bold text-[#D9BEA3]">Eureka</span>
              <span className="text-2xl font-light text-[#A5CBD9]">Résidences</span> */}

                <img src={logoImage} alt="Eureka Résidences" className="h-16" /> 
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* <Link to="/" className="text-gray-600 hover:text-[#D9BEA3]">Accueil</Link> */}
            {/* <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-[#D9BEA3] dark:hover:text-[#D9BEA3]">Accueil</Link>
            <Link to="/residences" className="text-gray-600 dark:text-gray-300 hover:text-[#D9BEA3] dark:hover:text-[#D9BEA3]">Nos Résidences</Link>
            <Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-[#D9BEA3] dark:hover:text-[#D9BEA3]">Services</Link>
            <Link to="/reservation" className="text-gray-600 dark:text-gray-300 hover:text-[#D9BEA3] dark:hover:text-[#D9BEA3]">Réserver</Link>
            <Link to="/suivi" className="text-gray-600 dark:text-gray-300 hover:text-[#D9BEA3] dark:hover:text-[#D9BEA3]">Suivi</Link> */}
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/residences">Nos Résidences</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/reservation">Réserver</NavLink>
            <NavLink to="/suivi">Suivi</NavLink>
            <ThemeToggle />
            <Link
              to="/reservation"
              className="bg-[#F7BF57] text-white px-4 py-2 rounded-md hover:bg-[#D9BEA3] transition-colors"
            >
              Pré-réserver
            </Link>
          </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-[#D9BEA3] dark:hover:text-[#D9BEA3] ml-2"
          >
            <Menu size={24} />
          </button>
        </div>


        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            {/* <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"> */}
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">

            
              {/* <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-[#D9BEA3]">Accueil</Link> */}
              <Link to="/" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-[#D9BEA3] dark:hover:text-[#D9BEA3]">Accueil</Link>
              <Link to="/residences" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-[#D9BEA3] dark:hover:text-[#D9BEA3]">Nos Résidences</Link>
              <Link to="/services" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-[#D9BEA3] dark:hover:text-[#D9BEA3]">Services</Link>
              <Link to="/reservation" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-[#D9BEA3] dark:hover:text-[#D9BEA3]">Réserver</Link>
              <Link to="/suivi" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-[#D9BEA3] dark:hover:text-[#D9BEA3]">Suivi</Link>
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