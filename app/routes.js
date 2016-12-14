routes.inject = [ '$stateProvider', '$urlRouterProvider' ];

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
    name: 'bunnies',
    url: '/bunnies',
    component: 'bunny-app'

  });

  $urlRouterProvider.otherwise('/');
}