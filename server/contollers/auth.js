var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { TOKEN } = process.env;

router.post('/login', async (req, res) => {
  const db = req.app.get('db');
  const { username, pass } = req.body;
  let myHash;
  await db
    .get_pass_hash([username])
    .then((data) => {
      if (data.length) {
        myHash = data[0].pass;
      } else {
        res.json('Invalid Pass').status(403);
      }
    })
    .then(async () => {
      if (bcrypt.compareSync(pass, myHash)) {
        let result;
        await db
          .get_user([username, myHash])
          .then((data) => {
            result = data[0];
          })
          .catch((err) => {
            console.log(err);
          });
        if (result) {
          const { commonname, id } = result;
          const user = { commonname, id };
          const accessToken = jwt.sign(user, TOKEN);
          res.json({ accessToken, user }).status(200);
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/register', async (req, res) => {
  const db = req.app.get('db');
  const { commonname, username, pass } = req.body;
  const hash = bcrypt.hashSync(pass, 11);
  db.add_new_user([commonname, username, hash])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.send(err).json('username taken').status(409);
    });
});

// function jwtAuth(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (token == null) return res.sendStatus(401);
//   jwt.verify(token, TOKEN, (err, user) => {
//     if (err) {
//       res.status(403);
//     }
//     req.user = user;
//     next();
//   });
// }

module.exports = router;
