const { Storage } = require('@google-cloud/storage');
const manifest = require('../manifest');
const { getFile } = require('./getFile');

const { gcsAuthFilePath } = manifest.plugins.gcsDetails;

module.exports = {
  readFileFromGCSBucket: async ({ filePathToRead, bucketName, request }) => {
    const storage = new Storage({
      keyFilename:
        gcsAuthFilePath.split('.').pop() === 'json'
          ? gcsAuthFilePath
          : `${gcsAuthFilePath}/${bucketName}.json`
    });
    const bucket = storage.bucket(bucketName);
    const remoteFile = bucket.file(filePathToRead);
    const [isExisting] = await remoteFile.exists();
    if (isExisting) {
      const data = {};
      await getFile(remoteFile)
        .then((res) => {
          data[filePathToRead] = res.toString('utf8');
          if (data[filePathToRead]) {
            data[filePathToRead] = data[filePathToRead].replace(/(\r\n|\n|\r| )/gm, '');
          }
        })
        .catch((error) => {
          request.log.error({ message: 'something went wrong', error });
        });
      return data;
    }
    return '';
  }
};