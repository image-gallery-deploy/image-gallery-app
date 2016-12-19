import template from './images.html';

export default {
  template,
  bindings: {album: '<'},
  controller,
  controllerAs: 'app'
};

controller.$inject = [ 'imageService' ];

function controller(images) {
  console.log('now in images.js');
  images.getImages().then(images => {
    console.log('images, getting images');
    this.images = images;
  });

  // this.get = album => {
  //   console.log('images, getting album');
  //   images.get(album)
  //     .then(images => {
  //       this.images = images;
  //     });
  // };
  
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