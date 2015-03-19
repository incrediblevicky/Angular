define(['Calculator', 'CalculatorView', 'jquery'], function(Calculator, CalculatorView, $) {
    $(function() {
        var calculator = new Calculator();
        var calculatorView = new CalculatorView(calculator);
        calculatorView.init();
        calculatorView.render();
        calculatorView.$root.appendTo(document.body);
    });
});

