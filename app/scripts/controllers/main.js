'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myApp
 */
angular.module('myApp')
    .controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('/scripts/games.json').then(resp => {
            $scope.games = resp.data;

            setTimeout(function() {
                console.log($scope.pkry);
            }, 100);
        });
    }]);
