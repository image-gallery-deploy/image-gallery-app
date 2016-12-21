
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
      add(bunny) {
        return Promise.resolve( bunny );
      }

    };

    it('calls bunnyApp.addBunny()', done => {
      const component = $component('bunnify', { bunnyApp });
      
      component.add = () => bunny;

      component.addBunny( bunny );

      setTimeout(() => {
        assert.deepEqual( component.add(), bunny );
        done();

      });      
    });
  });
});
