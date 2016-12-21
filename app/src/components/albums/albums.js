import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  controller,
};

controller.$inject = [ 'albumService' ];

function controller(albums) {
  this.styles = styles;
  this.$onInit = () => {
    albums.getAlbums().then(albums => {
      this.albums = albums;
    });
  };

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