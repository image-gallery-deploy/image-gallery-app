import template from './bunny-thumbs.html';
import styles from './bunny-thumbs.css';

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
