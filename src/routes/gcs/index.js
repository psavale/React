/**
 * Tokens Route Handler.
 * Add Token Module related routes here.
 */
 const gcsFileHandler = require('../../handlers/staticContent/gcsFileHandler');

 const routes = [{ url: '/gcsContent', method: 'GET', handler: gcsFileHandler }];
 
 module.exports = (fastify, opts, done) => {
   routes.forEach((route) => {
	 fastify.route(route);
   });
   done();
 };