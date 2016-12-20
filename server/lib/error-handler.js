
module.exports = function errorHandler( err, req, res, next ) { // eslint-disable-line no-unused-vars

  let code = 500, error = 'Internal Server Error';

  // If Mongoose Validation Error...
  if( err.name === 'ValidationError' || err.name === 'CastError' ) {
    console.log(err.errors);
    code = 400;
    error = err.name.message;

  // ...or one of our errors...  
  } else if( err.code ) {
    code = err.code;
    error = err.error;
    console.log( err.code, err.error );

  // ...or another creature entirely...
  } else {
    console.log( err );

  }

  res.status( code ).send( {error} );

};