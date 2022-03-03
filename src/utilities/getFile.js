/* eslint-disable prettier/prettier */
module.exports = {
	getFile: (remoteFile) => new Promise((res, rej) => {
	  let fileContents = Buffer.from('');
	  remoteFile
		.createReadStream()
		.on('data', (chunk) => {
		  fileContents = Buffer.concat([fileContents, chunk]);
		})
		.on('error', (error) => rej(error))
		.on('end', () => res(fileContents));
	})
  };