import axios from "axios";
import { AppointmentSlot } from "../types/appointment-slot";

const API_URL = import.meta.env.VITE_API_URL;

export const getAppointmentSlotsByHealthProfessionalId = async (
  professionalId: string
) => {
  const response = await axios.get(
    `${API_URL}/appointment-slots/professional-id/${professionalId}`
  );
  return response.data;
};

export const getAppointmentSlotsById = async (id: string) => {
  const response = await axios.get(`${API_URL}/appointment-slots/${id}`);
  return response.data;
};

export const createAppointmentSlot = async (
  appointmentSlot: AppointmentSlot
) => {
  const response = await axios.post(
    `${API_URL}/appointment-slots`,
    appointmentSlot
  );
  return response.data;
};
