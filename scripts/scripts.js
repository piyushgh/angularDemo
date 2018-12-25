// var myApp = angular.module("myModule", []);
// //
// // var myController = function($scope) {
// //   $scope.message = "Angular JS tutorial";
// // }
// //
// // myApp.controller("myController", myController);


// myApp.controller("myController", function($scope) {
//   $scope.message = "Angular JS tutorial";
// })

var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope) {
                  $scope.message = "Angular JS tutorial";
                  $scope.demo1 = "this is the content for demos11";
                });
