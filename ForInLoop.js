const sym = Symbol("secret");
const obj = { a: 1, [sym]: 2 };

// symbols are invisible in for in loops 
for (const key in obj) {
  // console.log(obj[key]);
}
// index is printed
for(const key in [1,2,3,4]){
  console.log(key);
}

// sparce array behave different 
for(const key in [1,2,,4]){
  console.log(key);
}