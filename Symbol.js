const ID = Symbol.for("id");
const ID2=Symbol.for("id");
const user = {
  name: "Alice",
  [ID]: 123
};
console.log(user); 
user[ID2]=980; 
console.log(user);

// user.Symbol("age")=98;
// console.log(user);