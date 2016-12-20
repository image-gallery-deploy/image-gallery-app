import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  controller,
};

controller.$inject = [ 'albumService' ];

function controller(albums) {
  this.styles = styles;
  console.log('in albums.js');
  albums.getAlbums().then(albums => {
    console.log('getting albums');
    this.albums = albums;
  });

  this.add = album => {
    albums.add( album )
    .then(saved => {
      this.albums.push( saved );
    });
  };

  this.remove = album => {
    console.log('removing album', album);
    albums.remove( album._id )
    .then(() => {
      const index = this.albums.indexOf( album );
      if(index > -1) this.albums.splice( index, 1 );
    });
  };

}