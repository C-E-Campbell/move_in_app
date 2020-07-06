require('dotenv').config({ path: '../.env' });
const path = require('path');
const express = require('express');
const app = express();
const massive = require('massive');
const { PORT, CONN } = process.env;
const AuthRouter = require('./contollers/auth.js');

app.use(express.static(`${__dirname}/../build`));

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
app.use('/api/v1/auth', AuthRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server Live`);
});
