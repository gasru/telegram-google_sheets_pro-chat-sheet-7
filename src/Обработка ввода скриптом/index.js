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
  if (sheet.getName() !== 'Обработка ввода скриптом1' || row === 1 || column === 1) {
    return;
  }

  const currentRange = sheet.getRange(row, 2, 1, sheet.getLastColumn() - 1);

  const currentValues = currentRange.getValues()[0];
  let prev = 0;
  const newValues = currentValues.map((v) => {
    if (v === '') {
      return v;
    }

    const cur = (String(v).match(/^([\d.]+)/) || [undefined, 'error'])[1]; // Извлекает нужное значение из текущей ячейки
    if (cur === 'error') {
      // Пустая ячейка? Пропускаем
      return '';
    }
    const cur_ = +cur; // Конвертируем в число
    const gain = cur_ - prev; // Вычисляем прирост
    const res = `${cur_} (${gain > 0 ? '+' : ''}${gain})`; // Формируем вывод
    prev = cur_; // Сохраняем как предыдущее значение
    return res;
  });

  currentRange.setValues([newValues]);
  SpreadsheetApp.getActive().toast('Обновлено!');
}
