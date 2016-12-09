const express = require( 'express' );
const app = express();
const errorHandler = require( './error-handler' );
const morgan = require( 'morgan' );

const bunnies = require( './routes/bunnies' );

app.use( morgan('dev') );

if( process.env.NODE_ENV === 'production' ) {
  app.use( (req, res, next ) => {
    if( req.headers[ 'x-forwarded-proto' ] === 'https' ) next();
    else res.redirect( `https://${req.hostname}${req.url}` );
  });
}

app.use( (req, res, next) => {
  const url = '*';
  res.header( 'Access-Control-Allow-Origin', url );
  res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
  res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
  next();
});
app.use(express.static('/public'));

app.use('/api/bunnies', bunnies);

app.use(errorHandler);

module.exports = app;