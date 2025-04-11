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