export enum EProductCategory {
    FOOD = 'alimentation',
    HYGIENE = 'hygiene',
    SUPPLIES = 'fournitures',
    OTHER = 'autres'
}

export interface IProduct {
    /*.....................................................................
    ID of the product
	.....................................................................*/
    id : string;

    /*.....................................................................
    Price of the room
	.....................................................................*/
    price: number;

    /*.....................................................................
    Minimum quantity of the product
	.....................................................................*/
    qtyMin: number;

    /*.....................................................................
    Maximal quantity of the product
	.....................................................................*/
    qtyMax: number;

    /*.....................................................................
    Name of the product
	.....................................................................*/
    name: string;

    /*.....................................................................
    Category of the product
	.....................................................................*/
    category: EProductCategory;

    /*.....................................................................
    Image URL of the product
	.....................................................................*/
    imageUrl: string;

    /*.....................................................................
    Short description of the product
	.....................................................................*/
    shortDescription?: string;

    /*.....................................................................
    Mains features of the product
	.....................................................................*/
    feature?: string;
}

export interface IProductList {
    [productId: string]: number; // productId -> quantity
}

export interface IPaymentMethod {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
    bgColor: string;
    selectedBg: string;
    prefix: string;
}

export interface IPaymentMethodMinimal {
    method: string,
    phoneNumber: string,
}

export enum EPaymentMethod {
    /*.....................................................................
	The user pays via Orange Money.
	.....................................................................*/
    ORANGE_MONEY,

    /*.....................................................................
	The user pays via Mobile Money.
	.....................................................................*/
    MOBILE_MONEY,

    /*.....................................................................
	The user pays when they receive their order at the delivery location.
	.....................................................................*/
    CASH_AFTER_DELIVERY,

    /*.....................................................................
	The user pays when they come to collect their order.
	.....................................................................*/
    CASH_AFTER_COLLECT,
}

export interface IERKShopContext {
    // States

    /*.....................................................................
	HashMap to store selected products : { productId : quantity }
	.....................................................................*/
    selectedProducts: Record<string, number>;
    
    // Actions
    addProduct: (productId: string, quantity?: number) => void;
    removeProduct: (productId: string) => void;
    updateProductQuantity: (productId: string, quantity: number) => void;
    clearShoppingList: () => void;   
    
    // Getters
    getTotalUniqueItems: () => number;
    getTotalQuantity: () => number;
    getProductQuantity: (productId: string) => number;
    isProductInShoppingList: (productId: string) => boolean;
}