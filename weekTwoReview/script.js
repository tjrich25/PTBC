// var statement ="I write JavaScript!";
//
// function writeStatement() {
//   console.log(statement);
// }
//
// writeStatement();

function makePizza(chosenCrust, chosenToppings) {
  var toppings = "";
  chosenToppings.forEach(function(topping) {
    toppings += topping;
  });
  console.log("Here's your " + toppings +  " pizza with a " + chosenCrust + " crust!");
}
makePizza("butter cheese", ["pepperoni ", "bacon ", "banana peppers ", "anchovies ", "pineapple"]);
