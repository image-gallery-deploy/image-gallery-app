import angular from 'angular';
import './scss/main.scss';

// get components via index.js in components folder
import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';
import routes from './routes';
import resource from 'angular-resource';

const app = angular.module('myApp', [
  components,
  services,
  uiRouter,
  resource
]);

app.value('apiUrl', process.env.API_URL);

app.config(routes);
