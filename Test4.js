//scope and  lexcial enviroment

function x(){
    var z =3;
    function y(){
        console.log(z);
    }
    z=20;
return y;
}
let z= x();
z();