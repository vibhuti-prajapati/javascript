//* number conversion
// - three ways ->
// parseInt() parseFloat() Number() 

console.log("-----------Number()----------")
// Number() can be used with any value datatype 
console.log("-- on Boolean--")
// - Boolean values true->1 fale->0
console.log(Number(true));
console.log(Number(false));

console.log("-- on Number--") 
// simply returns the number 
console.log(Number(90));
console.log(Number(90.8));

console.log("-- on micellineous--") 
// null ->0 
console.log(Number(null));
// undefined ->NaN
console.log(Number(undefined));
// NaN ->NaN
console.log(Number(NaN)); 

console.log("-- on String--") 
console.log(Number("123")); 
console.log(Number("123blue")); 
console.log(Number("blue7892")); 
console.log(Number("blue")); 
console.log(Number("1.5")); 
console.log(Number("0xA")); 
console.log(Number("nfsnf"));  
console.log(typeof Number("shoe"));
console.log("-----------parseInt()----------")
// better for numbers in string 
// examines string closely and matches a pattern 
// - leading white space is ignored 
// - if the first character is not number or a + , - sign ->NaN returns
// - if it is number conversion goes on until non nmeric char has appeared 
console.log(parseInt("782"));
// if number has even a decimal the parsing is stopped there 
console.log(parseInt("782.67"));
// here no parsing direct NaN returned
console.log(parseInt("ijk8924"));
// in this case 894 will be parsed and returned
console.log(parseInt("894ijk")); 
// NaN returned for the rest of them too
console.log(parseInt(NaN));
console.log(parseInt(undefined));
console.log(parseInt(""));
console.log(parseInt(null));


// radix and different bases in numbers  
console.log(parseInt("0xA"));//10
// octal works too 
console.log(parseInt("070"));//70 , leading zero ignored s becomes 70 
console.log(parseInt("079")); //79 

console.log("---radix---")
// pass the base number as radiz arguement and its parsed that way 
console.log(parseInt("0xAf",16)); // 175

console.log(parseInt("110",2)); //binary 
console.log(parseInt("070",8)); // octal
console.log(parseInt("10",10));// decimal -> good practice alwaays do this 
console.log(parseInt("10",16)); //hexadecimal 

// and if you are giving base you can even skip the prefix 
// console.log(parseInt("Af")); -> this would cause errror
console.log(parseInt("Af",16)); // -> but this causes no error since 2nd arguement is here 

// what happens if you give invalid base number ? radix allowed 2-36
console.log(parseInt("100",1)); // ->NAN 

console.log("-----------parseFloat()----------") 
// WORKS similar to parseInt()
// . decimal point is a valid character though 
console.log(parseFloat("10.3"));    
//.0 -> decimal number parsing
console.log(parseFloat("10.0"));   // 10 
console.log(parseFloat("10"));  //10
// but only first . decimal point is allowed 
// if second one appears -> parsing stops 
console.log(parseFloat("10.34.39"));  
console.log(parseFloat("123blue"));  // 123  
console.log(parseFloat("blue890"));  // NaN 
// leading zeros are ignored 
// recognizes only floating point and decimal point formats only 
// any other base numbers are not recognized 
// there is no radix mode in here 
console.log(parseFloat("0xAF")); // zero retuned 
// octal but leading zero ignored 
console.log(parseFloat("070")); 





