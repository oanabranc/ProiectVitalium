const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
  patient_id: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Alert', AlertSchema);
