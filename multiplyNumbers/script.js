
// Unlike function declartion we can't call our function before declartion with function expression. 
// This is one of the main advantages of using function expression is easy debugging.


 const multiplyNumber = function(num1, num2){
    return num1 * num2
 }


 const result = multiplyNumber(7,8);
console.log(result);