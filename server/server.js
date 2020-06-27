const express = require('express');
const app = express();
require('dotenv').config({ path: '../.env' });
const { PORT, CONN } = process.env;
app.use(express.json());
const massive = require('massive');

massive({
  connectionString: CONN,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => {
  app.set('db', dbInstance);
  console.log('Db Connected');
});

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Open on ${PORT}`);
});
