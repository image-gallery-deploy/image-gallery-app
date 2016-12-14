const webpackConfig = require('./webpack.config');
webpackConfig.entry = {};

module.exports = function(config) {
  const options = {

    // base path to use in resolving, e.g., file or exclusion patterns
    basePath: '',
    
    // frameworks to use
    // see https://npmjs.org/browse/keyword/karma-adapter for available framewks
    frameworks: ['mocha', 'chai'],

    // list of files and patterns to load
    files: [
      './src/main.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './test/**/*.js'
    ],
    
    // //files to exclude
    // exclude: [ 'node_modules' ],

    webpack: webpackConfig,

    // preprocess matching files before serving them to browser 
    // see https://npmjs.org/browse/keyword/karma-preprocessor for available preprocessors
    preprocessors: {
      './src/main.js': [ 'webpack' ],
      './test/**/*.js/': [ 'babel' ]
    },

    // browsers to start
    // see https://npmjs.org/browse/keyword/karma-launcher
    browsers: [ 'Chrome', 'Safari' ],

    // test result reporter to use
    // possible reporters: 'dots', 'progress'
    // see https://npmjs.org/browse/keyword/karma-reporter for available reporters
    reporters: [ 'spec' ],

    // server port
    port: 9876,

    // enable or disable colors in log and reporter output
    colors: true,

    // level of logging
    // possible vals: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || confi.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable or disable watching file and executing tests whenever any file change occurs
    autoWatch: true,

    // Continuous Integration mode
    // on or off; if true, Karma captures browsers, runs tests and exits
    singleRun: false,

    // concurrency level
    // max no. of browsers that should be started at one time
    concurrency: Infinity
    
  };

  if(process.env.TRAVIS) {
    options.customLaunchers = {
      Chrome_travis_ci: {
        base: 'Chrome', 
        flags: [ '--no-sandbox' ]
      }
    };

    options.browsers = [ 'Chrome_travis_ci' ];
    options.singleRun = true;

  }

  config.set( options );

};