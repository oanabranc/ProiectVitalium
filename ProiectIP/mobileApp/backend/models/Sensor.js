const mongoose = require('mongoose');

const SensorSchema = new mongoose.Schema({
  patient_id: String,
  ekg_signal: String,
  heart_rate: String,
  bpm: Number,
  temperature: Number,
  humidity: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sensor', SensorSchema);
