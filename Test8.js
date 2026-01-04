// closures 
function x(){
    var a=90; 
    function y(){
        function z(){
        console.log(a);
        }
        z();
    }
    a=100;
    y();
}
x();
// closures conatin the variable reference not the value 