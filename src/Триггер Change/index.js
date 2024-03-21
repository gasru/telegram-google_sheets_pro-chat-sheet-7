/* exported onChangeBG */

/**
 * Реагирует на изменение формата ячейки
 *
 * @param {*} e
 * @returns
 */
function onChangeBG(e) {
  // console.log(e);
  const sheetName = SpreadsheetApp.getActiveSheet().getName();
  if (e.changeType !== 'FORMAT' || sheetName !== 'Событие изменения цвета') {
    return;
  }
  SpreadsheetApp.getActive().toast(JSON.stringify(e, null, 2));
}
