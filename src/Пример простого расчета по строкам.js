/* exported simpleCalculationByRowSample */
function simpleCalculationByRowSample() {
  const book = SpreadsheetApp.getActive();
  const sheet = book.getSheetByName('Пример простого расчета по строкам');
  const data = sheet.getDataRange().getValues();
  data.splice(0, 2); // Отрываем шапку
  const values = data.map(calc_);
  sheet.getRange(3, 4, values.length, values[0].length).setValues(values);
}
function calc_(row) {
  const [param1, param2, name] = row;
  if (name === 'Дмитрий') return [param2 - param1];
  else if (name === 'Павел') return [param2 - param1 + 1];
  return [''];
}
