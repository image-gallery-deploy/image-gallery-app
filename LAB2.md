![cf](http://i.imgur.com/7v5ASc8.png) Image Gallery "Cute Bunny" Services
===

* Don't work on same branch if first lab hasn't been merged!

* Restructure project as needed to support this lab
  * (suggestion: start with git mv to put into app folder)
  * don't forget:
   * rm -rf node_modules at project root
   * npm i in app folder
   * (or just copy node_modules folder into app :)
  
* Create API services for getting images.

* Write angular services that encapsulate API calls and use those in your components.

* Write a images component that uses the service expose data and actions
  * Displays images

* Add Toggle View Functionality
  * Either change within wrapper component
  * Or use a separate list for each view (but don't repeat image service logic, use different
  list components)

* Make your API url configured via an angular value

Bonus

* Include:
   * Add new image
   * Remove image

Test your service components:

* Unit test your components and services.

* Use angular.mocks to isolate the particular component or service being tested.

* Use $httpBackend to test $http in your data service components.

* Mock the service to test the component
