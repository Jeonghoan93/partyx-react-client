import { Reservation } from "../../shared/interfaces/reservations";
import Ticket from "../../shared/interfaces/ticket";
import api from "../../utils/api";

export const getReservations = async (filters: {
  [key: string]: string | number | boolean;
}): Promise<Reservation[]> => {
  const res = await api.get("/reservations", { params: filters });
  return res.data;
};

export const createReservation = async (
  payload: Reservation
): Promise<Ticket> => {
  const res = await api.post("/reservations", payload);
  return res.data;
};

export const deleteReservation = async (reservationId: string) => {
  await api.delete(`/reservations/${reservationId}`);
};
