// script.js
function calculateFibonacci() {
  var n = parseInt(prompt("Please enter a number"));
  var f = 0;
  var s = 1;
  var result = "";

  if (n <= 0) {
    result = "Please enter a positive number";
  } else if (n === 1) {
    result = "Fibonacci Series\n" + f;
  } else if (n === 2) {
    result = "Fibonacci Series\n" + f + ", " + s;
  } else {
    result = "Fibonacci Series\n" + f + ", " + s + " ";
    
    for (var i = 2; i < n; i++) {
      var next = f + s;
      f = s;
      s = next;
      result += next + " ";
    }
  }

  document.getElementById("output").textContent = result;
}
