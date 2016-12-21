
describe('test UI add component', () => {

  const { assert } = chai;

  beforeEach(
    angular.mock.module('components')
  );

  let $component = null;
  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  const image = { 
    album: 'Bunnies',
    title: 'Miffy', 
    url: 'https://s-media-cache-ak0.pinimg.com/originals/d6/31/1a/d6311ab5afd4f13169ba15ecf0d16f72.jpg', 
    description: 'Sanrio cease and desist!' 
  };

  describe('calls "images\'" add() fn', () => {


    it('calls images.addImage()', () => {
      const component = $component('imagify', {});
      
      component.album = 'Bunnies';
      component.title = 'Miffy'; 
      component.url = 'https://s-media-cache-ak0.pinimg.com/originals/d6/31/1a/d6311ab5afd4f13169ba15ecf0d16f72.jpg'; 
      component.description = 'Sanrio cease and desist!';
      
      let result = null;
      component.add = (obj) => { result = obj; };

      component.addImage();

      assert.deepEqual( result, image );

      // test addImage internal call to reset()
      assert.equal( component.title, '' );
      assert.equal( component.url, '' );
      assert.equal( component.description, '' );

    });    
    
    it('calls images.reset()', () => {
      const component = $component('imagify', {});
      
      component.title = 'Miffy'; 
      component.url = 'https://s-media-cache-ak0.pinimg.com/originals/d6/31/1a/d6311ab5afd4f13169ba15ecf0d16f72.jpg'; 
      component.description = 'Sanrio cease and desist!';
      
      component.reset();

      assert.equal( component.title, '' );
      assert.equal( component.url, '' );
      assert.equal( component.description, '' );

    });
  });
});
