const express = require('express');
const router = express.Router();
const Recommendation = require('../models/Recommendation');

router.get('/:patientId', async (req, res) => {
  const recs = await Recommendation.find({ patient_id: req.params.patientId });
  res.json(recs);
});

module.exports = router;
