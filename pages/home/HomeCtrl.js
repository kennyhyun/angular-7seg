/**
*/

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.characters=[];
    for (var i=45; i<122; i++){
        $scope.characters.push(String.fromCharCode(i));
    }
    $scope.update=function(){
        for(var i in $scope.characters){
            var num = $scope.characters[i].charCodeAt(0);
            num++;
            if(num>122) num=45;
            $scope.characters[i] = String.fromCharCode(num);
        }
        $timeout($scope.update, 1000);
    };
    $timeout($scope.update);
}]);
