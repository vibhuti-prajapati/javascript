const obj = {
  valueOf() {
    return 100;
  },
  toString() {
    return "hello";
  }
};

console.log(`${obj}`);
console.log(String(obj) );
let x="" + obj;
console.log(x);

console.log(typeof x );


