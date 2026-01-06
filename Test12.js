// map , filter and reduce 
// and promises  

// creating a promise 
let p = new Promise((res,rej) =>{
    res("done");
});
console.log("after promise");

//consuming a promise
p.then(result => {
    console.log("result");
});
console.log("waiting");


//promise states

// pending 
let q = new Promise(() => {});
console.log(q);  
// fulfilled 
let p2 = Promise.resolve(42);
console.log(p2); 

// promise chain

//Whatever you return from .then()
// becomes the input of the next .then()
Promise.resolve(1)
  .then(val => {
    console.log(val);
    return val + 1;
  })
  .then(val => {
    console.log(val);
    return val + 1;
  })
  .then(val => {
    console.log(val);
  });
