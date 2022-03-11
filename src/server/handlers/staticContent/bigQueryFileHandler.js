const readDataFromBigQueryData = require('../../utilities/readDataFromBigQuery');

module.exports = async (request, reply) => {
  try {
    const data = await readDataFromBigQueryData.readDataFromBigQuery({
      query: request.query.query,
      location: request.query.location
    });
    reply.code(200).send(data);
  } catch (error) {
    request.log.error({ message: 'something went wrong', error });
    reply.code(error.code).send({ message: 'something went wrong', error });
  }
};