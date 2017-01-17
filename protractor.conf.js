exports.config = {

  allScriptsTimeout: 11000,

  // list all file globs...
  specs: [
    'test-e2e/**/*.js'
  ],

  // // ...or define test suites:
  // suites: {
  //   images: 'test-e2e/images.test.js',
  //   full: 'test-e2e/**/*.js'
  // },
  
  capabilities: {
    browserName: 'chrome'
  },

  // // Optional
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  baseUrl: 'http://localhost:8080',

  framework: 'jasmine'
};