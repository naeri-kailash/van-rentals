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
}]);


//
// view2.controller('Post', ['$scope', '$route', 'Post',
//   function($scope, $route, Post) {
//     $scope.post = new Post();
//     $scope.posts = Post.query();
//     $scope.save = function() {
//       $scope.post.$save();
//       $scope.posts.push($scope.post);
//       $scope.post = new Post();
//     }
//     $scope.delete = function(post) {
//       Post.delete(Post);
//       _.remove($scope.posts, post);
//     }
//   };
// ]);
//
// var saveRental = $resource('/save', [], [], );
