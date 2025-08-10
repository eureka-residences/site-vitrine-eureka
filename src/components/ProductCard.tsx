import React from "react";
import { Link } from 'react-router-dom';
import QuantitySelector from "@components/QuantitySelector";

interface IProductCardProps {
    price: number,
    qtyMin: number,
    qtyMax: number,
    name: string,
    shortDescription?: string,
    feature?: string,
}


export default function ProductCard({
    price = 6500,
    qtyMin = 1,
    qtyMax = 15,
    name = 'Bouteille de gaz',
    shortDescription = '',
    feature = '500L',
}: IProductCardProps) {
    return (
        <div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
            <div className="relative h-48">
                <img 
                    src='https://irogaz.com/storage/images/product/camgaz-12-5kg-77-0.png'
                    alt='Bouteille de gaz' 
                    className="w-full h-full object-cover object-center"
                />
                {/* Badge de disponibilité */}
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${
                    true 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/60 dark:text-green-200'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/60 dark:text-red-200'
                }`}>
                {true ? 'Disponible' : 'Pls disponible'}
                </div>
            </div>

            <div className="p-6">
                <div className="mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        {name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {shortDescription}
                    </p>
                </div>
            
                <div className="flex justify-between items-center mb-4">
                    <span className="text-[#F7BF57] font-medium">{feature}</span>

                    <span className="text-gray-900 dark:text-gray-100 font-bold">
                        {price} F.CFA
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-normal"></span>
                    </span>
                </div>

                <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mb-5">
                    <div className="flex justify-between">
                        <QuantitySelector min={qtyMin} max={qtyMax} onQuantityChange={(a)=>{}} />

                        <Link
                            to="/boutique/:id"
                            className="bg-[#F7BF57] hover:bg-[#e6af4a] text-white px-4 py-2 rounded-md text-sm transition-colors"
                        >
                            Ajouter
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}