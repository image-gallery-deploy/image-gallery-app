
describe('test UI add albums component', () => {

  const { assert } = chai;

  beforeEach(
    angular.mock.module('components')
  );

  let $component = null;
  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  const album = { 
    title: 'Birdies',
    description: 'Twirp!' 
  };

  describe('calls "albums\'" add() fn', () => {


    it('calls albums.add( album )', () => {
      const component = $component('albumize', {});
      
      component.title = 'Birdies';
      component.description = 'Twirp!';
      
      let result = null;
      component.add = (obj) => { result = obj; };

      component.addAlbum();

      assert.deepEqual( result, album );

      // test addImage internal call to reset()
      assert.equal( component.title, '' );
      assert.equal( component.description, '' );

    });    
    
    it('calls albums.reset()', () => {
      const component = $component('albumize', {});
      
      component.title = 'Birdies'; 
      component.description = 'Twirp!';
      
      component.reset();

      assert.equal( component.title, '' );
      assert.equal( component.description, '' );

    });
  });
});
