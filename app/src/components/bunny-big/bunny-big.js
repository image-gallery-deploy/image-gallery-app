import template from './bunny-big.html';
import styles from './bunny-big.css';

export default {
  template,
  bindings: {
    bunny: '=',
    remove: '<'
  },
  controller
};

function controller() {
  this.styles = styles;

  this.delete = () => {
    this.remove(this.bunny);
  };
}
