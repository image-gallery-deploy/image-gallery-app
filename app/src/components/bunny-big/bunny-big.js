import template from './bunny-big.html';
import styles from './bunny-big.css';

export default {
  template,
  bindings: {
    bunny: '='
  },
  controller
};

function controller() {
  this.styles = styles;
}
