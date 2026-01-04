// playing with functions 

// functions are like values in js 

// they can be returned 
function x(){
    function y(){
        console.log("y");
    } 
    // returns the code block of function y
    return y;
} 

// they can be stored in variables 
let a= x(); 
// they can also be declared inside the variable 
let b = function () {
    console.log(b);
}
// when i do 
a(); // y() function is executed   

// functions can be passed to other functions as arguements 
function z(func){
    func();
}
z(a); 

// can just pass function like this too
z(function() {
    console.log(new function);
});


