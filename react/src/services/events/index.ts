import Event from "../../shared/interfaces/event";
import api from "../../utils/api";

// set filter later
export const getEvents = async (): Promise<Event[]> => {
  const res = await api.get("/events");
  return res.data;
};

export const getEvent = async (eventId: string): Promise<Event> => {
  const res = await api.get(`/events/${eventId}`);
  return res.data;
};

export const countEventByCities = async (
  cities: string[]
): Promise<{ city: string; count: number }[]> => {
  const res = await api.get("/events", {
    params: { countByCities: cities.join(",") },
  });
  return res.data;
};

export const countEventByEventTypes = async (
  eventTypes: string[]
): Promise<{ type: string; count: number }[]> => {
  const res = await api.get("/events", {
    params: { countByEventTypes: eventTypes.join(",") },
  });
  return res.data;
};
