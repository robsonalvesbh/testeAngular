var myApp = angular.module('myApp', [], function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

myApp.controller("MyCtrl", function($scope) {
  $scope.lista = [
  					{nome: "Robson", idade: 23},
  					{nome: "Katy", idade: 25}
  				 ];
});