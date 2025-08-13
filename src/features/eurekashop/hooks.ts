import { useMemo, useContext, useCallback } from "react";
import { ERKShopContext } from '@features/eurekashop/components'
import { IERKShopContext } from "@features/eurekashop/types";

export const useERKShop = (): IERKShopContext => {
    const context = useContext(ERKShopContext);

    if (context === undefined) {
        throw new Error('useERKShop hook should be use into the ERKShopProvider');
    }

    return context;
}

export const useShoppingCart = () => {
    const context = useERKShop();
    
    const isEmpty = useMemo(() => 
        context.getTotalUniqueItems() === 0, 
        [context.getTotalUniqueItems]
    );
    
    const incrementProduct = useCallback((productId: string) => {
        const currentQty = context.getProductQuantity(productId);
        context.updateProductQuantity(productId, currentQty + 1);
    }, [context]);
    
    const decrementProduct = useCallback((productId: string) => {
        const currentQty = context.getProductQuantity(productId);
        if (currentQty > 1) {
            context.updateProductQuantity(productId, currentQty - 1);
        } else {
            context.removeProduct(productId);
        }
    }, [context]);
    
    const getProductsArray = useCallback(() => {
        return Object.entries(context.selectedProducts).map(([productId, quantity]) => ({
            productId,
            quantity
        }));
    }, [context.selectedProducts]);
    
    const calculateTotal = useCallback((products: any[]) => {
        return Object.entries<number>(context.selectedProducts).reduce((total, [productId, quantity]) => {
            const product = products.find(p => p.id === productId);
            const price = parseFloat(product?.price) || 0;
            return total + (price * quantity);
        }, 0);
    }, [context.selectedProducts]);
    
    return {
        // All the context
        ...context,
        
        // Additional features
        isEmpty,
        incrementProduct,
        decrementProduct,
        getProductsArray,
        calculateTotal,
    };
};