import template from './albums.html';

export default {
  template,
  controller,
  controllerAs: 'app'
};

controller.$inject = [ 'albumService' ];

function controller(albums) {

  albums.getAlbums().then(albums => {
    this.albums = albums;
  });

  this.add = album => {
    albums.add( album )
    .then(saved => {
      this.albums.push( saved );
    });
  };

  this.remove = album => {
    albums.remove( album._id )
    .then(() => {
      const index = this.albums.indexOf( album );
      if(index > -1) this.albums.splice( index, 1 );
    });
  };

}