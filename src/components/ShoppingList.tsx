import React, { useState, useEffect } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ShoppingList() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      name: "T-Shirt Premium",
      price: 29.99,
      quantity: 2,
      image: "https://via.placeholder.com/60x60/3B82F6/FFFFFF?text=TS"
    },
    {
      id: 2,
      name: "Jean Slim",
      price: 79.99,
      quantity: 1,
      image: "https://via.placeholder.com/60x60/10B981/FFFFFF?text=J"
    },
    {
      id: 3,
      name: "Baskets Running",
      price: 119.99,
      quantity: 1,
      image: "https://via.placeholder.com/60x60/F59E0B/FFFFFF?text=B"
    },
    {
      id: 4,
      name: "Baskets Running",
      price: 119.99,
      quantity: 1,
      image: "https://via.placeholder.com/60x60/F59E0B/FFFFFF?text=B"
    },
    {
      id: 5,
      name: "Baskets Running",
      price: 119.99,
      quantity: 1,
      image: "https://via.placeholder.com/60x60/F59E0B/FFFFFF?text=B"
    }
  ]);

  // Nombre d'articles différents (pas les quantités)
  const itemCount = items.length;
  
  // Prix total
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
    } else {
      setItems(items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const clearList = () => {
    setItems([]);
  };

  const ShoppingListButton = () => (
    <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="relative bg-[#F7BF57] hover:bg-[#e6af4a] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          aria-label={`Ouvrir la liste - ${itemCount} articles`}
        >
          <ShoppingCart size={24} />
          
          {/* Badge avec le nombre d'articles */}
          {itemCount > 0 && (
            <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
              {itemCount > 99 ? '99+' : itemCount}
            </div>
          )}
        </button>
      </div>
  );

  return (
    <div>
      {/* Bouton flottant */}
      <ShoppingListButton />

      {/* Overlay et Popup */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          
          {/* Popup */}
          <div 
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* En-tête */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Ma Liste</h2>
                <p className="text-sm text-gray-600">{itemCount} article{itemCount !== 1 ? 's' : ''}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Fermer"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            {/* Contenu */}
            <div className="overflow-y-auto max-h-96">
              {items.length === 0 ? (
                <div className="p-8 text-center">
                  <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 text-lg font-medium">Votre liste est vide</p>
                  <p className="text-gray-400 text-sm mt-2">Ajoutez des articles pour commencer</p>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-800 truncate">{item.name}</h3>
                        <p className="text-sm text-blue-600 font-semibold">{item.price.toFixed(2)} F.CFA</p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
                        >
                          <Minus size={16} className="text-gray-600" />
                        </button>
                        
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
                        >
                          <Plus size={16} className="text-gray-600" />
                        </button>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:bg-red-100 rounded transition-colors duration-200 ml-2"
                        >
                          <Trash2 size={16} className="text-red-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer avec total et actions */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-blue-600">{totalPrice.toFixed(2)} F.CFA</span>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={clearList}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Vider la liste
                  </button>
                  <Link
                    to={`/boutique/payment-process/12ZDA3FD`}
                    onClick={() => {
                      // alert('Fonctionnalité de commande à implémenter !');
                      setIsOpen(false);
                    }}
                    className="flex-1 bg-[#F7BF57] hover:bg-[#e6af4a] text-center text-white py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Commander
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}