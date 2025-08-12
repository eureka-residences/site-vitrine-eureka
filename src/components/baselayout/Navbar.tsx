import React, { useState, useRef, useEffect } from 'react';
import { Menu, ChevronDown, Home, Building, Coffee, CalendarCheck, ClipboardList, Phone, Info, ChevronRight, UserRound } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import logoImage from '@images/logo-eureka-97x160.png';

// Images pour les menus
const residenceImage = "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
const servicesImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
const reservationImage = "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

interface NavItemProps {
  to: string;
  label: string;
  icon?: React.ReactNode;
  image?: string;
  children?: {
    to: string;
    label: string;
    description?: string;
    subItems?: {
      to: string;
      label: string;
    }[];
  }[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems: NavItemProps[] = [
    {
      to: '/',
      label: 'Accueil',
      icon: <Home size={18} />
    },
    // {
    //   to: '/residences',
    //   label: 'Résidences',
    //   icon: <Building size={18} />,
    //   image: residenceImage,
      // children: [
      //   {
      //     to: '/residences/residence-eureka',
      //     label: 'Résidence Eureka',
      //     description: 'Notre résidence principale située au cœur du campus',
      //     subItems: [
      //       { to: '/residences/residence-eureka/chambre-standard', label: 'Chambre Standard' },
      //       { to: '/residences/residence-eureka/chambre-confort', label: 'Chambre Confort' },
      //       { to: '/residences/residence-eureka/studio', label: 'Studio' }
      //     ]
      //   },
      //   {
      //     to: '/residences/residence-alpha',
      //     label: 'Résidence Alpha',
      //     description: 'Moderne et confortable, proche du centre-ville',
      //     subItems: [
      //       { to: '/residences/residence-alpha/chambre-standard', label: 'Chambre Standard' },
      //       { to: '/residences/residence-alpha/studio', label: 'Studio' },
      //     ]
      //   },
      //   {
      //     to: '/residences/residence-beta',
      //     label: 'Résidence Beta',
      //     description: 'Chambres économiques pour les petits budgets',
      //     subItems: [
      //       { to: '/residences/residence-beta/chambre-economique', label: 'Chambre Économique' },
      //       { to: '/residences/residence-beta/chambre-partagee', label: 'Chambre Partagée' },
      //     ]
      //   }
      // ]
    // },
    {
      label: 'Logements',
      to: '/logements',
      icon: <Home size={18} />, // Importez l'icône appropriée en haut du fichier si nécessaire
    },

    
    // {
    //   to: '/services',
    //   label: 'Services',
    //   icon: <Coffee size={18} />,
    //   image: servicesImage,
    //   children: [
    //     {
    //       to: '/services/restauration',
    //       label: 'Restauration',
    //       description: 'Découvrez notre service de restauration sur place',
    //       subItems: [
    //         { to: '/services/restauration/cafeteria', label: 'Cafétéria' },
    //         { to: '/services/restauration/restaurant', label: 'Restaurant' }
    //       ]
    //     },
    //     {
    //       to: '/services/salles-etudes',
    //       label: 'Espaces d\'étude',
    //       description: 'Espaces de travail calmes et équipés',
    //       subItems: [
    //         { to: '/services/salles-etudes/bibliotheque', label: 'Bibliothèque' },
    //         { to: '/services/salles-etudes/salles-travail', label: 'Salles de travail' },
    //         { to: '/services/salles-etudes/espace-coworking', label: 'Espace coworking' }
    //       ]
    //     },
    //     {
    //       to: '/services/loisirs',
    //       label: 'Loisirs',
    //       description: 'Activités et divertissements proposés',
    //       subItems: [
    //         { to: '/services/loisirs/salle-sport', label: 'Salle de sport' },
    //         { to: '/services/loisirs/espace-detente', label: 'Espace détente' },
    //         { to: '/services/loisirs/activites', label: 'Activités organisées' }
    //       ]
    //     }
    //   ]
    // },
    {
      to: '/boutique',
      label: 'Boutique',
    },
    {
      to: '/contact',
      label: 'Contact',
      icon: <Phone size={18} />
    }
  ];

 // Pour la partie NavLink du composant
  const NavLink = ({ item }: { item: NavItemProps }) => {
    const hasChildren = item.children && item.children.length > 0;
    
    return (
      <div className="relative" ref={hasChildren ? dropdownRef : undefined}>
        {hasChildren ? (
          <button
            onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
            className={`flex items-center gap-1 relative text-gray-600 dark:text-gray-300 hover:text-[#D9BEA3] dark:hover:text-[#D9BEA3] transition-colors pb-1
              ${isActive(item.to) || (item.children && item.children.some(child => isActive(child.to))) 
                ? 'text-[#D9BEA3] dark:text-[#D9BEA3]' : ''}`}
          >
            {item.label}
            <ChevronDown 
              size={16} 
              className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} 
            />
            {(isActive(item.to) || (item.children && item.children.some(child => isActive(child.to)))) && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F7BF57] rounded-full" />
            )}
          </button>
        ) : (
          <Link
            to={item.to}
            className={`flex items-center gap-1 relative text-gray-600 dark:text-gray-300 hover:text-[#D9BEA3] dark:hover:text-[#D9BEA3] transition-colors pb-1
              ${isActive(item.to) ? 'text-[#D9BEA3] dark:text-[#D9BEA3]' : ''}`}
          >
            {item.label}
            {isActive(item.to) && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F7BF57] rounded-full" />
            )}
          </Link>
        )}

        {/* Mega Dropdown Menu */}
        {hasChildren && activeDropdown === item.label && (
          <div className="absolute z-10 left-0 mt-2 w-screen transform -translate-x-1/2 left-1/2">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                <div className="flex">
                  {/* Left side - Categories */}
                  <div className="w-2/3 bg-white dark:bg-gray-800 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {item.children?.map((category, idx) => (
                        <div key={idx} className="space-y-1">
                          <Link 
                            to={category.to} 
                            className="block text-lg font-medium text-gray-900 dark:text-white hover:text-[#F7BF57] dark:hover:text-[#F7BF57] mb-2 transition-colors"
                            onClick={(e) => {
                              // Empêcher la fermeture du menu lors du clic sur le lien
                              e.stopPropagation();
                              // Fermer le menu après un court délai pour permettre la navigation
                              setTimeout(() => setActiveDropdown(null), 100);
                            }}
                          >
                            {category.label}
                          </Link>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{category.description}</p>
                          
                          {category.subItems && (
                            <ul className="space-y-2 border-l-2 border-gray-100 dark:border-gray-700 pl-3">
                              {category.subItems.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <Link 
                                    to={subItem.to}
                                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#F7BF57] dark:hover:text-[#F7BF57] flex items-center transition-colors"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setTimeout(() => setActiveDropdown(null), 100);
                                    }}
                                  >
                                    <ChevronRight size={14} className="mr-1 text-[#F7BF57]" />
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right side - Image */}
                  <div className="w-1/3 relative hidden md:block">
                    <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-gray-800 to-transparent z-10"></div>
                    {item.image && (
                      <img 
                        src={item.image} 
                        alt={item.label} 
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-700 shadow-lg mb-4">
                          {item.icon && React.cloneElement(item.icon as React.ReactElement, { 
                            size: 24,
                            className: "text-[#F7BF57]"
                          })}
                        </div>
                        <h3 className="text-xl font-bold text-white drop-shadow-lg">
                          {item.label}
                        </h3>
                        <Link
                          to={item.to}
                          className="mt-4 inline-flex items-center text-sm font-medium text-white hover:text-[#F7BF57] drop-shadow-lg"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveDropdown(null);
                            // Navigate after dropdown is closed
                            setTimeout(() => {
                              window.location.href = item.to;
                            }, 100);
                          }}
                        >
                          Tout découvrir
                          <ChevronRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                
                {/* Bottom CTA */}
                <div className="bg-gray-50 dark:bg-gray-900 p-4 flex justify-between items-center border-t border-gray-100 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.label === 'Résidences' && "Nos résidences sont idéalement situées pour vos études."}
                    {item.label === 'Services' && "De nombreux services disponibles pour votre confort."}
                    {item.label === 'Réserver' && "Réservez dès maintenant pour la prochaine rentrée."}
                  </p>
                  
                  <Link
                    to={item.label === 'Réserver' ? '/reservation' : item.to}
                    className="bg-[#F7BF57] hover:bg-[#e6af4a] text-white text-sm rounded px-4 py-2 transition-colors flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setTimeout(() => setActiveDropdown(null), 100);
                    }}
                  >
                    {item.label === 'Réserver' ? 'Réserver maintenant' : `Découvrir tous nos ${item.label.toLowerCase()}`}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const MobileNavLink = ({ item }: { item: NavItemProps }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;
    
    return (
      <div className="border-b border-gray-100 dark:border-gray-800">
        {hasChildren ? (
          <div>
            <button
              onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.label}</span>
              </div>
              <ChevronDown 
                size={16}
                className={`transition-transform duration-200 ${isSubmenuOpen ? 'rotate-180' : ''}`} 
              />
            </button>
  
            {/* Mobile Submenu */}
            {isSubmenuOpen && (
              <div className="bg-gray-50 dark:bg-gray-800">
                {item.children?.map((category, idx) => (
                  <div key={idx} className="px-4 py-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <Link 
                      to={category.to}
                      className="block font-medium text-gray-900 dark:text-white mb-1"
                      onClick={() => {
                        setIsSubmenuOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      {category.label}
                    </Link>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{category.description}</p>
                    
                    {category.subItems && (
                      <ul className="ml-4 mt-2 space-y-1">
                        {category.subItems.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <Link 
                              to={subItem.to}
                              className="text-sm py-1 block text-gray-600 dark:text-gray-300 flex items-center"
                              onClick={() => {
                                setIsSubmenuOpen(false);
                                setIsOpen(false);
                              }}
                            >
                              <ChevronRight size={14} className="mr-1 text-[#F7BF57]" />
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            to={item.to}
            className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        )}
      </div>
    );
  };

  return (
    <nav className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logoImage} alt="Eureka Résidences" className="h-16" /> 
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <NavLink key={index} item={item} />
            ))}
            <Link
              to='/login'
              className='rounded-lg p-2 hover:bg-gray-200 hover:dark:bg-gray-700'
            >
              <UserRound className='text-gray-600 dark:text-gray-200' />
            </Link>
            <ThemeToggle />
            <Link
              to="/reservation"
              className="bg-[#F7BF57] text-white px-4 py-2 rounded-md hover:bg-[#D9BEA3] transition-colors flex items-center gap-2"
            >
              <CalendarCheck size={18} />
              <span>Réserver</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-[#D9BEA3] dark:hover:text-[#D9BEA3] ml-2 p-1"
              aria-expanded={isOpen}
              aria-label="Menu principal"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300">
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {navItems.map((item, index) => (
                <MobileNavLink key={index} item={item} />
              ))}
              <div className="p-4">
                <Link
                  to="/reservation"
                  className="block w-full text-center bg-[#F7BF57] text-white px-4 py-3 rounded-md hover:bg-[#D9BEA3] transition-colors"
                >
                  Réserver
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}