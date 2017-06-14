'use strict';

var view3 = angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'ViewRentals'
  });
}]);

view3.controller('ViewRentals', ['$scope', '$http', function ($scope, $http) {
  $http.get('/rentals').success(function (data) {
    $scope.rentals = data;
  });

  
}]);
