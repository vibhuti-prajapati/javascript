let a=6;
let b=7;

function simpleTag(strings, a,b,sum){
    console.log(strings);
    console.log(a);
    console.log(b);
    console.log(sum); 
}

let taggedString = simpleTag`${a} + ${b} = ${a+b}`;

console.log(taggedString);