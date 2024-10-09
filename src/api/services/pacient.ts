import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
type Pacient = {
  name: string;
  email: string;
  cpf: string;
};
export const registerPacient = async (pacient: Pacient) => {
  const response = await axios.post(`${API_URL}/pacients`, pacient);
  return response.data;
};
