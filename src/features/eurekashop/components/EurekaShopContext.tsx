import { 
    createContext, 
    useState, 
    ReactNode, 
    useCallback, 
    useMemo 
} from 'react';
import { ERK_LOG, LogCategory } from '@utils/logger';
import { IERKShopContext } from '@features/eurekashop/types'


export const ERKShopContext = createContext<IERKShopContext | undefined>(undefined);


interface IERKShopProviderProps {
    children: ReactNode;
}


export default function ERKShopProvider({ children }: IERKShopProviderProps) {
    const [selectedProducts, setSelectedProducts] = useState<Record<string, number>>({});

    
    // =============== SHOPPING LIST ACTIONS (memoized to avoid re-render) ===============


    /*.....................................................................
	Add a product in the shopping list (cart).
    This function can also be used to update the product quantity if the 
    productId is already in the list.
	.....................................................................*/
    const addProduct = useCallback((productId: string, quantity: number = 1) => {
        setSelectedProducts((prev: Record<string, number>) => {
            const currentQuantity = prev[productId] || 0;
            const newQuantity = currentQuantity + quantity;
            
            return {
                ...prev,
                [productId]: newQuantity
            };
        });
        
        ERK_LOG(LogCategory.DEBUG, `✅ Produit ${productId} ajouté avec quantité ${quantity}`);
    }, []);

    /*.....................................................................
	Completly delete a product from the product list (cart).
	.....................................................................*/
    const removeProduct = useCallback((productId: string) => {
        setSelectedProducts((prev: Record<string, number>) => {
            const newProducts = { ...prev };
            delete newProducts[productId];
            return newProducts;
        });
        
        ERK_LOG(LogCategory.DEBUG, `🗑️ Produit ${productId} supprimé du panier`);
    }, []);

    /*.....................................................................
	Edit the product quantity in product list.
	.....................................................................*/
    const updateProductQuantity = useCallback((productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeProduct(productId);
        } else {
            setSelectedProducts((prev: Record<string, number>) => ({
                ...prev,
                [productId]: quantity
            }));
        }
        
        ERK_LOG(LogCategory.DEBUG, `🔄 Quantité du produit ${productId} mise à jour: ${quantity}`);
    }, []);


    /*.....................................................................
	Delete all items in the product list.
	.....................................................................*/
    const clearShoppingList = useCallback(() => {
        setSelectedProducts({});

        ERK_LOG(LogCategory.DEBUG, `🧹 Panier vidé`);
    }, []);


    // =============== GETTERS (memoized for computation) ===============


    /*.....................................................................
	Give the total number of distinct product.
	.....................................................................*/
    const getTotalUniqueItems = useCallback((): number => {
        return Object.keys(selectedProducts).length;
    }, [selectedProducts]);

    /*.....................................................................
	Give the total quantity of the shopping list.
	.....................................................................*/
    const getTotalQuantity = useCallback((): number => {
        return Object.values<number>(selectedProducts).reduce((total: number, qty: number) => total + qty, 0);
    }, [selectedProducts]);

    /*.....................................................................
	Give the quantity of a given productId.
	.....................................................................*/
    const getProductQuantity = useCallback((productId: string): number => {
        return selectedProducts[productId] || 0;
    }, [selectedProducts]);

    /*.....................................................................
	Check if a product is in the shopping list.
	.....................................................................*/
    const isProductInShoppingList = useCallback((productId: string): boolean => {
        return productId in selectedProducts;
    }, [selectedProducts]);


    // =============== CONTEXT VALUE (memoized to avoid re-render) ===============


    const contextValue = useMemo((): IERKShopContext => ({
        selectedProducts,

        addProduct,
        removeProduct,
        updateProductQuantity,
        clearShoppingList,
        
        getTotalUniqueItems,
        getTotalQuantity,
        getProductQuantity,
        isProductInShoppingList,
    }), [
        selectedProducts,

        addProduct,
        removeProduct,
        updateProductQuantity,
        clearShoppingList,
        
        getTotalUniqueItems,
        getTotalQuantity,
        getProductQuantity,
        isProductInShoppingList,
    ]);

    return (
        <ERKShopContext.Provider value={contextValue}>
            {children}
        </ERKShopContext.Provider>
    );
}
