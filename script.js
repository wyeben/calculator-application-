let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.querySelector('.display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.querySelector('.display').value = displayValue;
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    document.querySelector('.display').value = result;

    displayValue = result.toString();
  } catch (error) {
    document.querySelector('.display').value = 'Error';
  }
}
