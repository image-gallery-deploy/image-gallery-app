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
    name: 'bunnies',
    url: '/bunnies',
    component: 'bunnyApp'

  });

  $urlRouterProvider.otherwise('/');
}