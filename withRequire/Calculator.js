define([], function() {
    function Calculator() {
        var _data = {
            x : 0,
            y : 0,
            sum : 0
        };

        this.get = function(attr) {
            return _data[attr];
        };

        this.set = function(attr, value) {
            _data[attr] = value;
            trigger(attr);
        };

        var _subscribers = {};

        this.addSubscriber = function(attr, subscriptionFn) {
            _subscribers[attr] = _subscribers[attr] || [];
            _subscribers[attr].push(subscriptionFn);
        };

        function trigger(attr) {
            var _subscriberFunc = _subscribers[attr] || [];
            for(var i = 0; i < _subscriberFunc.length; i++) {
                var func = _subscriberFunc[i];
                func();
            }
        }
    }

    Calculator.prototype.calculate = function() {
        var sum = this.get('x') + this.get('y');
        this.set('sum', sum);
    };

    return Calculator;
});