import template from './images.html';

export default {
  template,
  controller,
  controllerAs: 'app'
};

controller.$inject = [ 'imageService' ];

function controller(images) {

  images.getImages().then(images => {
    this.images = images;
  });

  // this.get = album => {
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