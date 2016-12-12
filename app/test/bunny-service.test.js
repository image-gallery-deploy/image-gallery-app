
describe('handles REST calls from main controller', () => {
  const { assert } = chai;

  // mock up services module where service to be tested is defined
  beforeEach(
    angular.mock.module('services', {apiUrl: '/api'})

  );

  let $httpBackend = null, bunnyService = null;

  beforeEach(
    angular.mock.inject((_bunnyService_, _$httpBackend_) => {
      $httpBackend = _$httpBackend_;
      bunnyService = _bunnyService_;

    })
  );

  afterEach(() => {

    // make sure any mock REST cycles initiated 
    // by tests have completed
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();

  });
  
  it('completes get request', done => {

    const bunnies = ['foo', 'bar', 'baz'];

    $httpBackend
      .expectGET( '/api/bunnies' )
      .respond( bunnies );

    bunnyService.get()
      .then(allBunnies => {
        // must deepEqual to compare orig. mock data with 
        // $httpBackend-serialized mock res
        assert.deepEqual( allBunnies, bunnies );
        done();

      })
      .catch( done );

    // tell $httpBackend to start sending any res data so far  
    $httpBackend.flush();

  });

  it('completes add request', done => {

    const bunny = { 
      title: 'Miffy', 
      url: 'https://s-media-cache-ak0.pinimg.com/originals/d6/31/1a/d6311ab5afd4f13169ba15ecf0d16f72.jpg', 
      description: 'Sanrio cease and desist!' 
    };

    $httpBackend
      .expectPOST( '/api/bunnies', bunny )
      .respond( bunny );

    bunnyService.add( bunny )
      .then(savedBunny => {
        assert.deepEqual( savedBunny, bunny );
        done();
      })
      .catch(done);

    $httpBackend.flush();

  });

  it('completes remove request', done => {

    const bunny = 'bip';

    $httpBackend
      .expectDELETE( '/api/bunnies/bip' )
      .respond( bunny );

    bunnyService.remove( bunny )
      .then(deletedBunny => {
        assert.deepEqual( deletedBunny, bunny );
        done();
      })
      .catch(done);

    $httpBackend.flush();

  });
});