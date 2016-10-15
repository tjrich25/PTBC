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
var container = document.getElementById('list');
groceries.forEach(function(element){
  var listItem = document.createElement('li');
  listItem.innerHTML = element.name + ' ' + element.price;
  container.appendChild(listItem);
  total += element.price
});

var totalContainer = document.createElement('li');
totalContainer.innerHTML = total;
container.appendChild(totalContainer);
