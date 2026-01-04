// understanding how the execution context works 

// in global execution context 
var n =7;

// new execution context 
function square(n){
    return n*n;
}
var square2= square(2);
console.log(square2);
