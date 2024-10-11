export type AppointmentSlot = {
  id: string;
  startTime: string;
  endTime: string;
  canceled: boolean;
  available: boolean;
  healthProfessionalId: string;
};
