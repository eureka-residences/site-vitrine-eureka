import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

interface IQuantitySelectorProps {
  productID: string,
  initialQuantity: number, 
  min: number, 
  max: number, 
  onQuantityChange: (productID: string, newQuantity: number) => void 
}

export default function QuantitySelector({
  productID,
  initialQuantity = 1, 
  min = 1, 
  max = 99, 
  onQuantityChange 
}: IQuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(productID, newQuantity);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(productID, newQuantity);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value) || min;
    const clampedValue = Math.max(min, Math.min(max, value));
    setQuantity(clampedValue);
    onQuantityChange(productID, clampedValue);
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="bg-white dark:bg-gray-800 flex items-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden bg-white shadow-sm">
        <button
          onClick={handleDecrease}
          disabled={quantity <= min}
          className="p-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
          aria-label="Diminuer la quantité"
        >
          <Minus size={16} className="text-gray-600 dark:hover:text-gray-100" />
        </button>
        
        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          min={min}
          max={max}
          className="bg-transparent w-10 px-3 py-2 text-center border-0 text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-0 text-sm font-semibold"
        />
        
        <button
          onClick={handleIncrease}
          disabled={quantity >= max}
          className="p-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
          aria-label="Augmenter la quantité"
        >
          <Plus size={16} className="text-gray-600 dark:hover:text-gray-100" />
        </button>
      </div>
      
      <div className="ml-4 text-xs text-gray-500">
        Max: {max}
      </div>
    </div>
  );
}
