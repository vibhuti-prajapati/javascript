// shadowing  b/w var and let variables 

var a=2;
{
    // this is legal shadowing because 
    // -> let will not leak out of the block scope 
    let a=4;
}

let b=4;
{ 
    // illegal shading because 
    // -> var variables not block scoped and will leak out of block 
    // var b=2;
}

// but this same scenario in a function is fine with var 
function x(){
    var b=2;
}
// because var is function scoped 