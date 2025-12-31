//* boolean type 
//returns false for both 
 console.log(true===1);
 console.log(false===0);

 //returns true for both 
  console.log(true==1);
 console.log(false==0);

 //^ conversion 

 //! falsy values -> 0 NaN false ""
 console.log(Boolean(""));
 console.log(Boolean(undefined));
 console.log(Boolean(NaN));
 console.log(Boolean(0));

  //& everything else is truthy value
console.log(Boolean("hello"));
console.log(Boolean(-1)); 

// empty object returns true 
console.log(Boolean({}));
console.log(Boolean([]));

console.log(Boolean(new Boolean(false)));




 