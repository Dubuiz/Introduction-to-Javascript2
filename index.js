const num1 = parseFloat(prompt('Enter First Number:'));
const operator = prompt('Enter operator(+,-,/,*');
const num2 = parseFloat(prompt('Enter Second Number:'));

let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert('Wrong Input!')
}else{
    if(operator== '+'){
        result = num1 + num2;
    }else if(operator == '-'){
        result = num1 - num2;
    }else if(operator == '/'){
        result = num1 / num2;
    }else if(operator == '*'){
        result = num1 * num2;
    }
    alert(num1+operator+num2+'=' + result);
}
