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
      description: 'Aren\'t I the little dickens!' 
    },
    { 
      title: 'Wudgy-wudgy', 
      url: 'http://cdn.wallpapersafari.com/48/78/wf3rOl.jpg', 
      description: 'Wiffle-wiffle!' 
    },
    { 
      title: 'Ooooooh!', 
      url: 'https://media.yayomg.com/wp-content/uploads/2014/04/yayomg-tiny-bunny.png', 
      description: 'Meep!' 
    },
    { 
      title: 'Adorable Onslaught', 
      url: 'http://static.quizur.com/i/b/56ef08924fe165.39337854hqdefault.jpg', 
      description: 'Wuv me!' 
    },
    { 
      title: 'Woo-woo-woo!', 
      url: 'https://pbs.twimg.com/profile_images/473206451901448195/nVx4QaHn.jpeg', 
      description: 'Up!' 
    }
    
  ];

  this.toggleText = () => {
    console.log('toggleText');
    this.showText = true;
    this.showThumbs = false;
    this.showBig = false;
  };

  this.toggleThumbs = () => {
    console.log('toggleThumbs');
    this.showText = false;
    this.showThumbs = true;
    this.showBig = false;
  };

  this.toggleBig = () => {
    console.log('toggleBig');
    this.showText = false;
    this.showThumbs = false;
    this.showBig = true;
  };

}