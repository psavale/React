const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// const ronin     = require('ronin-server' )
// const mocks     = require('ronin-mocks' )
// const database  = require('ronin-database' )

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: '', //config.output.publicPath,
}));

app.get('/', (_req, res) => {
  res.send(`<h1> React is Excellent !! </h1>`);
})

app.listen(8888);
console.log('server is listening');

// const server = ronin.server()
// database.connect( process.env.CONNECTIONSTRING )
// server.use( '/', mocks.server( server.Router(), false, false ) )
// server.start()