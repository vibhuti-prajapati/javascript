//polyfill for bind method
// what is polyfill ?
// its sort of a fallback incase your browser doesnt support the function

let obj = {
  firstName: "vibhuti",
  lastName: "prajapati",
};

let printName = function () {
  console.log(this.firstName + " " + this.lastName);
};

let printMyName = printName.bind(obj);
printMyName();

//  polyfill of bind
Function.prototype.myBind = function () {};

let printMyName2 = printName.myBind(obj);
printMyName2();
