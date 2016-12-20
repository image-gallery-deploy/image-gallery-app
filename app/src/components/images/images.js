import template from './images.html';
import styles from './images.scss';


export default {
  template,
  bindings: {album: '<'},
  controller
};

controller.$inject = [ 'imageService' ];

function controller(images) {
  this.styles = styles;

  console.log('now in images.js');
 
  this.$onInit = () => {
    images.get(this.album)
      .then(images => {
        console.log('images.get this.album: ', this.album);
        this.images = images;
        console.log('images: ', this.images);
      });
  };
  
  this.add = image => {
    images.add( image )
    .then(saved => {
      this.images.push( saved );
    });
  };

  this.remove = image => {
    images.remove( image._id )
    .then(() => {
      const index = this.images.indexOf( image );
      if(index > -1) this.images.splice( index, 1 );
    });
  };

}