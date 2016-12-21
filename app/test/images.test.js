
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

  describe('loads,creates and removes image objects', () => {

    const images = [
      { 
        title: 'Snuggly-wuggly', 
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
        description: 'Aren\'t I the little dickens!' 
      },
      { 
        title: 'Wudgy-wudgy', 
        url: 'http://cdn.wallpapersafari.com/48/78/wf3rOl.jpg', 
        description: 'Wiffle-wiffle!' 
      }

    ];

    const image = { 
      title: 'Ooooooh!', 
      url: 'https://media.yayomg.com/wp-content/uploads/2014/04/yayomg-tiny-image.png', 
      description: 'Meep!' 
    };

    const imageService = {
      get() {
        return Promise.resolve( images );
      },
      add(image) {
        return Promise.resolve( image );
      },
      remove() {
        return Promise.resolve( image );
      }

    };

    let component = null;
    before(() => {
      component = $component('images', { imageService });    
    }); 

    it('loads images', done => {
      component.$onInit();

      setTimeout(() => {
        assert.equal(component.images, images);
        done();
      });

    });

    it('adds images', done => {

      component.add( image );

      setTimeout(() => {
        assert.equal( images.length, 3 );
        assert.equal( images[2], image );
        done();
      });
      
    });

    it('removes images', done => {
      
      component.remove( image );

      setTimeout(() => {
        assert.equal( images.length, 2 );
        assert.equal( images.indexOf( image ), -1 );
        done();

      });

    } );
  });
});
