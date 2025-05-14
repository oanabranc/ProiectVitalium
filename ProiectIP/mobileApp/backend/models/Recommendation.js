const mongoose = require('mongoose');

const RecommendationSchema = new mongoose.Schema({
  patient_id: String,
  doctor_id: String,
  activity_type: String,
  duration: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recommendation', RecommendationSchema);
