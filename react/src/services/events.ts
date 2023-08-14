import Property from "../interfaces/properties";
import api from "../utils/api";

export const getEvents = async (filters: {
  [key: string]: string | number | boolean;
}): Promise<Property[]> => {
  const res = await api.get("/properties", { params: filters });
  return res.data;
};

export const getEvent = async (eventId: string): Promise<Property> => {
  const res = await api.get(`/properties/${eventId}`);
  return res.data;
};

export const countEventByCities = async (
  cities: string[]
): Promise<{ city: string; count: number }[]> => {
  const res = await api.get("/properties", {
    params: { countByCities: cities.join(",") },
  });
  return res.data;
};

export const countEventByEventTypes = async (
  propertyTypes: string[]
): Promise<{ type: string; count: number }[]> => {
  const res = await api.get("/properties", {
    params: { countByPropertyTypes: propertyTypes.join(",") },
  });
  return res.data;
};
