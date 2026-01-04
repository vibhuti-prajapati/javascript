// hoisting 

// preints undefined 
console.log(x);
// prints not defined  reference error 
console.log(y);
var x=5;
// let variables are hoisted but they are in  temporal dead zone 
// js doesnt let you access it before a declaration 
let y=3;

// z is not defined error will pop up
console.lof(z);
