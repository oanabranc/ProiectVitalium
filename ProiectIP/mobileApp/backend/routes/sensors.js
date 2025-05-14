const express = require('express');
const router = express.Router();
const Sensor = require('../models/Sensor');

router.post('/', async (req, res) => {
  const data = new Sensor(req.body);
  await data.save();
  res.json({ message: 'Sensor data saved' });
});

module.exports = router;
