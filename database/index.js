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

let addHostPhotos = (photos) => {
  console.log('photos', photos)
  for (let i = 0; i < photos.length; i++) {
    let queryStr = `UPDATE properties SET host_photo='${photos[i].Key}' WHERE id=${i}`;
    console.log('photos[i].key', photos[i].Key);
    connection.query(queryStr, (err, data) =>{ 
      if (err) {
        //callback(err, null);
        console.log('failed to update host photos', err);
      } else {
        //callback(null, data);
        console.log('succefully updated host photos');
      }
    });
  }
}

module.exports = {
  connection,
  getData,
  addHostPhotos
};

