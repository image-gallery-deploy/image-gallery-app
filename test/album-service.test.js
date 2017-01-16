
describe('handles REST calls from main albums controller', () => {
  const { assert } = chai;

  // mock up services module where service to be tested is defined
  beforeEach(
    angular.mock.module('services', {apiUrl: '/api'})

  );

  let $httpBackend = null, albumService = null;

  beforeEach(
    angular.mock.inject((_albumService_, _$httpBackend_) => {
      $httpBackend = _$httpBackend_;
      albumService = _albumService_;

    })
  );

  afterEach(() => {

    // make sure any mock REST cycles initiated 
    // by tests have completed
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();

  });
  
  it('completes get request to albumController', done => {

    const albums = ['foo', 'bar', 'baz'];

    $httpBackend
      .expectGET( '/api/albums' )
      .respond( albums );

    albumService.getAlbums()
      .then(allAlbums => {
        // must deepEqual to compare orig. mock data with 
        // $httpBackend-serialized mock res
        assert.deepEqual( allAlbums, albums );
        done();

      })
      .catch( done );

    // tell $httpBackend to start sending any res data so far  
    $httpBackend.flush();

  });

  it('completes add request to albumController', done => {

    const album = { 
      title: 'Birdies', 
      description: 'Twirp!' 
    };

    $httpBackend
      .expectPOST( '/api/albums', album )
      .respond( album );

    albumService.add( album )
      .then(savedAlbum => {
        assert.deepEqual( savedAlbum, album );
        done();
      })
      .catch(done);

    $httpBackend.flush();

  });

  it('completes remove reque st to albumConroller', done => {

    const album = 'bip';

    $httpBackend
      .expectDELETE( '/api/albums/bip' )
      .respond( album );

    albumService.remove( album )
      .then(deletedAlbum => {
        assert.deepEqual( deletedAlbum, album );
        done();
      })
      .catch(done);

    $httpBackend.flush();

  });
});