"use strict";
//^ this keyword
// var a = 20;
// function data() {
//   var a = 10;
//   console.log(this.a);
// }
// data();
// console.log(this.a);

//^ in global space
// in node this in global object is a empty object {}
// in browser its the window object
// it depends on the js runtime enviroment

// console.log(this);

//^ inside a function
// different in strict and non strict mode
function y() {
  let a = 1;
  console.log(this);
}

//^ in  non-strict mode -  (this substitution)
// whenever the value of this keyword is null or undefined
// it will be replaced with the global object
// only in the non-strict mode

//^ this value depends on how function is called (window)
y();
window.y();

//^ inside a object's method
let obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};
obj.x();
// here this will be the object obj
const student = {
  name: "vibhuti",
  print: function () {
    console.log(this.name);
  },
};
student.print();

//^ call apply bind methods (sharing methods) - call apply and bind methods
const student2 = {
  name: "ramesh",
};
student.print.call(student2);

//^ inside arrow function
let pbj = () => {
  // will take the value of this from its enclosing lexical env
  // output should be the global object or the window object on browser
  console.log(this);
};

//^ inside nested arrow function
// arrow function dont have their own binding
// here arrow func inside arrow func , this keyword will result in global object
let obj2 = {
  a: 10,
  x: () => {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj2.x();

let obj3 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj3.x();

let op = () => {
  const po = () => {
    console.log(this); 
  };
  po();
};
op(); // global object is logged in console

//^ inside DOM element => references to the html element 
// in html file

//!!!!!!!! this inside class and contructors
