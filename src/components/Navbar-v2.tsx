import React, { useState, useRef, useEffect } from 'react';
import { Menu, ChevronDown, Home, Building, Coffee, CalendarCheck, ClipboardList, Phone, Info } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logoImage from '../assets/images/logo-eureka-97x160.png';

interface NavItemProps {
  to: string;
  label: string;
  icon?: React.ReactNode;
  children?: {
    to: string;
    label: string;
    description?: string;
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
  }, [location]);

  const navItems: NavItemProps[] = [
    {
      to: '/',
      label: 'Accueil',
      icon: <Home size={18} />
    },
    {
      to: '/residences',
      label: 'Résidences',
      icon: <Building size={18} />,
      children: [
        {
          to: '/residences/residence-eureka',
          label: 'Résidence Eureka',
          description: 'Notre résidence principale située au cœur du campus'
        },
        {
          to: '/residences/residence-alpha',
          label: 'Résidence Alpha',
          description: 'Moderne et confortable, proche du centre-ville'
        },
        {
          to: '/residences/residence-beta',
          label: 'Résidence Beta',
          description: 'Chambres économiques pour les petits budgets'
        }
      ]
    },
    {
      to: '/services',
      label: 'Services',
      icon: <Coffee size={18} />,
      children: [
        {
          to: '/services/restauration',
          label: 'Restauration',
          description: 'Découvrez notre service de restauration sur place'
        },
        {
          to: '/services/salles-etudes',
          label: 'Salles d\'étude',
          description: 'Espaces de travail calmes et équipés'
        },
        {
          to: '/services/loisirs',
          label: 'Loisirs',
          description: 'Activités et divertissements proposés'
        }
      ]
    },
    {
      to: '/reservation',
      label: 'Réserver',
      icon: <CalendarCheck size={18} />
    },
    {
      to: '/suivi',
      label: 'Suivi',
      icon: <ClipboardList size={18} />
    },
    {
      to: '/contact',
      label: 'Contact',
      icon: <Phone size={18} />
    }
  ];

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

        {/* Dropdown Menu */}
        {hasChildren && activeDropdown === item.label && (
          <div className="absolute z-10 left-0 mt-2 w-72 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="py-1">
              {item.children?.map((child, idx) => (
                <Link
                  key={idx}
                  to={child.to}
                  className={`block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-l-4 transition-all
                    ${isActive(child.to) 
                      ? 'border-[#F7BF57] bg-yellow-50 dark:bg-yellow-900/10' 
                      : 'border-transparent'}`}
                >
                  <div className="font-medium text-gray-800 dark:text-gray-200">{child.label}</div>
                  {child.description && (
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {child.description}
                    </div>
                  )}
                </Link>
              ))}
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
      <div>
        {hasChildren ? (
          <div>
            <button
              onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800
                ${isActive(item.to) || (item.children && item.children.some(child => isActive(child.to))) 
                  ? 'text-[#D9BEA3] dark:text-[#D9BEA3] bg-gray-50 dark:bg-gray-800' : ''}`}
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
              <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-700 ml-4 mt-1">
                {item.children?.map((child, idx) => (
                  <Link
                    key={idx}
                    to={child.to}
                    className={`block px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800
                      ${isActive(child.to) 
                        ? 'text-[#D9BEA3] dark:text-[#D9BEA3] bg-gray-50 dark:bg-gray-800' 
                        : ''}`}
                  >
                    <div className="font-medium">{child.label}</div>
                    {child.description && (
                      <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {child.description}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            to={item.to}
            className={`flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800
              ${isActive(item.to) ? 'text-[#D9BEA3] dark:text-[#D9BEA3] bg-gray-50 dark:bg-gray-800' : ''}`}
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
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logoImage} alt="Eureka Résidences" className="h-16" /> 
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <NavLink key={index} item={item} />
            ))}
            <ThemeToggle />
            <Link
              to="/reservation"
              className="bg-[#F7BF57] text-white px-4 py-2 rounded-md hover:bg-[#D9BEA3] transition-colors flex items-center gap-2"
            >
              <CalendarCheck size={18} />
              <span>Pré-réserver</span>
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
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300">
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {navItems.map((item, index) => (
                <MobileNavLink key={index} item={item} />
              ))}
              <div className="p-4">
                <Link
                  to="/reservation"
                  className="block w-full text-center bg-[#F7BF57] text-white px-4 py-3 rounded-md hover:bg-[#D9BEA3] transition-colors"
                >
                  Pré-réserver
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}