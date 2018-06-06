const mysql = require('mysql');


const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'airFeC_reviews',
};

const connection = mysql.createConnection(config);

// connection.connect((err) => {
//   if (err) {
//     console.log('failed to make connection to airFeC_reviews', err);
//   } else {
//     console.log('connected to mysql database');
//   }
// });

const getData = (callback) => {
  const queryStr = `SELECT reviews.*, properties.host_name, properties.host_photo, properties.host_text FROM reviews, properties WHERE reviews.hostId = ${5} AND properties.id = ${5} OR reviews.hostId = ${6} AND properties.id = ${6}`;
  connection.query(queryStr, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const addPhotos = (photos) => {
  for (let i = 0; i < 100; i + 1) {
    // update the host photos, only 100 hosts
    if (i <= 100) {
      const hostPhotosQuery = `UPDATE properties SET host_photo='${photos[i].Key}' WHERE id=${i}`;
      connection.query(hostPhotosQuery, (err) => {
        if (err) {
          console.log('failed to update host photos', err);
        } else {
          console.log('succefully updated host photos');
        }
      });
    }
    // update the guests photos
    const guestPhotosQuery = `UPDATE reviews SET photo='${photos[i].Key}' WHERE id=${i}`;
    connection.query(guestPhotosQuery, (err) => {
      if (err) {
        console.log('failed to update guest photos', err);
      } else {
        console.log('succefully updated guest photos');
      }
    });
  }
};

module.exports = {
  connection,
  getData,
  addPhotos,
};

