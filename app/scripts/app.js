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

angular.module('myApp')
    .directive('workspace', ['$rootScope', function($rootScope) {
        return {
            constrain: 'A',
            link: function(scope, element, attrs) {
                element.ready(function() {
                    // TODO: replace set timeout to fire after ng-repeat finished
                    // reference: http://stackoverflow.com/questions/15207788/calling-a-function-when-ng-repeat-has-finished
                    setTimeout(function() {
                        scope.pkry = new Packery(element[0], {
                            itemSelector: '.grid__item',
                            // gutter: 3,
                        });

                        // scope.pkry.on('layoutComplete', (x, y) => {
                        //     console.log(x, y);
                        // });

                        // angular.forEach(pkry.getItemElements(), function(item) {
                        //   var draggable = new Draggabilly(item);
                        //   pkry.bindDraggabillyEvents(draggable);
                        // });
                        scope.pkry.layout();
                    }, 100);
                });
            }
        };
    }])
