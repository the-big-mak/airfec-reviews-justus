const express = require('express');
const path = require('path');
const db = require('../database/index');
const helper = require('../s3Helpers/getPhotos');

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, '../public/dist/')));

app.get('/reviews', (req, res) => {
  db.getData((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/photos', (req, res) => {
  helper.getPhotos((err, photos) => {
    if (err) {
      console.log('error in server photos', err)
      res.status(400).send(err);
    } else {
      console.log(photos);
      db.addPhotos(photos);
      res.status(200).send('successfully added photos');
    }
  });
});

app.listen(port, () => {
  console.log('server listening on port ', port);
});
