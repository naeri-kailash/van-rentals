'use strict';

var view2 = angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}]);

view2.controller('View2Ctrl', ['$scope', function($scope) {
  $scope.fname = 'hi'
  $scope.lname = 'you'

  $scope.updateName = function () {
    $scope.fullname = ($scope.fname + $scope.lname)
  }
}]);
