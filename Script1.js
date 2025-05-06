function generateShape() {
  const input = document.getElementById("numberInput").value;
  const output = document.getElementById("output");

  if (isNaN(input) || input.trim() === "") {
    alert("Please enter a valid number.");
    return;
  }

  const num = parseInt(input);
  let result = `\nNumber inputted: ${num}\n\n`;

  if (num % 2 === 0) {
    
    for (let i = num; i >= 1; i--) {
      result += (String(i) + ' ').repeat(i).trim() + "\n";
    }
  } else {
    
    for (let i = num; i >= 1; i--) {
      result += (String(i) + ' ').repeat(num).trim() + "\n";
    }
  }

  output.textContent = result;
}
