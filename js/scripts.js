function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// UI

$(document).ready(function() {
  $("#addButton").click(function() {
    const number1 = parseInt($("#number1").val());
    const number2 = parseInt($("#number2").val());

    $("#answerField").text(number1 + " + " + number2 + " = " + add(number1, number2));
  });
});




// function farenheitToCelsius(tempF){
//   return (tempF-32)*(5/9);
// }

// const number1 = parseInt(prompt("Enter a number:"));
// const number2 = parseInt(prompt("Enter another number:"));
// const result = divide(number1, number2);
// const temp = parseInt(prompt("Please enter the temperature in degrees Farenheit"))
// const result = farenheitToCelsius(temp);
// alert(result);