import template from './image-thumbs.html';
import styles from './image-thumbs.scss';

export default {
  template,
  bindings: {
    image: '='
  },
  controller
};

function controller() {
  this.styles = styles;
}
