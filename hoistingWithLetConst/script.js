
console.log(x);
// console.log(y);
// console.log(z);
if (true){
    var x = 47
    let y = 69
    const z = 36
}
console.log(x);
console.log(y);
console.log(z);

// In this example as we can see if we try to log before declration of x it gives the value undefied which means it was hoisted and if we logs it after declration it works and perfectly fine because x(var) is not an block scope variable. But in case of let and const are blocked scope variable which means if these variable are declared inside a block we can't access it from outside of the block scope. That's why its giving us the reference error as we are trying to access these varable from outside of the block scope.