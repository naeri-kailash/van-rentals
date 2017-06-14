'use strict';

var view2 = angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'SaveRental'
  });
}]);

view2.controller('SaveRental', ['$scope', '$http', function ($scope, $http) {
  $scope.user = {};
  $scope.dateTaken = false;
  $scope.bookedHrs = '';
  $scope.cannotSubmit = true;
  document.getElementById("no-submit").setAttribute('disabled','disabled')
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
      if (date.toISOString() === rental.rental_date) {
        return rental;
      }
      return false;
    });
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


  $scope.checkSubmit = function (startRental, endRental) {
    $scope.timeErr = false;
    $scope.cannotSubmit = true;
    let booked = $scope.booked
    if (booked.length > 0) {
      for (var i = 0; i < booked.length; i++) {
        console.log('type', typeof startRental)
        console.log('type2', typeof endRental)
        let bookedStart = booked[i].start_rental.slice(0, 2);
        let bookedEnd = booked[i].end_rental.slice(0, 2);
        let userStart = startRental.slice(0, 2);
        let userEnd = endRental.slice(0, 2);
        if (userStart <= bookedStart && userEnd <= bookedStart) {
          $scope.timeErr = false;
          $scope.cannotSubmit = false;
          $scope.canSubmit = true;
        } else if (userStart >= bookedEnd && userEnd >= bookedEnd) {
          $scope.timeErr = false;
          $scope.cannotSubmit = false;
          $scope.canSubmit = true;
        } else {
          $scope.timeErr = true;
        };
      }
    } else {
      $scope.timeErr = false;
      $scope.cannotSubmit = false;
      $scope.canSubmit = true;
    } 
  }
}]);
