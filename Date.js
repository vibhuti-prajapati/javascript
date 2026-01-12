let a= new Date("hi");
console.log(a);

a= new Date("2025-05-09");
console.log(a);

a= new Date("05-09-2024");
console.log(a); 

// If parsing or conversion fails → Invalid Date
a= new Date("202349023840");
console.log(a);

// JavaScript treats it as milliseconds since 1 Jan 1970 (Unix Epoch)
a= new Date(17);
console.log(a);

a= new Date(17000000000000);
console.log(a);

// anything else (boolean, object, etc.) → it is first converted to a number
//THEN the previous number as miliseconds rule applies
a= new Date(true);
console.log(a);

s=new Date(false);
console.log(a); 

a= new Date() + 1;
console.log(a);
