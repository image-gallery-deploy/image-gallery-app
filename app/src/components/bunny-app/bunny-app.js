import template from './bunny-app.html';

export default {
  template,
  controller,
  controllerAs: 'app'
};

controller.$inject = [ 'bunnyService' ];

function controller(bunnies) {

  bunnies.get().then(bunnies => {
    this.bunnies = bunnies;
  });

  this.add = bunny => {
    bunnies.add( bunny )
    .then(saved => {
      this.bunnies.push( saved );
    });
  };

  this.remove = bunny => {
    bunnies.remove( bunny._id )
    .then(() => {
      const index = this.bunnies.indexOf( bunny );
      if(index > -1) this.bunnies.splice( index, 1 );
    });
  };

}