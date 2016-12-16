const chai = require( 'chai' );
const chaiHttp = require( 'chai-http' );
const assert = chai.assert;
chai.use( chaiHttp );

const connection = require( '../lib/setup-mongoose' );

const app = require( '../lib/app' );

describe('test images resource route', () => {

  before(done => {
    const drop = () => connection.db.dropDatabase( done );
    if(connection.readyState === 1) drop( done );
    else connection.on( 'open', drop );
  });

  const request = chai.request( app );

  const image = { 
    title: 'Miffy', 
    url: 'https://s-media-cache-ak0.pinimg.com/originals/d6/31/1a/d6311ab5afd4f13169ba15ecf0d16f72.jpg', 
    description: 'Sanrio cease and desist!' 
  };

  var imageResult = null;

  it('completes GET request on empty db', done => {
    request
      .get( '/api/images' )
      .then(res => {
        assert.deepEqual( res.body, [] );
        done();
      })
      .catch( done );

  });

  it('completes POST request', done => {
    request 
      .post( '/api/images' )
      .send( image )
      .then(res => {
        imageResult = res.body;
        image.__v = 0;
        image._id = imageResult._id;
        done();
      })
      .catch( done );
  });

  it('completes GET request for all in collection', done => {
    request
      .get(  '/api/images')
      .then(res => {
        assert.deepEqual( res.body, [image] );
        done();
      })
      .catch( done );
  });

  it('completes DELETE /:id request on individual item in collection', done => {
    request
      .delete( `/api/images/${image._id}` )
      // .query( {_id:image._id} )
      .then(res => {
        imageResult = res.body;
        assert.deepEqual( imageResult, image );
        done();
      })
      .catch( done );

  });

  after(done => {
    connection.close( done );
  });

});