import Event from "./event";
import Ticket from "./ticket";
import { User } from "./users";

export interface Reservation {
  _id: string;
  user: User;
  event: Event;
  tickets: {
    ticket: Ticket;
    ticketNumbers: { number: number; unavailableDates: Date[] }[];
  }[];
  totalAmount: number;
}
