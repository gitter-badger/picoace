'use strict';

/**
 * @ngdoc overview
 * @name myApp
 * @description
 * # myApp
 *
 * Main module of the application.
 */
angular
    .module('myApp', [
        // 'ngAnimate',
        // 'ngCookies',
        // 'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngFitText',
        'initialisim',
        // 'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(['fitTextConfigProvider', function(fitTextConfigProvider) {
        fitTextConfigProvider.config = {
            // delay: 5000,
            // loadDelay: 5000,                      // global default delay before initial calculation
            compressor: .5, // global default calculation multiplier
            min: 200, // global default min
            max: Number.POSITIVE_INFINITY // global default max
        };
    }]);
