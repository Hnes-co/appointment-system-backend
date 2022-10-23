const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  _id: String,
  time: Date,
  duration: String,
  details: {
    name: String,
    email: String,
    notes: String
  }
});

appointmentSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject._id = returnedObject._id.toString()
    delete returnedObject.__v
  }
});

module.exports = mongoose.model('Appointment', appointmentSchema);