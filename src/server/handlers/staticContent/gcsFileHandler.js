const readGCSFile = require('../../utilities/readFileFromGCSBucket');

module.exports = async (request, reply) => {
  try {
    const data = await readGCSFile.readFileFromGCSBucket({
      filePathToRead: request.query.staticFilePath,
      bucketName: request.query.bucketName,
      request
    });
    reply.code(200).send(data);
  } catch (error) {
    request.log.error({ message: 'something went wrong', error });
    reply.code(error.code).send({ message: 'something went wrong', error });
  }
};