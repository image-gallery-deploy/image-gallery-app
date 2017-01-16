import template from './albumize.html';
import styles from './albumize.scss';

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
    this.title = '';
    this.description = '';
  };

  this.reset();

  this.addAlbum = () => {
    this.add({
      title: this.title,
      description: this.description
    });

    this.reset();

  };
}
