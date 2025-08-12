import { useState } from 'react';
import PageBanner from '@components/PageBanner';

import { ShopSidebar, ShoppingList, QuantitySelector } from '@features/eurekashop/components';  
import { STATIC_PRODUCTS_MAP } from '@features/eurekashop/static.data';
import { IProduct } from '@features/eurekashop/types';


export default function ShopPage() {
    /*************** STATES ****************/
    
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilters, setActiveFilters] = useState<string[]>([]);

    // HashMap to store selected products : { productId : quantity }
    const [selectedProductList, setSelectedProductList] = useState<Record<string, number>>({});
    
    // For tracking quantity of each product before adding to the list
    const [productQuantities, setProductQuantities] = useState<Record<string, number>>({});
    
    /*************** HANDLERS ****************/

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        console.log('Recherche:', term);
    };

    const handleFilters = (filters: string[]) => {
        setActiveFilters(filters);
        console.log('Filtres actifs:', filters);
    };
    
    const handleOnQuantityChange = (productId: string, qty: number, bFromShoppingList: boolean = false) => {
        setProductQuantities(prev => ({
            ...prev,
            [productId]: qty
        }));

        if (bFromShoppingList){    
            setSelectedProductList(prev => ({
                ...prev,
                [productId]: qty
            }));
        }
    }

    const handleOnAddButtonClick = (productID: string, qty?: number) => {
        // Retrieves quantity from the state or from parameters
        const quantityToAdd = qty || productQuantities[productID] || 1;

        setSelectedProductList(prev => {
            const currentQuantity = prev[productID] || 0;
            const newQuantity = currentQuantity + quantityToAdd;

            return {
                ...prev,
                [productID]: newQuantity,
            };

        });

        // [Optional] : reset quantity after adding
        setProductQuantities(prev => ({
            ...prev,
            [productID]: 1
        }));

        console.log(`Produit ${productID} ajouté avec quantité ${quantityToAdd}`);
    }

    const handleRemoveProduct = (productID: string) => {
        setSelectedProductList(prev => {
            const newProductList = {...prev};
            delete newProductList[productID];
            return newProductList;
        });

        console.log(`Produit ${productID} supprimé de la liste`);
    }



    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            <PageBanner 
                title="EUREKASHOP" 
                subtitle="Faites vos courses en ligne, commandez et faites-vous livrer !"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-8 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-4">
                        <ShopSidebar 
                            isOpen={true}
                            onToggle={() => setSidebarOpen(!sidebarOpen)}
                            onSearchChange={handleSearch}
                            onFiltersChange={handleFilters}
                        />
                    </div>
                </div>


                <div className="lg:col-span-6">
                    {/* Informations sur la recherche et filtres actifs */}
                    <div className="col-span-3">
                        {searchTerm && (
                        <p className="text-gray-600 mb-2">
                            Recherche pour: <span className="font-semibold">"{searchTerm}"</span>
                        </p>
                        )}
                        {activeFilters.length > 0 && (
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="text-gray-600">Filtres actifs:</span>
                            {activeFilters.map(filter => (
                            <span key={filter} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                {filter}
                            </span>
                            ))}
                        </div>
                        )}
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Product card */}
                    {Object.values(STATIC_PRODUCTS_MAP).map((product: IProduct, i: number) => (activeFilters.length === 0 || activeFilters.includes(product.category)) && (
                        <div key={`product-${i}`} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="w-full h-32 bg-gray-200 rounded-lg mb-3"></div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{product.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{product.shortDescription}</p>
                            <p className="text-[#F7BF57] font-bold">2,500 FCFA</p>

                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 my-5">
                                <div className="flex justify-between">
                                    <QuantitySelector
                                        productID={product.id}
                                        initialQuantity={1} 
                                        min={product.qtyMin} 
                                        max={product.qtyMax} 
                                        onQuantityChange={handleOnQuantityChange} 
                                    />
            
                                    <button
                                        onClick={() => handleOnAddButtonClick(product.id, productQuantities[product.id])}
                                        className="bg-[#F7BF57] hover:bg-[#e6af4a] text-white px-4 py-2 rounded-md text-sm transition-colors"
                                    >
                                        Ajouter
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    </div>

                    
                    <ShoppingList 
                        productIDList={selectedProductList}
                        handleRemoveProduct={handleRemoveProduct}
                        handleOnQuantityChange={handleOnQuantityChange}
                    />
                </div>
            </div>
        </div>
    );
}