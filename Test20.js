// async await
const o = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("o resolved");
  }, 5000);
});

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p resolved");
  }, 15000);
});

const q = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("q resolved");
  }, 15000);
});

async function getData() {
  console.log("hello wolrd");

  const res0 = await o;
  console.log(res0);

  const res = await p;
  console.log(res);

  const res2 = await q;
  console.log(res2);
}
// the thing to remember here is that javascript doesnt wait for shit 
// as we know due to await the get data function will be popped out of the stack 
// but ofc other stuff that exist will be executed like the test function
getData();
test();
function test(){
    console.log("waiting");
}
// function getData() {
//   // without async and await
//   p.then((res) => console.log(res));
//   console.log("hello world");

//   q.then((res) => console.log(res));
//   console.log("hello world");
// }
// getData();
