import React from 'react';
import PageBanner from '@components/PageBanner';
import QuantitySelector from '@components/QuantitySelector';

import ProductCard from '@components/ProductCard';
import ShoppingList from '@components/ShoppingList';

import { STATIC_PRODUCTS_LIST } from '@utils/products.data';


export default function ShopPage() {
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            <PageBanner 
                title="Explorez & achetez" 
                subtitle="Faites vos courses en ligne, commandez et faites-vous livrer !"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {STATIC_PRODUCTS_LIST.map((product) => (
                        <ProductCard 
                            price={product.price}
                            qtyMin={1}
                            qtyMax={product.qtyMax}
                            name={product.name}
                            shortDescription={product.shortDescription}
                            feature={product.feature}
                        />
                    ))}
                    
                    <ShoppingList />
                </div>
            </div>
        </div>
    );
}