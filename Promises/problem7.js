/*
Input a number, double it, increase it by 10, and then multiply by 3.
Each operation should be in a separate Promise and then chained together.
*/

const double = (num)=> new Promise((resolve) =>resolve (num+num));
const addTen = (num)=> new Promise((resolve)=> resolve(num+10)); 
const multiply3 = (num)=> new Promise((resolve)=> resolve(num*3));

double(5)
.then(addTen)
.then(multiply3)
.then((result)=>{
    console.log(result);
});