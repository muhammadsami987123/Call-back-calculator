function addition(number1, number2) {
    return number1 + number2;
}
function subtraction(number1, number2) {
    return number1 - number2;
}
function multiplication(number1, number2) {
    return number1 * number2;
}
function division(number1, number2) {
    return number1 / number2;
}
function calculator(operation) {
    console.log(operation(5, 2));
}
calculator(addition);
calculator(subtraction);
calculator(multiplication);
calculator(division);
