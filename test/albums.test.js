
describe('test main component', () => {

  const { assert } = chai;

  angular.mock.module.sharedInjector();

  before(
    angular.mock.module('components')
  );

  let $component = null;
  before(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('loads,creates and removes album objects', () => {

    const albums = [
      { 
        title: 'Bunnies', 
        description: 'Cute!' 
      },
      { 
        title: 'Doggies', 
        description: 'Arf!' 
      }

    ];

    const album = { 
      title: 'Birdies', 
      description: 'Twirp!' 
    };

    const albumService = {
      getAlbums() {
        return Promise.resolve( albums );
      },
      add(album) {
        return Promise.resolve( album );
      },
      remove() {
        return Promise.resolve( album );
      }

    };

    let component = null;
    before(() => {
      component = $component('albums', { albumService });    
    }); 

    it('loads albums', done => {
      component.$onInit();

      setTimeout(() => {
        assert.equal(component.albums, albums);
        done();
      });

    });

    it('adds albums', done => {

      component.add( album );

      setTimeout(() => {
        assert.equal( albums.length, 3 );
        assert.equal( albums[2], album );
        done();
      });
      
    });

    it('removes albums', done => {
      
      component.remove( album );

      setTimeout(() => {
        assert.equal( albums.length, 2 );
        assert.equal( albums.indexOf( album ), -1 );
        done();

      });

    } );
  });
});
