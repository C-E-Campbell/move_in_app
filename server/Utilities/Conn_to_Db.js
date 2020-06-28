const massive = require('massive');

function connectDb(conn) {
  massive({
    connectionString: conn,
    ssl: {
      rejectUnauthorized: false,
    },
  })
    .then((db) => {
      app.set('db', db);
      console.log('DB Connected');
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectDb;
