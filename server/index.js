const express = require('express');
const path = require('path');
const db = require('../database/index.js');

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

app.listen(port, () => {
  console.log('server listening on port ' + port);
});