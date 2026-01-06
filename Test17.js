// async await
async function x() {
  // async functions return a  promise
  // even if you return a value it will be wrapped inside a promise
  return "a string";
}
const data = x();
console.log(data);
data.then((res) => console.log(res));
 

