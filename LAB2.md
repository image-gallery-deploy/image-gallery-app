![cf](http://i.imgur.com/7v5ASc8.png) Image Gallery "Cute Bunny" Services
===

* Restructure project as needed to support this lab
  * (suggestion: start with git mv to put into app folder)
  
* Create API services for getting images.

* Write angular services that encapsulate API calls and use those in your components.

* Write a images component that uses the service expose data and actions
  * Displays images
  * Add new image
  * Remove image
  
* Add Toggle View Functionality
  * Either change within wrapper component
  * Or use a separate list for each view (but don't repeat image service logic, use different
  list components)

* Make your API url configured via an angular value


Test your service components:

* Unit test your components and services.

* Use angular.mocks to isolate the particular component or service being tested.

* Use $httpBackend to test $http in your data service components.

* Mock the service to test the component
