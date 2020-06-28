require('dotenv').config({ path: '../.env' });
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const { PORT, CONN, TOKEN } = process.env;
import connectDb from './Utilities/Conn_to_Db';

// MIDDLEWARE
app.use(express.json());

//CONNECT TO DB
connectDb(CONN);

app.post('/v1/login', (req, res) => {
  const db = req.app.get('db');
  const { username, pass } = req.body;

  const result = db.get_user([username, pass]).catch((err) => {
    console.log(err);
  });
  if (result) {
    const accessToken = jwt.sign({ username: result.commonname }, TOKEN);
    res.json({ accessToken }).status(200);
  }
});

app.post('/v1/register', (req, res) => {
  const db = req.app.get('db');
  const { commonname, username, pass, date } = req.body;

  const result = db
    .add_new_user([commonname, username, pass, date])
    .catch((err) => {
      res.json('username taken').status(409);
    });
});
app.listen(PORT, () => {
  console.log(`Server Live`);
});
