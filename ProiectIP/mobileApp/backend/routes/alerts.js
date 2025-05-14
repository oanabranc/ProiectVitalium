const express = require('express');
const router = express.Router();
const Alert = require('../models/Alert');

router.get('/:patientId', async (req, res) => {
  const alerts = await Alert.find({ patient_id: req.params.patientId });
  res.json(alerts);
});

router.post('/', async (req, res) => {
  const alert = new Alert(req.body);
  await alert.save();
  res.json({ message: 'Alert saved' });
});

module.exports = router;
