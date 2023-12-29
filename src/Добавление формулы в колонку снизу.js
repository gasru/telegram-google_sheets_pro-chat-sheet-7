function userActionArrFormulasBelow() {
  const sheet = SpreadsheetApp.getActive().getSheetByName('Добавление формулы в колонку снизу');
  const range = sheet.getRange('B:D');
  const values = range.getValues();
  const formulas = range.getFormulas();
  const lrValues = values.findLastIndex(row => row.join('') !== '');
  const lrFormulas = formulas.findLastIndex(row => row.join('') !== '');
  if(lrValues === lrFormulas) return;
  sheet.getRange(lrValues + 2, 2, 1, 3).setValue(`=SUM(B2:B${lrValues + 1})`);
}
