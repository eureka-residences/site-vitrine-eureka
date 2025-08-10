import { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { IPaymentMethod, IPaymentMethodMinimal } from '../types';

interface IPaymentMethodSelectorProps {
    onPaymentChange: (pmm: IPaymentMethodMinimal) => void
}

export default function PaymentMethodSelector({ onPaymentChange }: IPaymentMethodSelectorProps) {
    /*************** STATES ****************/

    const [selectedMethod, setSelectedMethod] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    
    /*************** DATA ****************/
    
    const paymentMethods: IPaymentMethod[] = [
        {
            id: 'orange_money',
            name: 'Orange Money',
            description: 'Paiement via Orange Money',
            icon: '📱',
            color: 'from-orange-500 to-orange-600',
            bgColor: 'bg-orange-50 border-orange-200',
            selectedBg: 'bg-orange-100 border-orange-500',
            prefix: '+237 6'
        },
        {
            id: 'mtn_money',
            name: 'MTN Mobile Money',
            description: 'Paiement via MTN MoMo',
            icon: '📱',
            color: 'from-yellow-500 to-yellow-600',
            bgColor: 'bg-yellow-50 border-yellow-200',
            selectedBg: 'bg-yellow-100 border-yellow-500',
            prefix: '+237 67'
        },
        {
            id: 'cash',
            name: 'En main propre',
            description: 'Paiement à la livraison',
            icon: '🤝',
            color: 'from-green-500 to-green-600',
            bgColor: 'bg-green-50 border-green-200',
            selectedBg: 'bg-green-100 border-green-500',
            prefix: ''
        }
    ];

    const selectedMethodData = paymentMethods.find(m => m.id === selectedMethod);
    const requiresPhone = selectedMethod && selectedMethod !== 'cash';

    /*************** HANDLERS ****************/

    const handleMethodSelect = (method : IPaymentMethod) => {
        setSelectedMethod(method.id);
        setPhoneNumber('');
        onPaymentChange({
            method: method.id,
            phoneNumber: ''
        });
    };

    const handlePhoneChange = (value: string) => {
        // Nettoyage du numéro (garder seulement les chiffres)
        const cleanNumber = value.replace(/\D/g, '');
        setPhoneNumber(cleanNumber);

        const selectedMethodData = paymentMethods.find(m => m.id === selectedMethod);
        onPaymentChange({
            method: selectedMethod,
            phoneNumber: selectedMethodData?.prefix + cleanNumber
        });
    };

    const formatPhoneDisplay = (number: string) => {
    // Formatage pour l'affichage (ajouter des espaces)
    return number.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4');
    };

    /*************** RENDER ****************/

    return (
    <>
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 dark:text-gray-100">Méthode de paiement</h2>
            <p className="text-gray-600">Choisissez votre mode de paiement préféré</p>
        </div>

        {/* Payment Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {paymentMethods.map((method) => (
            <div
                key={method.id}
                onClick={() => handleMethodSelect(method)}
                className={`
                    relative cursor-pointer rounded-xl border-2 p-4 transition-all duration-200 hover:shadow-md
                    ${selectedMethod === method.id ? method.selectedBg : method.bgColor}
                `}
            >
                {/* Selection badge */}
                {selectedMethod === method.id && (
                    <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    ✓
                    </div>
                )}

                {/* Card content */}
                <div className="text-center">
                    <div className="text-3xl mb-3">{method.icon}</div>
                    <h3 className="font-semibold text-gray-800 mb-1">{method.name}</h3>
                    <p className="text-sm text-gray-600">{method.description}</p>
                </div>

                {/* Visual indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${method.color} rounded-b-lg`}></div>
            </div>
        ))}
        </div>

        {/* [Conditional]: Phone number */}
        {requiresPhone && (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-300 dark:border-gray-600">
            <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                    <Phone size={20} className="text-gray-700 dark:text-gray-300" />
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                        Numéro de téléphone {selectedMethodData?.name}
                    </h3>
                </div>
                <p className="text-sm text-gray-600">
                    Entrez votre numéro pour recevoir la demande de paiement
                </p>
            </div>

            <div className="flex items-center space-x-3">
                <div className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
                    <span className="text-gray-600 font-medium text-sm">
                    {selectedMethodData?.prefix}
                    </span>
                </div>
                
                <div className="flex-1">
                    <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    placeholder="XX XX XX XX"
                    maxLength="8"
                    className="bg-transparent w-full px-4 py-2 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                    />
                </div>
            </div>

            {/* Show complete phone number */}
            {phoneNumber && (
            <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                <span className="font-medium">Numéro complet :</span> {selectedMethodData?.prefix}{formatPhoneDisplay(phoneNumber)}
                </p>
            </div>
            )}

            {/* Validation */}
            {phoneNumber && phoneNumber.length !== 8 && (
                <div className="mt-2 text-red-600 text-sm">
                    ⚠️ Le numéro doit contenir exactement 8 chiffres
                </div>
            )}
        </div>
        )}

        {/* [Conditional]: Message for payment by hand */}
        {selectedMethod === 'cash' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
            <MapPin size={20} className="text-green-600" />
            <h3 className="font-semibold text-green-800">Paiement à la livraison</h3>
            </div>
            <p className="text-green-700 text-sm">
            Vous paierez directement lors de la réception de votre commande. 
            Bien sûr le montant exact 😉.
            </p>
        </div>
        )}

        {/* Summary */}
        {selectedMethod && (
        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-100">Méthode sélectionnée :</span>
            <div className="flex items-center space-x-2">
                <span className="text-lg">{selectedMethodData?.icon}</span>
                <span className="font-semibold text-gray-800 dark:text-gray-200">{selectedMethodData?.name}</span>
            </div>
            </div>
            
            {requiresPhone && phoneNumber && phoneNumber.length === 8 && (
            <div className="flex items-center justify-between mt-2">
                <span className="text-gray-600 dark:text-gray-100">Numéro :</span>
                <span className="font-mono text-gray-800 dark:text-gray-200">
                {selectedMethodData?.prefix}{formatPhoneDisplay(phoneNumber)}
                </span>
            </div>
            )}
        </div>
        )}
    </>
    );
}