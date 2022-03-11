const { BigQuery } = require('@google-cloud/bigquery');
const manifest = require('../manifest');

const { bigQueryAuthFilePath } = manifest.plugins.bigQueryDetails;

module.exports = {
  readDataFromBigQuery: async ({ query, location }) => {
    const bigquery = new BigQuery({
      keyFilename: bigQueryAuthFilePath
    });

    const option = {
      query,
      location
    };

    const [job] = await bigquery.createQueryJob(option);
    const [rows] = await job.getQueryResults();

    return rows;
  }
};