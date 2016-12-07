import template from './bunny-app.html';

export default {
  template,
  controller,
  controllerAs: 'app'
};

function controller() {
  this.bunnies = [
    { 
      title: 'Snuggly-wuggly', 
      url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg', 
      description: 'Aren\'t I just the little dickens!' 
    }
  ];

  this.toggleText = () => {
    console.log('toggleText');
    this.showText = true;
    this.showThumbs = false;
    this.showFull = false;
  };

  this.toggleThumbs = () => {
    console.log('toggleThumbs');
    this.showText = false;
    this.showThumbs = true;
    this.showFull = false;
  };

  this.toggleFull = () => {
    console.log('toggleFull');
    this.showText = false;
    this.showThumbs = false;
    this.showFull = true;
  };

}