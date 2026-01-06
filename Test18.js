// async await
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("PROMISE resolved");
  }, 10000);
});

// const q = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("q resolved");
//   }, 5000);
// });

async function getData() {
  const res = await p;
  console.log("hello wolrd");
  console.log(res);

  const res2 = await p;
  console.log("hello world again");
  console.log(res2);
}
getData();

// function getData() {
//   // without async and await
//   p.then((res) => console.log(res));
//   console.log("hello world");
// }
// getData();
