import Ticket from "../../shared/interfaces/ticket";
import api from "../../utils/api";

export const getTickets = async (eventId: string): Promise<Ticket[]> => {
  const res = await api.get(`/events/${eventId}/tickets`);
  return res.data;
};
