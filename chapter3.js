// var message= "hi"; 
// strict mode 
// "use strict";
// message=30;
// console.log(message); 
function test(){
    // var is function scoped 
    // var message= "hello from function";
    // global variable without var 
  message="hi from function";
    console.log(message)
}
test(); 

console.log(message);


// redeclaration 
var age=70;
var age=90;
var age=89;
console.log(age);  

// hoisting 
function foo(){
    console.log(message);
    var message= "hi from foo";
}
foo();

// var is function scoped not block scoped

if(true){
    var name = "matt";
}
console.log(name);


// * let 
// let was introduced  and let is block scoped and function scoped too 
// if(true){
//     let name2 = "matt";
// }
// console.log(name2); 

// there are no multiple declaraions with let 

// let year =90;
// let year =20;
// let year =8;
// console.log(year)


// but shadowing is allowed 
let mess = "hi from outside";
function hello(){
    let mess= "hi heelo"
    console.log(mess);
}
 
hello(); 

var gloc= 90; 
console.log(typeof gloc) 

let var1 =10;
if(typeof var1!=="undefined"){
let var1=20; 
console.log(var1);  
}

// loop declarations 
for (var i = 0; i < 5; i++) { 
    // console.log(i);
  setTimeout(() => console.log(i), 0);
} 

for (let i = 0; i < 5; i++) {
    // console.log(i);
  setTimeout(() => console.log(i), 0);    
} 

// * const 
const IMPORTANT_VAR = 100;
// IMPORTANT_VAR=10; // <- ERROR :assinment to a constant   
if(true){
    const IMPORTANT_VAR = "VIBHUTI";
    console.log(IMPORTANT_VAR);
}
console.log(IMPORTANT_VAR); 


// const in a normal for loop is not good because the value of the i would change with each iteration but
// but but it can be used with for of and for in loops 

for (const i of [1,2,3]) {
   console.log(i); 
}
// this is allowed because internally js is doing 
/* {const i = 1 ; 
    console.log(i);
    }
    {const i = 2 ; 
    console.log(i);
    }
    {const i = 3 ; 
    console.log(i);
    }
*/ 
// every const  i is in a different block  

// * typeof operator and undefined type  

console.log(typeof(IMPORTANT_VAR));

// if a variable doesn't exist we get undefined when using type of 
console.log(typeof nonexistingvariable); 

// if a variable is declared and not intiialised we still get undefined  
let x;
console.log(typeof x ); 

// * undefined is falsy

let y; 
// this block will not run 
if(y){
    console.log("if block ran ")
} 
// this should run 
if(!y){
    console.log("y is undefined ")
}
// if(nonexistingvariable){
//     console.log("this will cause error because there is no variable with this name")
// } 

// * the null and undefined mixup 
let car=null;
// here we are intentianlly making something null 
// usually a singall that the variable will hold a object which is not available right now 

// when you do typeof on null you get "object" 
console.log(typeof car);

// if you do == between undefined and null you get true 
let bus;
console.log(bus==car);

// but a strct check of === returns false because they aew different types and have different intents 
console.log(car===bus);

// the null type is falsy and it also catches 0, "", false, NaN etc 
if(car){
    console.log("this if block will not run")
}
if(!car){
    console.log("this blcok will  run ");
}
if(bus){
    console.log("this bus is not gonna run")
}
if(!bus){
    console.log("This bus is running ")
}

