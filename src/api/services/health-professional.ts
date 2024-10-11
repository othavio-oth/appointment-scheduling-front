import axios from "axios";
import { HealthProfessional } from "../types/health-professional";

const API_URL = import.meta.env.VITE_API_URL;

export const getHealthProfessionals = async () => {
  const response = await axios.get(`${API_URL}/health-professionals`);
  return response.data;
};

export const createHealthProfessional = async (
  healthProfessional: HealthProfessional
) => {
  const response = await axios.post(
    `${API_URL}/health-professionals`,
    healthProfessional
  );
  return response.data;
};

export const getHealthProfessionalByEmail = async (email: string) => {
  const response = await axios.get(
    `${API_URL}/health-professionals/email/${email}`
  );
  return response.data;
};

export const getHealthProfessionalById = async (id: string) => {
  const response = await axios.get(`${API_URL}/health-professionals/${id}`);
  return response.data;
};
