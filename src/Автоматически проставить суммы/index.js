/* exported userActionSetFormulasAuto */
/**
 * Устанавливает формулы сумм в отчете согласно правилам
 * @see https://docs.google.com/spreadsheets/d/1zPuzdN7EtTdnxsnZolrjEaBXACkBboy7DWpS4DKWV74/edit#gid=1542690128 Пример данных
 */
function userActionSetFormulasAuto() {
  const book = SpreadsheetApp.getActive();
  const sheet = book.getSheetByName('Автоматически проставить суммы');

  const range = sheet.getRange('J:J');
  const values = range.getValues();
  const backgrounds = range.getBackgrounds();

  let pos = 0;
  const newValues = values.map((row, i) => {
    const [cell] = row;
    const [color] = backgrounds[i];
    if (i < 5) {
      pos = i;
      return [cell];
    }
    if (color === '#0f9d58' && i > pos + 1) {
      const formula = `=SUM(J${pos + 2}:J${i})`;
      pos = i;
      return [formula];
    }
    return [cell];
  });
  range.setValues(newValues);
}
