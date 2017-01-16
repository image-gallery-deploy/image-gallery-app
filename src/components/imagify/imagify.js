import template from './imagify.html';
import styles from './imagify.scss';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller
  
};

function controller() {
  this.styles = styles;

  this.reset = () => {
    this.album = '';
    this.title = '';
    this.url = '';
    this.description = '';
    
  };

  this.reset();

  this.addImage = () => {
    this.add({
      album: this.album,
      title: this.title,
      url: this.url,
      description: this.description
      
    });

    this.reset();

  };
}
