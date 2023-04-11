


function sum(num1, num2){
    var x = 45
    return num1 + num2
}

console.log(sum(6,3));
console.log(x);

// here In this program we have log the value of variable x which is declared inside the sum function and we are trying to access it outside of the function i.e. from the global exection context. Here the fact is we can't access the variable which is declared inside an function and we are try to access it from global context. 
// Although we can access variable which is declared in global context from inside of function.
// That's why it is giving the error if we try to access x from outside of function.
