import axiosInstance from "./axios";

export const endpoints = {
  auth: {
    register: "/api/register",
    login: "/api/login",
  },
};

export const loginUser = async (payload) => {
  const response = await axiosInstance.post(endpoints.auth.login, payload);
  return response.data;
};

export const registerUser = async (payload) => {
  const response = await axiosInstance.post(endpoints.auth.register, payload);
  return response.data;
};
