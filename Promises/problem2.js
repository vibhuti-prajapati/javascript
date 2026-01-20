// given 
function getOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve({ orderId: 101, amount: 250 });
      } else {
        reject("Order service failed");
      }
    }, 1000);
  });
}
/*** 
 * Using Promises only:

    Call getOrder()
    If it succeeds:
        log the order
        return order.amount
    In the next .then():
        log "Order amount is <amount>"
    If it fails:
        log "Could not fetch order"

Constraints:
❌ No async/await
❌ No nesting .then()
✅ Use .catch()
 ***/

getOrder()
.then((order) =>{
    console.log(order);
    return order.amount;
})
.then((amount)=>{
    console.log("order amount is " +amount);
})
.catch((err)=>{
    console.error("could not fetch order " +err);
});
