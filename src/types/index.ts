export interface Residence {
  id: string;
  name: string;
  address: string;
  description: string;
  imageUrl: string;
  availability: string;
  capacity: number;
  blocks: Block[];
}

export interface Block {
  id: string;
  name: string;
  capacity: number;
  rooms: Room[];
}

export interface Room {
  id: string;
  floor: number;
  area: number;
  price: number;
  available: boolean;
  imageUrl: string;
  type: RoomType;
}

export type RoomType = 'studio' | 'chambre';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export interface IBlock {
  /* identifier */
  readonly id: string,

  /* name of the residence */
  readonly name: string,

 /* Is the block already built ? */
  readonly bReady: boolean,

  /* total number of floor */
  readonly totalFloor: number,

  /* total number of rooms = capacity of the residence */
  readonly totalRoom: number,

  //===== According to the experience during the construction of the first block (Eureka)
  // is better to let the data below in an optional mode because.
  // Many factors can affect these 

  /* total number of standard room */
  readonly totalSoloConfortRoom?: number,
  
  /* total number of premium room */
  readonly totalSoloPremiumRoom?: number,
  
  /* total number of double room */
  readonly totalDuoRoom?: number,
  
  /* total number of available rooms */
  readonly availableRoomCount?: number,
  
  /* total number of available standard rooms */
  readonly availableSoloConfortRoomCount?: number,

  /* total number of available premium rooms */
  readonly availableSoloPremiumRoomCount?: number,

  /* total number of available double rooms */
  readonly availableDuoRoomCount?: number,

  readonly shortDescription?: string,

  readonly detailedDescription?: string,

  /* Planned date where the block should be ready */
  readonly scheduledDate?: string,
}

export type TRoomType = 'solo' | 'double' | 'premium';

export type LIT_SIMPLE_TYPESTR = 'Lit simple';

export type KITCHENETTE_TYPESTR = 'Kitchnette';

export type WIFI_TYPESTR = 'Wifi';

export type TRoomFeatureType = LIT_SIMPLE_TYPESTR | KITCHENETTE_TYPESTR | WIFI_TYPESTR;

export interface ILitSimple {
  type: LIT_SIMPLE_TYPESTR,

  details: {
    /* Dimensions in cm */
    width: number,
    height: number,
  }
}

export type MICRO_ONDE_TYPESTR = 'Micro-ondes';

export type PLAQUE_CUISSON_TYPESTR = 'Plaque de cuisson';

export type FRIDGE_TYPESTR = "Réfrigérateur";

export type TEquipmentType = MICRO_ONDE_TYPESTR | PLAQUE_CUISSON_TYPESTR | FRIDGE_TYPESTR;

export interface IKitchenette {
  type: KITCHENETTE_TYPESTR,

  details: {
    equipments: TEquipmentType[],
    cookwareIncluded: boolean
  }
}

export interface IWifi {
  type: 'Wifi',

  details: {
    throughput: number, // in Mo/s
    free: number,
  }
}

export type TRoomFeature = ILitSimple | IKitchenette | IWifi;

export interface IRoom {
  /* Identifier */
  id: string,
  
  /* Identifier of the block */
  idBlock: number,

  /* Floor number */
  floor: number,

  /* The price of the room */
  price: number,

  /* The type of the room */
  type: TRoomType,

  /* Image url of the room */
  imageUrl?: string,
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

  /* Image URL of the product */
  imageUrl: string,

  /* Short description of the product */
  shortDescription?: string,

  /* Mains features of the product */
  feature?: string,
}
