require('dotenv').config({ path: '../.env' });
const express = require('express');
const app = express();
const massive = require('massive');
const { PORT, CONN } = process.env;
const router = require('./contollers/auth.js');

//CONNECT TO DB
massive({
  connectionString: CONN,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((dbInstance) => {
    app.set('db', dbInstance);
    console.log('Db Connected');
  })
  .catch((err) => {
    console.log(err);
  });

// MIDDLEWARE & ROUTES
app.use(express.json());
app.use('/v1/auth', router);

app.listen(PORT, () => {
  console.log(`Server Live`);
});
