function display(value) {
    // Check if the last character is an operator to avoid concatenation issues
    var result = document.getElementById("result").value;
    if (isNaN(result.charAt(result.length - 1)) && isNaN(value)) {
      return; // Don't append operator after another operator
    }
    document.getElementById("result").value += value;
  }
  
  function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  function calculate() {
    var expression = document.getElementById("result").value;
    try {
      // Use eval() cautiously and handle potential errors
      var result = eval(expression);
      document.getElementById("result").value = result;
    } catch (error) {
      document.getElementById("result").value = "Error";
    }
  }
  