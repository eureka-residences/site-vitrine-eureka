import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '@components/PageBanner';
import Switcher from '@components/Switcher';

import PaymentMethodSelector from '@features/eurekashop/components/PaymentMethodSelector';
import { useERKShop } from '@features/eurekashop/hooks';
import { IProduct } from '@features/eurekashop/types';
import { STATIC_PRODUCTS_MAP } from '@features/eurekashop/static.data';


export default function PaymentProcessPage() {
    // =============== CONTEXT ===============
    
    const { 
        selectedProducts,
        removeProduct,
        updateProductQuantity
    } = useERKShop();
    
    // =============== DATA ===============

    // Selected product list [product0, product1, ...]
    const shoppingList = Object.keys(selectedProducts).map((key: string) => STATIC_PRODUCTS_MAP[key]);

    // Total price
    const totalPrice = shoppingList.reduce((accTotal: number, currProd: IProduct) => accTotal + currProd.price * selectedProducts[currProd.id], /* initialValue= */0);
    
    
    // =============== LOCAL STATES ===============
    
    const [step, setStep] = useState<number>(1);
    
    const [reservationNumber, setReservationNumber] = useState<string>('');
    
    const [isSwitcherOn, setIsSwitcherOn] = useState(false);
    
    const [formData, setFormData] = useState({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        accommodationType: ''
    });
    
    // =============== HANDLERS ===============
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Generate a random reservation number
        const number = 'PR-' + Math.random().toString(36).substring(2, 8).toUpperCase();
        setReservationNumber(number);
        setStep(3);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            <PageBanner 
                title="Explorez & achetez" 
                subtitle="Faites vos courses en ligne, commandez et faites-vous livrer !"
            />

            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Progress Steps */}
                <div className="mb-8">
                    <div className="flex items-center justify-center">
                        {[1, 2].map((number) => (
                        <div key={number} className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step >= number ? 'bg-[#F7BF57] text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                            }`}>
                            {number}
                            </div>
                            {number < 2 && (
                            <div className={`w-24 h-1 ${
                                step > number ? 'bg-[#F7BF57]' : 'bg-gray-200 dark:bg-gray-700'
                            }`} />
                            )}
                        </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-2 space-x-16">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Informations</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Confirmation</span>
                    </div>
                </div>

                
                {step === 1 && (
                <>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left section */}
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            {/* Payment information */}
                            <div className='p-6 bg-white dark:bg-gray-800  rounded-lg'>
                                <PaymentMethodSelector />
                            </div>
                            
                            {/* Form */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                    <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Nom complet
                                    </label>
                                    <input
                                        type="text"
                                        id="studentName"
                                        name="studentName"
                                        placeholder="Ex: Eru Eru Pita"
                                        aria-describedby="studentNameHelp"
                                        required
                                        aria-required="true"
                                        value={formData.studentName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                                    />
                                    <p id="studentNameHelp" className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        Entrez votre nom complet pour plus facilement vous identifier.
                                    </p>
                                    </div>

                                    <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Téléphone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Ex: +237 6 XX XX XX XX"
                                        aria-describedby="phoneHelp"
                                        pattern="[0-9+\s]+"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                                    />
                                    <p id="phoneHelp" className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        Format: code pays et numéro (nous pouvons vous appeler pour confirmer les détails).
                                    </p>
                                    </div>
                            
                                    <div className="mb-6">
                                        <Switcher 
                                            label='Je souhaite me faire livrer'
                                            bChecked={isSwitcherOn}
                                            onToggle={(checked: boolean) => setIsSwitcherOn(checked)}
                                        />
                                    </div>

                                    <div>
                                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Nom de l'emplacement
                                    </label>
                                    <input
                                        type="text"
                                        id="parentName"
                                        name="parentName"
                                        placeholder="Ex: Dernier poteau"
                                        aria-describedby="parentNameHelp"
                                        required
                                        value={formData.parentName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent"
                                    />
                                    <p id="parentNameHelp" className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        Nous contacterons cette personne pour finaliser la réservation.
                                    </p>
                                    </div>
                            
                                    <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description de votre emplacement</label>
                                    <textarea 
                                        id="message" 
                                        rows="4" 
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="Décrivez l'endroit où vous souhaitez vous faire livrer pour que nous puissons vous retrouver..."
                                    ></textarea>
                                    <p id="emailHelp" className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        Merci de rester joignable au moment de la livraison. 
                                    </p>
                                    </div>
                            
                                    <div className="flex justify-between pt-4">
                                    <Link
                                        to='/boutique'
                                        className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        Retour
                                    </Link>
                                    <button
                                        type="submit"
                                        onClick={()=> setStep(2)}
                                        className="px-6 py-2 bg-[#F7BF57] text-white rounded-md hover:bg-[#D9BEA3] dark:hover:bg-[#F7BF57]/80 transition-colors"
                                        aria-label="Confirmer"
                                    >
                                        Confirmer
                                    </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Right section : Shipping details & price */}
                        <div>
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                                <div className='p-6 pb-0'>
                                    <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Récapitulatif</h2>

                                    {shoppingList.map((item) => (
                                        <div key={item.id} className="flex items-center space-x-4 p-3 rounded-lg transition-colors duration-200">
                                        <img 
                                            src={item.imageUrl} 
                                            alt={item.name}
                                            className="w-12 h-12 rounded-lg object-cover"
                                        />
                                        
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-medium text-gray-700 dark:text-gray-300 truncate">{item.name}</h3>
                                            <p className="text-sm text-blue-600 font-semibold">{item.price.toFixed(2)} F.CFA</p>
                                        </div>
                                        
                                        <div className="flex items-center space-x-2">
                                            <button
                                            onClick={() => updateProductQuantity(item.id, selectedProducts[item.id] - 1)}
                                            className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
                                            >
                                            <Minus size={16} className="text-gray-600" />
                                            </button>
                                            
                                            <span className="w-8 text-center text-sm font-medium">{selectedProducts[item.id]}</span>
                                            
                                            <button
                                            onClick={() => updateProductQuantity(item.id, selectedProducts[item.id] + 1)}
                                            className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
                                            >
                                            <Plus size={16} className="text-gray-600" />
                                            </button>
                                            
                                            <button
                                            onClick={() => removeProduct(item.id)}
                                            className="p-1 hover:bg-red-100 rounded transition-colors duration-200 ml-2"
                                            >
                                            <Trash2 size={16} className="text-red-500" />
                                            </button>
                                        </div>
                                        </div>
                                    ))}
                                </div>

                                <div className='p-6'>
                                    <div className='space-y-6'>
                                        <div className='flex justify-between border-t border-gray-100 dark:border-gray-700 pt-4'>
                                            <span>Prix des articles</span>

                                            <span>{totalPrice} F.CFA</span>
                                        </div>

                                        <div className='flex justify-between'>
                                            <span>Prix de la livraison</span>

                                            <span>6500 F.CFA</span>
                                        </div>

                                        <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mb-5">
                                            <div className='flex justify-between'>
                                            <span className="text-xl font-semibold text-gray-800 dark:text-white">Prix total</span>

                                            <span className="text-xl font-semibold text-gray-800 dark:text-white">13000 F.CFA</span>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                )}
            </div>
        </div>
    );
}