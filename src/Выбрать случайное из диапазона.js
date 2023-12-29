/**
 * Используется как пользовательская функция
 */
function PICK_RANDOM_FROM(data) {
  return pickRandom_(pickRandom_(data));
}

/**
 * Пример использования в коде
 */
function userActionPickRandomFrom() {
  const range = SpreadsheetApp.getActive().getRange("'Выбрать случайное из диапазона'!C3:G22");
  const values = range.getValues();
  const randomValue = pickRandom_(pickRandom_(values));

  console.log(randomValue);
}

/**
 * Основная реализация
 */
function pickRandom_(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}