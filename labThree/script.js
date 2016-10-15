var item1 = {
	name: "milk",
	price: 3
};
var item2 = {
	name: "bread",
	price: 2
};
var item3 = {
	name: "fruit",
	price: 1
};

var groceries = [item1, item2, item3];
var total = 0
groceries.forEach(function(element){
  console.log(element.name + " " + element.price);
  total += element.price
});

console.log(total);
