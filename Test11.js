// prototypes
let a = [1,2,3,4];
function b(){
    console.log("function");
}
let c ={
    "name" : "vibhuti"
}; 

let arr = [];
console.log(arr); 

// creating and adding your own prototype in the chain 
let x = {
    greet(){
        console.log("hello from a");
    }
}; 

Object.setPrototypeOf(c,x);
//reusable too!
Object.setPrototypeOf(a,x); 
Object.setPrototypeOf(b,x);
c.greet();
a.greet();
b.greet();

// shadowing 
let p = {
    value :10 
};
let q =  Object.create(p); 
// Before assignment → lookup went to parent 
console.log(q.value); 

q.value =20; 
// After assignment → js created value on child
console.log(q.value); 
console.log(p.value); 

//constructor function 
function person(name){
    this.name= name;
} 
// person.prototype.sayHi = () => console.log("hi , " +this.name);
person.prototype.sayHi = function () {
  console.log("Hi, I am " + this.name);
};

let p1 =new  person ("ramesh");
p1.sayHi(); 

// prototype → property of constructor functions
console.log(person.prototype)
console.log(p1.prototype); // undefined 
// __proto__ → internal link of objects
console.log(p1.__proto__);
 
obj.someMethod()
//check obj
// check obj.__proto__
// check obj.__proto__.__proto__