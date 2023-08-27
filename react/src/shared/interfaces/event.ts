import Room from "./ticket";

export type Position = {
  lat: number;
  lon: number;
};

export interface Event {
  id?: string;
  _id: string;
  name: string;
  type: string;
  city: string;
  description?: string;
  address: string;
  position?: Position;
  desc: string;
  cheapestPrice: number;
  rating: number;
  images: string[];
  rooms: Room[];
  reviews: number;
  distance: number;
  freeAirportTaxi: boolean;
  freeCancellation: boolean;
  highlights: string;
}
export default Event;
