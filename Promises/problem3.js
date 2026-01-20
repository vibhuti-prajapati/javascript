// given 
function getUser() {
  return Promise.resolve({ id: 1, name: "Alex" });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["post1", "post2"]);
    }, 1000);
  });
}

/** 
Write code that:

Calls getUser()
Uses the returned user.id to call getPosts(user.id)
Logs the posts array
Uses promise chaining
**/ 

getUser()
.then((user)=>{
    return getPosts(user.id);
})
.then((posts)=>{
    console.log(posts);
});  

// You must access the resolved value inside .then()
// You can only use async results inside the chain that produced them.
// getUser()
// .getPosts((user.id))
// .then((posts)=>{
//     console.log(posts);
// });