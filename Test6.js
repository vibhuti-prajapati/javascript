// +learning more about let and const 
//covered before  
// cannot intitialize const variable later
// const a;
// a=56; 

// declaration and intialization both should happen at the same time 
const b= 400;
let c =600;

// var is function scoped but not block scoped 
var d=100;
// const and let are both block scoped  
{
    var d=200;
    const b=500;
    let c=800;
    console.log(b);
    console.log(c);
    console.log(d);
    
}

    console.log(b);
    console.log(c);
    console.log(d);
    