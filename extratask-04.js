function showDeliveryStatus(arr) {
  const str = [];
  arr.forEach((element) => {
    if (element.deliveryProgress < 100 && element.deliveryProgress !== null) {
      str.push("In progress");
    } else if (element.deliveryProgress === 100) {
      str.push("Done");
    } else {
      str.push("Ready for delivery");
    }
  });
  console.log(str.join(", "));
}
const ordersA = [
  { name: "Phone", price: 12300, deliveryProgress: 50, type: 0 },
  { name: "Computer", price: 230000, deliveryProgress: 100, type: 1 },
  { name: "Tablet", price: 5000, deliveryProgress: null, type: 2 },
];
const ordersB = [
  { name: "Phone", price: 12300, deliveryProgress: 50, type: 0 },
  { name: "Tablet", price: 5000, deliveryProgress: null, type: 2 },
];
showDeliveryStatus(ordersA);
showDeliveryStatus(ordersB);
