import angular from 'angular';
import './scss/main.scss';

// get components via index.js in components folder
import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';
import routes from './routes';

const app = angular.module('myApp', [
  components,
  services,
  uiRouter
]);

app.config(routes);

const dev = 'http://localhost:3000/api';

app.value('apiUrl', dev);
