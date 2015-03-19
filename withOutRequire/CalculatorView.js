function CalculatorView(calculator) {

    var $root = this.$root = $('<div></div>')

    this.init = function () {
        calculator.addSubscriber('x', function() {
            $('#idx', $root).val(calculator.get('x'));
        });
        calculator.addSubscriber('y', function() {
            $('#idy', $root).val(calculator.get('y'));
        });
        calculator.addSubscriber('sum', function() {
            $('#idSum', $root).html(calculator.get('sum'));
        });


        //UI iteraction
        $root.on('click', '#idCalculate', function() {
            calculator.calculate();
        });

        $root.on('change', '#idx', function() {
            calculator.set('x', parseInt(this.value));
        });

        $root.on('change', '#idy', function() {
            calculator.set('y', parseInt(this.value));
        });

    };

    this.render = function() {
        $root.html($("#calculatorTemplate").html());
    }
}