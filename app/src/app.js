import angular from 'angular';
import './css/main.css';

// get components via index.js in components folder
import components from './components';
import services from './services';

const app = angular.module('myApp', [
  components,
  services
]);

const dev = 'http://localhost:3000/api';

app.value('apiUrl', dev);
