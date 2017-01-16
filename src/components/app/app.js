import template from './app.html';
import styles from './app.scss';

export default { 
  template,
  controller 
};

function controller() {
  this.styles = styles;
}
