// still part of numeric type
//* NaN 
console.log(0/0);
console.log(Math.sqrt(-1));
console.log(Number("abc"));

//NaN posions rest of the computation
let a=NaN;
let b=9+a;
let c= b+2;
console.log(`${a} ${b} ${c}` ); 

// NaN is not equal to itself
console.log(`${a==b} ${a===c}` ); 

console.log(" -------------isNaN() ------------------")

// isNaN is a method you use to check for it 
// - first tries to convert the value into number 
// - if doesnt happen then returns true
// - useful but no strict  
console.log(isNaN(0)); //-> 0
console.log(isNaN("")); // empty string returns false 
console.log(isNaN("blue")); //true
console.log(isNaN(true)); // -> 1 ->false
console.log(isNaN(null)); // -> null ->0  ->false
console.log(isNaN(undefined)); // -> undefined is NaN -> true

// typeof NaN is -> number 
console.log(typeof a); 

console.log(" ------------- Number.isNaN() ------------------")
// since isNaN is not so strict and strict 
// Number.isNaN() 
// - ONLY RETURNS TRUE FOR TRUE  NaN
console.log(Number.isNaN(0)); //-> 0 ->false
console.log(Number.isNaN(NaN)); // true 
console.log(Number.isNaN("")); // empty string returns false 
console.log(Number.isNaN("blue")); // false 
console.log(Number.isNaN(true)); // -> 1 ->false
console.log(Number.isNaN(null)); // -> null ->0  ->false
console.log(Number.isNaN(undefined)); // false 

//! test with object 

