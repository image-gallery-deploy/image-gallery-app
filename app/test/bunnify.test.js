
// describe('test UI add component', () => {

//   const { assert } = chai;

//   beforeEach(
//     angular.mock.module('components')
//   );

//   let $component = null;
//   beforeEach(angular.mock.inject($componentController => {
//     $component = $componentController;
//   }));

//   describe('calls bunny-app\'s add() fn', () => {

//     const bunnies = [
//       { 
//         title: 'Snuggly-wuggly', 
//         url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
//         description: 'Aren\'t I the little dickens!' 
//       },
//       { 
//         title: 'Wudgy-wudgy', 
//         url: 'http://cdn.wallpapersafari.com/48/78/wf3rOl.jpg', 
//         description: 'Wiffle-wiffle!' 
//       }

//     ];

//     const bunny = { 
//       title: 'Ooooooh!', 
//       url: 'https://media.yayomg.com/wp-content/uploads/2014/04/yayomg-tiny-bunny.png', 
//       description: 'Meep!' 
//     };

//     const bunnyApp = {
//       get() {
//         return Promise.resolve( bunnies );
//       },    
//       add(bunny) {
//         return Promise.resolve( bunny );
//       }

//     };

//     it('adds bunnies', done => {
//       const component = $component('bunnify', { bunnyApp });

//       component.addBunny( bunny );

//       setTimeout(() => {
//         assert.equal( bunnies.length, 3 );
//         assert.equal( bunnies[2], bunny );
//         done();
//       });
      
//     });

//   });
// });
