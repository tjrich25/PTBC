// var statement ="I write JavaScript!";
//
// function writeStatement() {
//   console.log(statement);
// }
//
// writeStatement();

function makePizza(chosenCrust, chosenToppings) {
  var toppings = "";
  chosenToppings.forEach(function(topping, index, arr) {
    if (index === arr.length-1) {
    toppings += topping;
  } else if (index === arr.length-2) {
      toppings += topping + ", and ";
  } else {
    toppings += topping + ", ";
  }
  });
  console.log("Here's your " + toppings +  " pizza with a " + chosenCrust + " crust!");
}
makePizza("butter cheese", ["pepperoni", "black olives", "bacon", "banana peppers", "anchovies", "pineapple"]);
