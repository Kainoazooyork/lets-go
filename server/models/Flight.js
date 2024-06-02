const { Schema, model } = require('mongoose');

const flightSchema = new Schema({
  flightNumber: { type: String, required: true },
  departure: { type: String, required: true },
  arrival: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = model('Flight', flightSchema);
