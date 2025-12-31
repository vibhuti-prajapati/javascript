//* Numeric type 
// octal literals are not allowed in strict mode 
// let dep = 070;
// //even decimal with leading zero are not allowed proably not sure 
// dep=079;
// console.log(dep); 

// hexadecimals are allowed  
// - must start with 0x or 0X 
// - followed by 0-9 , A-F, a-f
let hex= 0xA;
// base does not matter because later everything is just decimal 
console.log(hex);

// JS HAS +0 and -0 
let plus= +0;
let minus =-0;
// and both the postive and negative zero are equivalent 
console.log(plus==minus);
console.log(plus===minus);

// flaoting point value in numeric type 
// - must have a decimal point 
// - atleast have one nuber after decimal point 

// all of these are valid floating point numbers 
let floatVar= 1.1;
floatVar=0.1;
floatVar=.1; // valid but recommended 

let float1= 10.0;
// when you try to store a float point with only zeros after decimal point (whole number)-> treated as a integer value
console.log(float1);
// and even bits of 10 and 10.0 are exactly matching so == and === return true for both 
console.log(10.0==10);
console.log(10.0===10);

//precision limit in JS
// returns false because of smol caclulation error and precison errors
console.log(0.1+0.2 == 0.3);

// use of Number.Epilson -> for better precised comparison
const EPSILON = Number.EPSILON;

// going beyong numeric JS range -> you get infinity 
let ridiculous= Number.MAX_VALUE+Number.MAX_VALUE; 
console.log(ridiculous);
// typeof infinity -> Number 
console.log(typeof Infinity); 

// isfinite() -> method to check for infinity
// - false -> value is false ,-infinity, NaN,  infinite number
console.log(isFinite(ridiculous));
console.log(isFinite(NaN));
console.log(isFinite(-Infinity));

// - true-> value is true , finite number
console.log(isFinite(10));

// Number.MIN_VALUE!= -Number.MAX_VALUE
console.log(Number.MIN_VALUE== -Number.MAX_VALUE);




