const ordering = (arrOrder) => {
  const orders = {}

  for (i = 0; i < arrOrder.length; i++) {
    if (arrOrder[i] in orders) {
      orders[arrOrder[i]] ++;
    } 
    else {
      orders[arrOrder[i]] = 1;
      }
  }
  return orders
}
const order = prompt(`Enter your Froyo order`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);
const froyos = order.split(`,`);
console.log(ordering(froyos));