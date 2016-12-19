import template from './images-album.html';

export default {
  template,
  controller,
  controllerAs: 'app'
};

controller.$inject = [ 'imageService' ];

function controller(images, album ) {
  console.log('images.album, getting album: ', album);

  images.get(album)
    .then(images => {
      console.log('images.get album: ', album);
      this.images = images;
      console.log('images: ', images);
    });

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