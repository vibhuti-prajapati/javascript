// the identifier conflict with let and var 
function x(){
    console.log("i am function x");
} 
// this line breaks the code  
// why ? -> let does not allow redeclaration 
// let x=10;
console.log(x); // prints function x
var x=20; 
console.log(x); // prints over written value : 20 
// again error 
x();