alert('Калькулятор');

const whatDo = (prompt('add (+), sub (-), mult (*), div(/)'));

const firstNumber = +(prompt('Вкажіть першу цифру'));

const secondNumber = +(prompt('Вкажіть другу цифру'));
if(whatDo == '-' || whatDo == 'sub' ){
    sum = firstNumber - secondNumber;
    alert('А ось і ваш результат : '+firstNumber +'-' + secondNumber + '=' + sum);
}else if(whatDo == '+' || whatDo == 'add'){
    sum = firstNumber + secondNumber;
    alert('А ось і ваш результат : '+firstNumber +'+' + secondNumber + '=' + sum);
}else if(whatDo == '*' || whatDo == 'mult'){
    sum = firstNumber * secondNumber;
    alert('А ось і ваш результат : '+firstNumber +'*' + secondNumber + '=' + sum);
}else if(whatDo == '/' || whatDo == 'div'){
    sum = firstNumber / secondNumber;
    alert('А ось і ваш результат : '+firstNumber +'/' + secondNumber + '=' + sum);
}
