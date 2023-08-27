export interface TicketNumber {
  _id: string;
  number: number;
  unavailableDates: Date[];
}

export interface Ticket {
  _id: string;
  name: string;
  desc: string;
  price: number;
  ticketNumbers: TicketNumber[];
}

export default Ticket;
