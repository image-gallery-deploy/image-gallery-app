
describe('test UI add component', () => {

  const { assert } = chai;

  beforeEach(
    angular.mock.module('components')
  );

  let $component = null;
  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  const bunny = { 
    title: 'Miffy', 
    url: 'https://s-media-cache-ak0.pinimg.com/originals/d6/31/1a/d6311ab5afd4f13169ba15ecf0d16f72.jpg', 
    description: 'Sanrio cease and desist!' 
  };

  describe('calls bunny-app\'s add() fn', () => {


    it('calls bunnyApp.addBunny()', () => {
      const component = $component('bunnify', {});
      
      component.title = 'Miffy'; 
      component.url = 'https://s-media-cache-ak0.pinimg.com/originals/d6/31/1a/d6311ab5afd4f13169ba15ecf0d16f72.jpg'; 
      component.description = 'Sanrio cease and desist!';
      
      let result = null;
      component.add = (obj) => { result = obj; };

      component.addBunny();

      assert.deepEqual( result, bunny );

      // test addBunny internal call to reset()
      assert.equal( component.title, '' );
      assert.equal( component.url, '' );
      assert.equal( component.description, '' );

    });    
    
    it('calls bunnyApp.reset()', () => {
      const component = $component('bunnify', {});
      
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
