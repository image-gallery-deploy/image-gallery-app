
describe('test UI add component', () => {

  const { assert } = chai;

  beforeEach(
    angular.mock.module('components')
  );

  let $component = null;
  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('calls bunny-app\'s add() fn', () => {

    const bunny = { 
      title: 'Ooooooh!', 
      url: 'https://media.yayomg.com/wp-content/uploads/2014/04/yayomg-tiny-bunny.png', 
      description: 'Meep!' 
    };

    const bunnyApp = {

      remove(bunny) {
        return Promise.resolve( bunny );
      }

    };

    it('removes bunnies', done => {
      const component = $component('bunnyBig', { bunnyApp });
      
      component.remove = () => bunny;

      component.delete( bunny );

      setTimeout(() => {
        assert.deepEqual( component.remove(), bunny );
        done();

      });      
    });
  });
});
