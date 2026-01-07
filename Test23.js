// call apply and bind methods to understand behavioir of this keyword
const obj = {
  firstName: "vibhuti",
  lastName: "prajapati",
  printName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

obj.printName();

const obj2 = {
  firstName: "sachin",
  lastName: "Tendulkar",
}; 

// function borrowing 
// we can borrow fucntion from othe robjects and use it with data of some other object
obj.printName.call(obj2);

// usually we reuse fucntions for objects like this 
// and we can also pass in parameters with these methods 
function print(location){
    console.log(this.firstName + " " + this.lastName + " from " +location);
}
// print.call( object ,arg1, arg2, arg3); 
print.call(obj,"Surat");
// for apply you have to pass a arraylist of arguements 
// print.apply( object ,[arg1, arg2, arg3]); 
print.apply(obj2,["Mumbai"]); 

// bind method 
// => returns a function which  can be called or invoked later 
const bindTest = print.bind(obj2, "Mumbai");
console.log(bindTest); // will print the f{} 
bindTest(); 

// the only difference between call and bind is that
// bind gives you a copy which can be invoked later
// call invokes the method right there instantly
