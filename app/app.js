'use strict';

// Declare app level module which depends on views, and components
var app = angular.module(('myApp'), [
  'ngRoute',
  'ngResource',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', '$resourceProvider', function($locationProvider, $routeProvider, $resourceProvider) {
  $locationProvider.hashPrefix('!');
  $resourceProvider.defaults.stripTrailingSlashes = false;
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
