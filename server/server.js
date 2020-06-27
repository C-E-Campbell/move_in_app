const express = require('express');
const app = express();
require('dotenv').config({ path: '../.env' });
const { PORT } = process.env;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Open on ${PORT}`);
});
