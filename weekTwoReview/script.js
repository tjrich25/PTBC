// var statement ="I write JavaScript!";
//
// function writeStatement() {
//   console.log(statement);
// }
//
// writeStatement();

// function makePizza(chosenCrust, chosenToppings) {
//   var toppings = "";
//   chosenToppings.forEach(function(topping, index, arr) {
//     if (index === arr.length-1) {
//     toppings += topping;
//   } else if (index === arr.length-2) {
//       toppings += topping + ", and ";
//   } else {
//     toppings += topping + ", ";
//   }
//   });
//   console.log("Here's your " + toppings +  " pizza with a " + chosenCrust + " crust!");
// }

// makePizza("butter cheese", ["pepperoni", "black olives", "bacon", "banana peppers", "anchovies", "pineapple"]);

// function makePizza(groupOrder) {
//   groupOrder.forEach(function(individualOrder) {
//   var toppings = "";
//   individualOrder.toppings.forEach(function(topping, index, arr) {
//     if (index === arr.length-1) {
//     toppings += topping;
//   } else if (index === arr.length-2) {
//       toppings += topping + ", and ";
//   } else {
//     toppings += topping + ", ";
//   }
//   });
//   console.log(individualOrder.name + " ordered a " + toppings +
//   " pizza with a " + individualOrder.crust + " crust!");
// });
// }
//
// var ourOrders = [
//   {
//     name: "Aisha",
//     crust: "cheesy pretzel",
//     toppings: ["goat cheese", "figs", "diced tomatoes"]
//   },
//   {
//     name: "Travis",
//     crust: "parmesan",
//     toppings: ["pepperoni", "bacon"]
//   },
//   {
//     name: "Deleana",
//     crust: "garlic cheese",
//     toppings: ["anchovies", "black olives"]
//   },
//   {
//     name: "Gaoio",
//     crust: "cajun",
//     toppings: ["pepperoni", "bacon"]
//   }
// ];
//
// makePizza(ourOrders);

var numberOne=0;
var numberTwo=1;
for (var i = 0; i < 100; i++ ) {
  if (i === 0) {
    console.log(numberOne);
  } else if (i === 1) {
    console.log(numberTwo)
  } else {
  var result = numberOne + numberTwo;
  numberOne = numberTwo;
  numberTwo = result;
  console.log(result);
  }
}
