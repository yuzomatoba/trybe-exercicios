let num1 = 5;
let num2 = 3;
let result;
let operator = '-';

switch (operator) {
   case '+':
   result = num1 + num2;
   console.log(result);
   break;

case '-':
    result = num1 - num2;
    console.log(result);
    break;

case '*':
    result = num1 * num2;
    console.log(result);

case '/':
    result = num1 / num2;
    console.log(result);

case '%':
    result = num1 % num2;
    console.log(result);

default:
    console.log("Operação não encontrada");}