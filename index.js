// function buildFunctions() {
//   const arr = [];

//   for (var i = 0; i < 3; i++) {
//     arr.push(function() {
//       console.log(i);
//     });
//   }

//   return arr;
// }

// const functions = buildFunctions();
// functions[0](); 
// functions[1](); 
// functions[2](); 

// function createCounter() {
//   let count = 0;
//   return {
//     increment: function() {
//       count++;
//     },
//     getValue: function() {
//       return count;
//     }
//   };
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// console.log(counter.getValue());  


// function x(){
//     for (var i = 0; i <=5; i++) {
//     setTimeout(function (){
//         console.log(i);
//     },i*1000);
//     } 
//     console.log(" testing js ");
// } 

function counter(){
    let count =0;
    function increment(){
        count++;
        console.log(count);
    }
    return increment;
}  
let c = counter();
document.getElementById("clickMe").addEventListener("click", c() );