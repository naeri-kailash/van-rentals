'use strict';

var view2 = angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'SaveRental',
    directive: 'FormComplete'
  });
}]);

view2.controller('SaveRental', ['$scope', '$http', function($scope, $http) {
  $scope.user = {};
  $scope.dateTaken = false;
  $scope.bookedHrs = '';
  $http.get('/rentals').success(function(data) {
    $scope.rentals = data;
  });

  $scope.checkAvailability = function(date) {
    let rentals = $scope.rentals
    $scope.dateTaken = false;
    $scope.booked = rentals.filter(function (rental) {
      console.log('filter', rental.rental_date)
        if (date.toISOString() === rental.rental_date) {
          console.log('rental', rental.rental_date)
          console.log('date', date)
          console.log(true)
          return rental;
        }
        console.log('rental', rental.rental_date)
        console.log('date', date)
        console.log(false)
        return false;
      });
      console.log('booked', $scope.booked)
    }

  // $scope.checkTimes = function(map) {
  //   let response = ''
  //   if (map.length > 0) {
  //     response = 'The van has bookings on this day. '
  //     for (var i; i < map.length; i++) {
  //       return (response += 'The van is unavailable between ' + map[i].start_rental + ' and ' + map.end_rental + '. \n')
  //     }
  //   } else response = 'The van is available all day.'
  // }

  $scope.saveRental = function(user) {
      $http.post('/rentals/save', user)
  };

  var user = $scope.user
  user.start_rental = '00:00'
  user.end_rental = '00:00'

}]);

  // $scope.checkSubmit = function(user) {
  //   if ()
  // }

// view2.directive('FormComplete', function($scope, $htttp) {
//
// }
