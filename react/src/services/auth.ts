import { Login } from "../interfaces/auth";
import { User } from "../interfaces/users";
import api from "../utils/api";

export const login = async (payload: {
  email: string;
  password: string;
}): Promise<Login> => {
  const res = await api.post("/api/auth/login", payload);
  return res.data;
};

export const signup = async (payload: any): Promise<User> => {
  const res = await api.post("/api/auth/register", payload);
  return res.data;
};
