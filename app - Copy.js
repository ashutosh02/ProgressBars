//angular.module('angTask', ['ui.bootstrap']);
var app = angular.module('angTask', ['ui.bootstrap']);

var ProgressCtrl = function($scope, $interval) {
  $scope.dynamic = 15;
  $scope.max = 300;

  $scope.subtracttwentyfive = function() {
    var value = Math.floor((Math.random() * 75) + 1);
    $scope.max = 15 + value;
  };

  $scope.subtracttwentyfive();
/*
  $interval(
    function() {
      $scope.subtracttwentyfive();
    }, 1000);*/
};



var ProgressCtrl2 = function($scope, $interval) {
  $scope.dynamic = 45;
  $scope.max = 130;

  $scope.subtracttwentyfive = function() {
    var value = Math.floor((Math.random() * 75) + 1);
    $scope.max = 45 + value;
  };

  $scope.subtracttwentyfive();

  $interval(
    function() {
      $scope.subtracttwentyfive();
    }, 1000);
};



var ProgressCtrl3 = function($scope, $interval) {
  $scope.dynamic = 75;
  $scope.max = 330;

  $scope.subtracttwentyfive = function() {
    var value = Math.floor((Math.random() * 25) + 1);
    $scope.max = 75 + value;
  };

  $scope.subtracttwentyfive();

  $interval(
    function() {
      $scope.subtracttwentyfive();
    }, 1000);
};
//app.controller('listCtrl', function($scope) {

var listCtrl=  function($scope) {
       $scope.progress = {};
        $scope.progress.barId = "1";

        $scope.progress.progresslist = [{
          id: "1",
          name: "#progress1"
        }, {
          id: "2",
          name: "#progress2"
        }, {
          id: "3",
          name: "#progress3"
        }];
      };