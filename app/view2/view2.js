'use strict';

var view2 = angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'SaveRental'
  });
}]);

view2.controller('SaveRental', ['$scope', '$http', function($scope, $http) {
  $scope.user = {}

  $scope.saveRental = function(user) {
      $http.post('/rentals/save', user)
  };
  // $scope.getRentals = function() {
  //   $http.get('/rentals', config).then(successCallback, errorCallback)
  // };

  var user = $scope.user
  user.start_rental = '00:00'
  user.end_rental = '00:00'


}]);
