const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let firstNumber = '';   // Первое число
let operator = '';      // Оператор (+, -, *, /)
let secondNumber = '';  // Второе число

/**
 * Обновляем дисплей: показываем всё выражение
 */
function updateDisplay() {
  // Склеиваем видимую строку
  const expression = firstNumber + (operator ? ' ' + operator + ' ' : '') + secondNumber;
  display.textContent = expression || '0';
}

/**
 * Выполняем простую операцию
 */
function calculate() {
  const a = parseFloat(firstNumber);
  const b = parseFloat(secondNumber);
  let result = 0;

  if (operator === '+') result = a + b;
  if (operator === '-') result = a - b;
  if (operator === '*') result = a * b;
  if (operator === '/') result = b !== 0 ? a / b : 'Error';

  return result.toString();
}

/**
 * Основная логика обработки кнопок
 */
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const num = button.dataset.number;
    const op = button.dataset.operator;
    const act = button.dataset.action;

    // Если нажата цифра
    if (num !== undefined) {
      if (!operator) {
        firstNumber += num;
      } else {
        secondNumber += num;
      }
    }

    // Если нажат оператор
    else if (op !== undefined) {
      if (firstNumber && !secondNumber) {
        operator = op;  // Устанавливаем оператор (только если второе число ещё не введено)
      }
    }

    // Сброс
    else if (act === 'clear') {
      firstNumber = '';
      secondNumber = '';
      operator = '';
    }

    // Вычисление
    else if (act === 'calculate') {
      if (firstNumber && operator && secondNumber) {
        const result = calculate();
        firstNumber = result;
        operator = '';
        secondNumber = '';
      }
    }

    // Обновляем отображение каждый раз
    updateDisplay();
  });
});
