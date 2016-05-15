angular.module('initialisim', [])
    .filter('initialisim', function($sce) {
        return input => {
            if (input == null)
                return "";

            var words = input.split(" ");
            var inits = [];

            // If only one word, take the first two letters
            if (words.length === 1) {
                inits.push(words[0].substr(0, 1), words[0].substr(1, 1));
            } else {
                inits.push(words[0].substr(0, 1), words[1].substr(0, 1));
            }

            // TODO: Remove dependance on ngSanatize and remove HTML from this filter
            // Maybe convert this to a directive?
            return $sce.trustAsHtml('<span>' + inits.join('</span><span>') + '</span>');
        }
    });
