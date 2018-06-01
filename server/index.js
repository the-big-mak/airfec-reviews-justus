const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const aws = require('aws-sdk');
const helper = require('../s3Helpers/getPhotos.js');

const s3 = new aws.S3(); // Pass in opts to S3 if necessary
const app = express();

const port = 3001;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'));
});

app.get('/reviews', (req, res) => {
  db.getData(5, (err, data) => {
    if (err) {
      console.log('failed to get data', err)
      res.status(404).send('failed to get data from db', err);
    } else {
      res.status(200).send(data);
    }
  })
});

app.get('/photos', (req, res) => {
  helper.getPhotos((err, photos) => {
    if (err) {
      console.log('failed to get photos', err);
    } else {
      db.addHostPhotos(photos);
      // res.send(photos);
    }
  })
});

app.listen(port, () => {
  console.log('server listening on port ' + port);
});

// const aws = require('aws-sdk');
// const s3 = new aws.S3(); // Pass in opts to S3 if necessary

// var getParams = {
//     Bucket: 'abc', // your bucket name,
//     Key: 'abc.txt' // path to the object you're looking for
// }

