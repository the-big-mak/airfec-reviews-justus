const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index');
const helper = require('../s3Helpers/getPhotos');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/rooms/:id/', express.static(path.join(__dirname, '../public/dist/')));

app.get('/reviews', (req, res) => {
  db.getData(req.query.ID, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

console.log('test');

app.get('/photos', (req, res) => {
  helper.getPhotos((err, photos) => {
    if (err) {
      res.status(400).send(err);
    } else {
      db.addPhotos(photos);
      res.status(200).send('sucessfully added photos');
    }
  });
});

// uncomment this and to input photos into your mysql database, only needs to be run once
// helper.inputPhotos();

app.listen(port, () => {
  console.log('server listening on port ', port);
});
