'use strict';

var view2directive = angular.module('myApp.view2directive', [])


view2directive.directive('checkStartTime', function () {
    return {
      restrict: 'A',
      scope: {
          startTime: '='
      },
      controller: function ($scope) {
        console.log('controller', $scope.startTime);
      }
    };
});
