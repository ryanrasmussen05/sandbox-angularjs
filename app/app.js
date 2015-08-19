'use strict';

var angular = require('angular');
require('angular-route');
require('semantic-ui');

var app = angular.module('ryanWeb', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html'
  }).when('/canvas/:page', {
    templateUrl: 'views/canvas.html'
  }).when('/resume', {
    templateUrl: 'views/resume.html'
  }).when('/airplaneQuiz', {
    templateUrl: 'views/lockheedQuiz.html'
  }).otherwise({
    redirectTo: '/home'
})
}]);

require('./components/airplaneQuiz/airplane.quiz');
require('./components/canvas/canvasRouter/canvas.router');
require('./components/canvas/fireworks/fireworks');
require('./components/canvas/particles/particles');
require('./components/menuBar/menu.bar');
require('./components/physics/physics');
require('./components/resume/resume');

