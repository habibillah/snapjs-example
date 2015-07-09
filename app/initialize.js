var application = require('application');

application.initialize(function() {

    var snapper = new Snap({
        element: document.getElementById('content')
    });

    var addEvent = function addEvent(element, eventName, func) {
        if (element.addEventListener) {
            return element.addEventListener(eventName, func, false);
        } else if (element.attachEvent) {
            return element.attachEvent("on" + eventName, func);
        }
    };

    addEvent(document.getElementById('open-left'), 'click', function(){
        snapper.open('left');
    });
});