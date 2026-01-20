/***  
 * write code that 
 *  calls the getUser() 
 *  when promise succeeds
 *      logs the user object
 *      returns the user's id
 * in the next .then()
 *      logs user ID is _ 
 * add error handling using catch()
 *      logs -  Failed to get user
 * 
 * note :
 * do not use aync await 
 * use promise chaining
 * no pyramid of doom
 * 
 * expected output of the should be :
 *      { id: 1, name: "Alex" }
 *      User ID is 1
 ***/

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Alex" });
    }, 1000);
  });
};
/**
// getUser() already returns a Promise
// Promise.resolve(promise) just returns the same promise
// Promise.resolve(getUser())

“I need a promise to start chaining.”
If a function already returns a promise, never wrap it.
You use Promise.resolve() when:
you don’t know whether something is a promise or value
you want to normalize inputs
*/
getUser()
.then((user)=>{
    console.log(user);
    return user.id;
})
.then((id) =>{
    console.log("User ID is " +id);
})
.catch((err)=>{
    console.error("failed to get user");
});




