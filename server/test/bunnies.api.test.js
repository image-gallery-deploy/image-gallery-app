const chai = require( 'chai' );
const chaiHttp = require( 'chai-http' );
const assert = chai.assert;
chai.use( chaiHttp );

const connection = require( '../lib/setup-mongoose' );

const app = require( '../lib/app' );

describe('test bunnies resource route', () => {

  before(done => {
    const drop = () => connection.db.dropDatabase( done );
    if(connection.readState === 1) drop( done );
    else connection.on( 'open', drop );
  });

  const request = chai.request( app );

  const bunny = { 
    title: 'Miffy', 
    url: 'https://s-media-cache-ak0.pinimg.com/originals/d6/31/1a/d6311ab5afd4f13169ba15ecf0d16f72.jpg', 
    description: 'Sanrio cease and desist!' 
  };

  var bunnyResult = null;

  it('completes GET request on empty db', done => {
    request
      .get( '/api/bunnies' )
      .then(res => {
        assert.deepEqual( res.body, [] );
        done();
      })
      .catch( done );

  });

  it('completes POST request', done => {
    request 
      .post( '/api/bunnies' )
      .send( bunny )
      .then(res => {
        bunnyResult = res.body;
        bunny.__v = 0;
        bunny._id = bunnyResult._id;
        done();
      })
      .catch( done );
  });

  it('completes GET request for all in collection', done => {
    request
      .get(  '/api/bunnies')
      .then(res => {
        assert.deepEqual( res.body, [bunny] );
        done();
      })
      .catch( done );
  });

  it('completes DELETE /:id request on individual item in collection', done => {
    request
      .delete( `/api/bunnies/${bunny._id}` )
      // .query( {_id:bunny._id} )
      .then(res => {
        bunnyResult = res.body;
        assert.deepEqual( bunnyResult, bunny );
        done();
      })
      .catch( done );

  });

  after(done => {
    connection.close( done );
  });

});