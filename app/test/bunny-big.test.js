
describe('test UI remove component', () => {

  const { assert } = chai;

  beforeEach(
    angular.mock.module('components')
  );

  let $component = null;
  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('calls bunny-app\'s remove() fn', () => {

    const bunny = { 
      title: 'Miffy', 
      url: 'https://s-media-cache-ak0.pinimg.com/originals/d6/31/1a/d6311ab5afd4f13169ba15ecf0d16f72.jpg', 
      description: 'Sanrio cease and desist!' 
    };

    it('calls bunnyApp.remove()', () => {
      const component = $component('bunnyBig', {});

      component.bunny = { 
        title: 'Miffy', 
        url: 'https://s-media-cache-ak0.pinimg.com/originals/d6/31/1a/d6311ab5afd4f13169ba15ecf0d16f72.jpg', 
        description: 'Sanrio cease and desist!' 
      };
      
      let result = null;
      component.remove = ( obj ) => { result = obj; };

      component.delete();

      assert.deepEqual( result, bunny );
        
    });
    
  });
});
