import { Router } from "express";

import { AppointmentsService } from "../services/appointments.mjs";

const appointmentsRoutes = Router();

const appointmentService = new AppointmentsService();

appointmentsRoutes.post("/", async (req, res) => {
  const appointment = await appointmentService.create(req.body);
  return res.json(appointment);
});

export { appointmentsRoutes };
