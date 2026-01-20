// given 
function fetchUser() {
  return Promise.resolve({ id: 1, name: "Alex" });
}

function fetchOrders(userId) {
  return Promise.resolve([
    { id: 101, total: 200 },
    { id: 102, total: 300 },
  ]);
}
/** 
Write code that:

    Fetches the user
    Fetches that user’s orders
    Calculates the total amount spent
    Logs:
        Total spent: <amount>
    Uses promises only 
**/ 
fetchUser()
.then((user)=>{
    return fetchOrders(user.id);
})
.then((orders)=>{
        const total = orders.reduce((sum, order) => sum + order.total, 0);

// Has no return statement So it implicitly returns undefined
    // const total = orders.reduce((sum,order)=>{
    //     sum+=order.total;
    // },0);
    console.log("total = " +total);
});
