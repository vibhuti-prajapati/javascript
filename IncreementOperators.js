let x=0;
console.log(x++); // 0 x=1
console.log(++x); // 2 x=2;
console.log(x--); // 2 x=1;
console.log(--x); // 0 x=0;

// cant chain these operators 
// console.log((x++)++);  // syntax error 
console.log( x++ + ++x);  // 0+2 =2 