import { useState } from 'react';
import { 
    Search, 
    Filter, 
    Package,
    Coffee, 
    Sparkles, 
    MoreHorizontal, 
    Clock, 
    Truck, 
    MapPin, 
    Phone, 
    Info, 
    ChevronDown, 
    ChevronUp, 
    X, 
} from 'lucide-react';



export default function ShopSidebar({ 
    onSearchChange = (str: string) => {}, 
    onFiltersChange = (str_arr: string[]) => {},
    isOpen = true,
    onToggle = () => {}
}) {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [expandedSections, setExpandedSections] = useState({
        filters: true,
        delivery: true,
        contact: false
    });

    const categories = [
        {
            id: 'fournitures',
            name: 'Fournitures',
            icon: Package,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50',
            count: 45
        },
        {
            id: 'alimentation',
            name: 'Alimentation',
            icon: Coffee,
            color: 'text-green-600',
            bgColor: 'bg-green-50',
            count: 32
        },
        {
            id: 'hygiene',
            name: 'Hygiène',
            icon: Sparkles,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50',
            count: 28
        },
        {
            id: 'autres',
            name: 'Autres',
            icon: MoreHorizontal,
            color: 'text-gray-600',
            bgColor: 'bg-gray-50',
            count: 15
        }
    ];

    const deliverySchedule = [
        { day: 'Lundi - Vendredi', hours: '17h00 - 19h00', type: 'normal' },
        { day: 'Samedi', hours: '16h00 - 19h00', type: 'weekend' },
        { day: 'Dimanche', hours: '9h00 - 19h00', type: /*'closed'*/ 'weekend' }
    ];

    const deliveryZones = [
        { zone: 'Résidence Eureka', time: '0 min', price: 'Gratuit' },
        { zone: 'Cité Universitaire', time: '10-30 min', price: '500 FCFA' },
        { zone: 'Toudalia', time: '20-35 min', price: '1500 FCFA' },
    ];

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
        onSearchChange(value);
    };

  const handleFilterToggle = (filterId: string) => {
    const newFilters = selectedFilters.includes(filterId)
      ? selectedFilters.filter(id => id !== filterId)
      : [...selectedFilters, filterId];
    
    setSelectedFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    onFiltersChange([]);
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed left-4 top-4 z-40 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200"
      >
        <Filter size={20} className="text-gray-600" />
      </button>
    );
  }

  return (
    <>
      {/* Overlay mobile */}
      {/* <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        onClick={onToggle}
      /> */}
      
      {/* Sidebar */}
      <div>
          {/* En-tête avec fermeture mobile */}
          <div className="flex items-center justify-between mb-6 lg:mb-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Options de recherche</h2>
            <button
              onClick={onToggle}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 lg:hidden"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Barre de recherche */}
          <div className="mb-6">
            <div className="relative">  
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher des produits..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="bg-gray-100 dark:bg-gray-800 w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
              />
              {searchTerm && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Filtres par catégorie */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('filters')}
              className="flex items-center justify-between w-full mb-4 text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
                <Filter size={18} />
                <span>Catégories</span>
              </h3>
              {expandedSections.filters ? (
                <ChevronUp size={18} className="text-gray-500" />
              ) : (
                <ChevronDown size={18} className="text-gray-500" />
              )}
            </button>

            {expandedSections.filters && (
              <div className="space-y-3">
                {/* Bouton tout effacer */}
                {selectedFilters.length > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                  >
                    Effacer tous les filtres ({selectedFilters.length})
                  </button>
                )}

                {/* Category list */}
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isSelected = selectedFilters.includes(category.id);

                  return (
                    <button
                      key={category.id}
                      onClick={() => handleFilterToggle(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all duration-200 ${
                        isSelected
                          ? `${category.bgColor} border-current ${category.color} shadow-sm`
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100 dark:bg-gray-400'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon size={18} className={isSelected ? category.color : 'text-gray-600'} />
                        <span className={`font-medium ${isSelected ? category.color : 'text-gray-800'}`}>
                          {category.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm ${isSelected ? category.color : 'text-gray-500'}`}>
                          {/* {category.count} */}
                        </span>
                        {isSelected && (
                          <div className={`w-2 h-2 rounded-full bg-current ${category.color}`} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Informations de livraison */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('delivery')}
              className="flex items-center justify-between w-full mb-4 text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
                <Truck size={18} />
                <span>Livraison</span>
              </h3>
              {expandedSections.delivery ? (
                <ChevronUp size={18} className="text-gray-500" />
              ) : (
                <ChevronDown size={18} className="text-gray-500" />
              )}
            </button>

            {expandedSections.delivery && (
              <div className="space-y-4">
                {/* Horaires de livraison */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock size={16} className="text-blue-600" />
                    <h4 className="font-medium text-blue-800">Horaires</h4>
                  </div>
                  <div className="space-y-2">
                    {deliverySchedule.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-blue-700">{schedule.day}</span>
                        <span className={`text-sm font-medium ${
                          schedule.type === 'closed' 
                            ? 'text-red-600' 
                            : schedule.type === 'weekend'
                            ? 'text-orange-600'
                            : 'text-blue-800'
                        }`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Zones de livraison */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin size={16} className="text-green-600" />
                    <h4 className="font-medium text-green-800">Zones de livraison</h4>
                  </div>
                  <div className="space-y-3">
                    {deliveryZones.map((zone, index) => (
                      <div key={index} className="border-l-2 border-green-300 pl-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-medium text-green-800">{zone.zone}</p>
                            <p className="text-xs text-green-600">{zone.time}</p>
                          </div>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            zone.price === 'Gratuit' 
                              ? 'bg-green-100 text-green-700'
                              : 'bg-orange-100 text-orange-700'
                          }`}>
                            {zone.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Informations de contact */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('contact')}
              className="flex items-center justify-between w-full mb-4 text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2 dark:text-gray-200">
                <Info size={18} />
                <span>Contact</span>
              </h3>
              {expandedSections.contact ? (
                <ChevronUp size={18} className="text-gray-500" />
              ) : (
                <ChevronDown size={18} className="text-gray-500" />
              )}
            </button>

            {expandedSections.contact && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone size={16} className="text-gray-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Téléphone</p>
                      <p className="text-sm text-gray-600">+237 6 XX XX XX XX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin size={16} className="text-gray-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Adresse</p>
                      <p className="text-sm text-gray-600">Campus Universitaire<br />Bâtiment Principal, RDC</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock size={16} className="text-gray-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Service client</p>
                      <p className="text-sm text-gray-600">Lun-Ven: 8h-17h</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Note importante */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <Info size={16} className="text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-yellow-800 mb-1">Note importante</p>
                <p className="text-xs text-yellow-700">
                  Les livraisons sont suspendues pendant les examens finaux. 
                  Consultez le planning académique pour plus d'informations.
                </p>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}