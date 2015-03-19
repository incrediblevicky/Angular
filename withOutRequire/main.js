var calculator;

$(function() {
    calculator = new Calculator();

    var calculatorView = new CalculatorView(calculator);
    calculatorView.init();
    calculatorView.render();
    calculatorView.$root.appendTo(document.body);
});