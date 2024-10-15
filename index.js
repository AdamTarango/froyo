const orders = {}
const order = prompt(`Enter your Froyo order`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);
const arrOrder = order.split(`,`);

for (i = 0; i < arrOrder.length; i++) {
  if (arrOrder[i] in orders) {
    orders[arrOrder[i]] ++;
  } 
  else {
    orders[arrOrder[i]] = 1;
    }
  console.log(orders)
}
console.log(orders);