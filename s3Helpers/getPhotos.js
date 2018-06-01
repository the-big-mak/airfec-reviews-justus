const aws = require('aws-sdk');
const cred = require('./config.js');

aws.config.update({
  accessKeyId: 'AKIAJKIWRHBXQ73BG4YQ', 
  secretAccessKey: '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', 
  region: "us-west-1" 
});

const s3 = new aws.S3();

var getPhotos = (callback) => {
  var getParams = {
    Bucket: 'guestpics'
  }; 
  s3.listObjects(getParams, function(err, data) {
      if (err) {
        callback(err, null);
      } else {
        console.log('data', data)
        //let objectData = data.toString('utf-8'); // Use the encoding necessary
        callback(null, data.Contents);
      }
  });
};
 
module.exports = {
  getPhotos
}