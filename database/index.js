const mysql = require('mysql');


const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'airFeC_reviews'
};

let connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.log('failed to make connection to airFeC_reviews', err);
  } else {
    console.log('connected to mysql database');
  }
});

let getData = (id, callback) => {
  let queryStr = `select reviews.*, hosts.name from reviews, hosts where reviews.hostId = ${id} && hosts.id = ${id}`;
  connection.query(queryStr, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  })
};

module.exports = {
  connection,
  getData
};

