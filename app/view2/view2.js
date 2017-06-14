'use strict';

var view2 = angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'SaveRental',
    directive: 'checkStartTime'
  });
}]);

view2.controller('SaveRental', ['$scope', '$http', function ($scope, $http) {
  $scope.user = {};
  $scope.dateTaken = false;
  $scope.bookedHrs = '';


  //---GET all rentals from database
  $http.get('/rentals').success(function (data) {
    $scope.rentals = data;
  });


  //---Save new rental to database
  $scope.saveRental = function (user) {
      $http.post('/rentals/save', user);
  };


  //---Check availability of day selected by user
  $scope.checkAvailability = function (date) {
    let rentals = $scope.rentals;
    $scope.dateTaken = false;
    $scope.booked = rentals.filter(function (rental) {
      console.log('filter', rental.rental_date);
      date = date.toISOString();
      if (date === rental.rental_date) {
        console.log('rental', rental.rental_date);
        console.log('date', date);
        console.log(true);
        return rental;
      }
      console.log('rental', rental.rental_date);
      console.log('date', date);
      console.log(false);
      return false;
    });
      console.log('booked', $scope.booked);
      checkTimes($scope.booked)
  };


  // ---Check what times are booked on given day
  let checkTimes = function (booked) {
    $scope.response = '';
    $scope.bookedTimes = '';
    if (booked.length > 0) {
      $scope.dateTaken = true;
      for (var i = 0; i < booked.length; i++) {
        $scope.bookedTimes = $scope.bookedTimes + 'The van is unavailable between ' + booked[i].start_rental + ' and ' + booked[i].end_rental + '. ';
      };
    } else {
      $scope.response = 'The van is available all day.';
      $scope.dateTaken = false;
    };
  };


  $scope.checkSubmit = function (time) {
    $scope.timeErr = false;
    $scope.cannotSubmit = true;
    let booked = $scope.booked
    for (var i = 0; i < booked.length; i++) {
      let bookedStart = booked[i].start_rental.slice(0, 2);
      let bookedEnd = booked[i].end_rental.slice(0, 2);
      let userStart = $scope.user.start_rental;
      let userEnd = $scope.user.end_rental;
      console.log('bookedStart', bookedStart, 'bookedEnd', bookedEnd, 'userStart', userStart, 'userEnd', userEnd)
      if (userStart <= bookedStart && userEnd <= bookedStart) {
        return $scope.timeErr = false;
      } else if (userStart >= bookedEnd && userEnd >= bookedEnd) {
        return $scope.timeErr = false;
      } else return $scope.timeErr = true;
    };
  }
}]);
