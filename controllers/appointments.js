
const appointmentsRouter = require('express').Router();
const Appointment = require('../models/appointment');
const emailService = require('../utils/emailService');

appointmentsRouter.get('/', async (request, response) => { 
  const appointments = await Appointment.find({});
  response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  const body = request.body;

  const appointment = new Appointment({
    _id: body._id,
    time: body.time,
    duration: body.duration,
    details: body.details
  });

  const savedAppointment = await appointment.save();
  response.json(savedAppointment.toJSON());
  /*
  emailService.sendEmail(
    savedAppointment.details.email, 
    savedAppointment._id, savedAppointment.time, 
    savedAppointment.duration
  );
  */
})

appointmentsRouter.delete('/:id', async (request, response) => {
  await Appointment.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

module.exports = appointmentsRouter;