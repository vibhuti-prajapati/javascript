/*
Create a JavaScript Promise that, after a delay of 2 seconds,
either resolves with the message “Hello World” 
or rejects with the error message “Error occurred”.

The outcome (resolve or reject) should be determined by a random condition, 
ensuring a 50/50 chance of either occurring each time the code runs.
*/

const p = new Promise((resolve, reject)=>{
    const suceess =  Math.random() > 0.5;
    setTimeout(() => {
        if(suceess){
            resolve("hello world");
        }else{
            reject("error occured");
        }
    }, 2000);
}); 

p.then(console.log).catch(console.error);