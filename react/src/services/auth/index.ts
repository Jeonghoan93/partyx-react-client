import { Login } from "../../shared/interfaces/auth";
import { User } from "../../shared/interfaces/users";
import api from "../../utils/api";

export const login = async (payload: {
  email: string;
  password: string;
}): Promise<Login> => {
  const res = await api.post("/api/auth/login", payload);
  return res.data;
};

export const signup = async (payload: {
  confirmPassword: undefined;
  email: string;
  password: string;
}): Promise<User> => {
  const res = await api.post("/api/auth/register", payload);
  return res.data;
};
