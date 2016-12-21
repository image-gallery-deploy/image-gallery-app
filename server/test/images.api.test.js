const chai = require( 'chai' );
const chaiHttp = require( 'chai-http' );
const assert = chai.assert;
chai.use( chaiHttp );
const Album = require('../lib/models/album.js');

const connection = require( '../lib/setup-mongoose' );

const app = require( '../lib/app' );

describe('test images resource route', () => {

  before(done => {
    const drop = () => connection.db.dropDatabase( done );
    if(connection.readyState === 1) drop( done );
    else connection.on( 'open', drop );
  });

  const request = chai.request( app );

  const album = new Album ({
    title: 'Bunnies',
    description: 'Cute!'
  });
  
  before(done => {
    album.save()
    .then(() => done());

  });

  const image = { 
    album: 'Bunnies',
    title: 'Miffy', 
    url: 'https://s-media-cache-ak0.pinimg.com/originals/d6/31/1a/d6311ab5afd4f13169ba15ecf0d16f72.jpg', 
    description: 'Sanrio cease and desist!', 
    albumId: {_id: album._id}
  };

  var imageResult = null;

  it('completes GET request on empty images db', done => {
    request
      .get( '/api/images' )
      .then(res => {
        assert.deepEqual( res.body, [] );
        done();
      })
      .catch( done );

  });

  it('completes image POST request', done => {
    request 
      .post( '/api/images' )
      .send( image )
      .then(res => {
        imageResult = res.body;
        image.__v = 0;
        image._id = imageResult._id;
        image.albumId = imageResult.albumId;
        assert.deepEqual( image, imageResult );
        done();
      })
      .catch( done );
  });

  it('completes GET request for all in collection', done => {
    request
      .get( '/api/images' )
      .then(res => {
        console.log('res.body[0].albumId: ', res.body[0].albumId);
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