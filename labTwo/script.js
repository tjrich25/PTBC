function convertTemp(temp, unit){
  if (unit === "F"){
    console.log((temp - 32) * (5/9))
  } else if (unit === "C"){
    console.log((temp * 9/5) + 32);
  }
}
convertTemp(212, "C")

function convertTemp(inputTemp, inputUnit){
  var outputTemp;
if (inputUnit === "F"){
  outputTemp = (inputTemp - 32) * (5/9);
  console.log("The temperature of " + inputTemp + " degrees Fahrenheit, is equal to " + outputTemp + " degrees in Celsius.");
} else if (inputUnit === "C"){
  outputTemp = (inputTemp * 9/5) + 32;
  console.log("The temperature of " + inputTemp + " degrees Celsius, is equal to " + outputTemp + " degrees in Fahrenheit.");
}
}
