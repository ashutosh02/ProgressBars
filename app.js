var app = angular.module('ang-UiTask', ['ui.bootstrap']);

app.factory('buttonsValue', function($http){
    return {
        getEndPoint : function(){
            return $http.get('http://pb-api.herokuapp.com/bars', {});
        }
    };   
    
});


var barCtrl = function($scope, $interval, buttonsValue) {

  buttonsValue.getEndPoint().then(function(result){
        $scope.epoint = result.data;
    });
  

  $scope.progress = {};
  $scope.progress.probarId = "0";

  $scope.changeValue = function (barvalue) {
    var changevalue = $scope.epoint.bars[$scope.progress.probarId] + barvalue;

    if (changevalue >= 0) {
        if(changevalue > $scope.epoint.limit){
            $scope.epoint.bars[$scope.progress.probarId] = $scope.epoint.limit;
        }
        else{
             $scope.epoint.bars[$scope.progress.probarId] = changevalue;
        }
     
    }
    else {
      $scope.epoint.bars[$scope.progress.probarId] = 0;
    }

  }
};
