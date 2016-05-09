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
