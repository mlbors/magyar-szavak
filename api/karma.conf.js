// Karma configuration
// Generated on Sun Mar 24 2019 11:29:30 GMT+0100 (GMT+01:00)

const nodeExternals = require('webpack-node-externals')

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],

    //plugins
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-coverage'),
      require('karma-requirejs'),
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      require('babel-loader')
    ],


    // list of files / patterns to load in the browser
    files: [
      { pattern: './spec/**/*spec.js', watched: true, included: false }
    ],


    // list of files / patterns to exclude
    exclude: [
      'app.js'
    ],


    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './factories/**/*.js': ['webpack','coverage'],
      './services/**/*.js': ['webpack','coverage'],
      './src/**/*.js': ['webpack','coverage'],
      './spec/**/*spec.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      mode: 'development',
      target: 'node',
      devtool: 'source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    },

    webpackMiddleware: {
			noInfo: true
		},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'kjhtml', 'coverage'],
    coverageReporter: {
      dir : 'coverage/',
        reporters: [
          { type: 'html' },
          { type: 'lcov' }
        ]
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
