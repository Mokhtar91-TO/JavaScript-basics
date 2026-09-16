function calculateEquation(firstNumber, operator, secondNumber) {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      if (secondNumber === 0) {
        throw new Error('Cannot divide by zero.');
      }
      return firstNumber / secondNumber;
    default:
      throw new Error('Invalid operator.');
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculateEquation };
}

if (typeof document !== 'undefined') {
  document.getElementById('calculator-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstNumber = Number(document.getElementById('first-number').value);
    const operator = document.getElementById('operator').value;
    const secondNumber = Number(document.getElementById('second-number').value);
    const resultElement = document.getElementById('result');

    try {
      resultElement.textContent = `Result: ${calculateEquation(firstNumber, operator, secondNumber)}`;
    } catch (error) {
      resultElement.textContent = `Error: ${error.message}`;
    }
  });
}

if (typeof module !== 'undefined' && require.main === module) {
  const readline = require('readline');
  const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  input.question('Enter the first number: ', function (firstNumberInput) {
    input.question('Enter an operator (+, -, *, /): ', function (operator) {
      input.question('Enter the second number: ', function (secondNumberInput) {
        const firstNumber = Number(firstNumberInput);
        const secondNumber = Number(secondNumberInput);

        try {
          if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
            throw new Error('Please enter valid numbers.');
          }

          console.log(`Result: ${calculateEquation(firstNumber, operator, secondNumber)}`);
        } catch (error) {
          console.log(`Error: ${error.message}`);
        } finally {
          input.close();
        }
      });
    });
  });
}
