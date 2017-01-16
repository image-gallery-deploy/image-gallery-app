const chai = require( 'chai' );
const chaiHttp = require( 'chai-http' );
const assert = chai.assert;
chai.use( chaiHttp );
const Album = require('../lib/models/album');

const connection = require( '../lib/setup-mongoose' );

const app = require( '../lib/app' );

describe('test albums resource route', () => {

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

  var albumResult = null;

  it('completes GET request on empty albums db', done => {
    request
      .get( '/api/albums' )
      .then(res => {
        assert.deepEqual( res.body, [] );
        done();
      })
      .catch( done );

  });

  it('completes album POST request', done => {
    request 
      .post( '/api/albums' )
      .send( album )
      .then(res => {
        albumResult = res.body;
        // album.__v = 0;
        // album._id = albumResult._id;
        // album.albumId = albumResult.albumId;
        assert.equal( album._id, albumResult._id );
        done();
      })
      .catch( done );
  });

  it('completes GET request for all albums in collection', done => {
    request
      .get( '/api/albums' )
      .then(res => {
        // console.log('res.body[0].albumId: ', res.body[0].albumId);
        assert.equal( res.body[0]._id, album._id );
        done();
      })
      .catch( done );
  });

  it('completes DELETE /:id request on individual album in collection', done => {
    request
      .delete( `/api/albums/${album._id}` )
      // .query( {_id:album._id} )
      .then(res => {
        albumResult = res.body;
        assert.equal( albumResult._id, album._id );
        done();
      })
      .catch( done );

  });

  // after(done => {
  //   connection.close( done );
  // });

});