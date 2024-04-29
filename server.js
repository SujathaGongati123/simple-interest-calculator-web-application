// server.js

const express = require('express');
const { check, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/calculate', [
  check('principal').isNumeric(),
  check('rate').isNumeric(),
  check('time').isNumeric()
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { principal, rate, time } = req.body;
  const interest = (principal * rate * time) / 100;
  res.json({ interest });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
