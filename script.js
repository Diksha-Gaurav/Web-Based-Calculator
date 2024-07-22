let display = document.getElementById("result");
let buttons = document.querySelectorAll("button");

let buttonsArray = Array.from(buttons);
let string = "";
// Function to handle button click input
function handleInput(value) {
  if (value == "DEL") {
    string = string.substring(0, string.length - 1);
    display.value = string;
  } else if (value == "AC") {
    string = "";
    display.value = string;
  } else if (value == "=") {
    try {
      // Use eval to evaluate the string expression
      string = eval(string).toString(); // Convert the result to string
      display.value = string;
    } catch (error) {
      display.value = "Error";
      string = "";
    }
  } else if (value == "%") {
    try {
      // Calculate the percentage
      string = (eval(string) / 100).toString(); // Calculate percentage
      display.value = string;
    } catch (error) {
      display.value = "Error";
      string = "";
    }
  } else {
    if (value == "÷") {
      string += "/";
    } else if (value == "×") {
      string += "*";
    } else {
      string += value;
    }
    display.value = string;
  }
}

// Add event listener to buttons
buttonsArray.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    handleInput(e.target.innerHTML);
  });
});
