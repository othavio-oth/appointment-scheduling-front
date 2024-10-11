import axios from "axios";
import { Pacient } from "../types/pacient";
const API_URL = import.meta.env.VITE_API_URL;

export const registerPacient = async (pacient: Pacient) => {
  const response = await axios.post(`${API_URL}/pacients`, pacient);
  return response.data;
};

export const createPacient = async (pacient: Pacient) => {
  const response = await axios.post(`${API_URL}/pacients`, pacient);
  return response.data;
};

export const getPacients = async () => {
  const response = await axios.get(`${API_URL}/pacients`);
  return response.data;
};

export const getPacientById = async (id: string) => {
  const response = await axios.get(`${API_URL}/pacients/${id}`);
  return response.data;
};

export const getPacientByEmail = async (email: string) => {
  const response = await axios.get(`${API_URL}/pacients/email/${email}`);
  return response.data;
};

export const getPacientByCpf = async (cpf: string) => {
  const response = await axios.get(`${API_URL}/pacients/cpf/${cpf}`);
  return response.data;
};
