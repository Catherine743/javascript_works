var orders = {
    pizza : 10,
    burger : 20,
    pepsi : 25,
    alfham : 27,
}

var newOrderItem = "burger";
var qty = 2;

if(newOrderItem in orders){
    orders[newOrderItem] += qty;
}
else{
    orders[newOrderItem] = qty;
}

console.log(orders);

