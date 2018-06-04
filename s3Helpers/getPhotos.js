const aws = require('aws-sdk');
const cred = require('./config');

aws.config.update({
  accessKeyId: cred.accessKey,
  secretAccessKey: cred.secretKey,
  region: 'us-west-1',
});

const s3 = new aws.S3();

const getPhotos = (callback) => {
  const getParams = {
    Bucket: 'guestpics',
  };
  s3.listObjects(getParams, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data.Contents);
    }
  });
};

module.exports = {
  getPhotos,
};
