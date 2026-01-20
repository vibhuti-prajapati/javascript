// given

function step1() {
  return Promise.resolve("step1");
}

function step2(value) {
  return Promise.reject("step2 failed");
}

function step3(value) {
  return Promise.resolve("step3");
}

/*
Write code that:

    Calls step1
    Passes its value to step2
    Passes its value to step3
    Logs "Done" only if all steps succeed
    Logs "Error occurred" if any step fails 
*/

step1()
.then((value)=>{
    return step2(value);
})
.then((value)=>{
    return step3(value);
})
.then((value)=>{
    console.log("Done");
})
.catch((err)=>{
    console.error("error occured : " +err);
});