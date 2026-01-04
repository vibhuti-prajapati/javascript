// problem with closures set timeout 

// trying to print 1 to n in interval for each 1.. n seconds
// for (var i = 0; i <=5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     },i*1000);
// }
// // fails because var is not block scoped so every call back function \ gets same variable reference

// for fix 
// for (let i = 0; i <=5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     },i*1000);
// }
// this works because let is block scoped so every callback gets each copy of let 

// fix with var using closures 
for (var i = 0; i <=5; i++) { 
    function n(i){
    setTimeout(() => {
        console.log(i);
    },i*1000);
    }
    n(i);
}