export enum EProductCategory {
    FOOD = 'alimentation',
    HYGIENE = 'hygiene',
    SUPPLIES = 'fournitures',
    OTHER = 'autres'
}

export interface IProduct {
    /* ID of the product */
    id : string,

    /* Price of the room */
    price: number,

    /* Minimum quantity of the product */
    qtyMin: number,

    /* Maximal quantity of the product */
    qtyMax: number,

    /* Name of the product */
    name: string,

    /* Category of the product */
    category: EProductCategory,

    /* Image URL of the product */
    imageUrl: string,

    /* Short description of the product */
    shortDescription?: string,

    /* Mains features of the product */
    feature?: string,
}

export interface IPaymentMethod {
    id: string,
    name: string,
    description: string,
    icon: string,
    color: string,
    bgColor: string,
    selectedBg: string,
    prefix: string,
}

export interface IPaymentMethodMinimal {
    method: string,
    phoneNumber: string,
}