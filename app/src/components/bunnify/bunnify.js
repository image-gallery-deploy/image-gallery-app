import template from './bunnify.html';
import styles from './bunnify.css';

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
    this.url = '';
    this.description = '';
  };

  this.reset();

  this.addBunny = () => {
    this.add({
      title: this.title,
      url: this.url,
      description: this.description
    });

    this.reset();

  };
}