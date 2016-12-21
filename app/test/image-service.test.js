
describe('handles REST calls from main images controller', () => {
  const { assert } = chai;

  // mock up services module where service to be tested is defined
  beforeEach(
    angular.mock.module('services', {apiUrl: '/api'})

  );

  let $httpBackend = null, imageService = null;

  beforeEach(
    angular.mock.inject((_imageService_, _$httpBackend_) => {
      $httpBackend = _$httpBackend_;
      imageService = _imageService_;

    })
  );

  afterEach(() => {

    // make sure any mock REST cycles initiated 
    // by tests have completed
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();

  });
  
  it('completes get request to imageController', done => {

    const images = ['foo', 'bar', 'baz'];

    $httpBackend
      .expectGET( '/api/images' )
      .respond( images );

    imageService.get()
      .then(allImages => {
        // must deepEqual to compare orig. mock data with 
        // $httpBackend-serialized mock res
        assert.deepEqual( allImages, images );
        done();

      })
      .catch( done );

    // tell $httpBackend to start sending any res data so far  
    $httpBackend.flush();

  });

  it('completes add request to imageController', done => {

    const image = { 
      title: 'Miffy', 
      url: 'https://s-media-cache-ak0.pinimg.com/originals/d6/31/1a/d6311ab5afd4f13169ba15ecf0d16f72.jpg', 
      description: 'Sanrio cease and desist!' 
    };

    $httpBackend
      .expectPOST( '/api/images', image )
      .respond( image );

    imageService.add( image )
      .then(savedImage => {
        assert.deepEqual( savedImage, image );
        done();
      })
      .catch(done);

    $httpBackend.flush();

  });

  it('completes remove request to imageConroller', done => {

    const image = 'bip';

    $httpBackend
      .expectDELETE( '/api/images/bip' )
      .respond( image );

    imageService.remove( image )
      .then(deletedImage => {
        assert.deepEqual( deletedImage, image );
        done();
      })
      .catch(done);

    $httpBackend.flush();

  });
});