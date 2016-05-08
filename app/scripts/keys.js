/* Visual Grid */

var selectedElement;
var elementMargin = 5;

// TODO: Change this to a directive
setTimeout(function() {
    selectedElement = $('.grid .grid__item')[0];
    $(selectedElement).toggleClass('grid__item--highlight');
}, 200);

function updateGrid(direction) {
    var x, y;
    var bounds = selectedElement.getBoundingClientRect();

    var direct = {
        up: function() {
            x = bounds.left;
            y = bounds.top - (elementMargin * 2) - 1;
        },
        down: function() {
            x = bounds.left;
            y = bounds.bottom + (elementMargin * 2) + 1;
        },
        left: function() {
            x = bounds.left - (elementMargin * 2) - 1;
            y = bounds.top;
        },
        right: function() {
            x = bounds.right + (elementMargin * 2) + 1;
            y = bounds.top;
        }
    }

    direct[direction]();

    if ($(document.elementFromPoint(x, y)).hasClass('grid__item')) {
        $(selectedElement).toggleClass('grid__item--highlight');
        selectedElement = document.elementFromPoint(x, y);
        $(selectedElement).toggleClass('grid__item--highlight');
    }
}

/* Delayed input */

var wait = false;
var delay = 250;

function press(direction) {
    if (wait === false) {
        updateGrid(direction);
        wait = true;

        setTimeout(x => {
            wait = false;
        }, delay);
    }
}

function keyPress(e) {
    e = e || window.event;

    var keys = {
        38: x => press('up'),
        40: x => press('down'),
        37: x => press('left'),
        39: x => press('right'),
    };

    keys[e.keyCode]();

    return false;
}

$(document).ready(function() {
    document.onkeydown = keyPress;
});
