routes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'welcome',
    url: '/',
    component: 'welcome'

  });

  $stateProvider.state({
    name: 'about',
    url: '/about',
    component: 'about'

  });

  $stateProvider.state({
    name: 'about.info',
    url: '/info',
    component: 'aboutInfo'

  });

  $stateProvider.state({
    name: 'about.contact',
    url: '/contact',
    component: 'aboutContact'

  });

  $stateProvider.state({
    name: 'images',
    url: '/images',
    component: 'images'

  });

  $stateProvider.state({
    name: 'image-album',
    url: '/images/:album',
    resolve: {album: ['$stateParams', sp => sp.album]},
    component: 'images'

  });

  $stateProvider.state({
    name: 'albums',
    url: '/albums',
    component: 'albums'

  });

  $urlRouterProvider.otherwise('/');
}