/* exported triggerActionOnEditFire */
/**
 *
 * @param {GoogleAppsScript.Events.SheetsOnEdit} e
 */
function triggerActionOnEditFire(e) {
  const range = e.range;
  const sheet = range.getSheet();
  const row = range.getRow();
  const column = range.getColumn();
  if (sheet.getName() !== 'Обработка ввода скриптом' || row === 1 || column === 1) {
    return;
  }

  const currentRange = sheet.getRange(row, 2, 1, sheet.getLastColumn() - 1);

  const currentValues = currentRange.getValues()[0];
  let prev = 0;
  const newValues = currentValues.map((v) => {
    if (v === '') {
      return v;
    }

    const cur = +(String(v).match(/^([\d.]+)/) || [undefined, 0])[1];
    const gain = cur - prev;
    const res = `${cur} (${gain > 0 ? '+' : ''}${gain})`;
    prev = cur;
    return res;
  });

  currentRange.setValues([newValues]);
  SpreadsheetApp.getActive().toast('Обновлено!');
}
