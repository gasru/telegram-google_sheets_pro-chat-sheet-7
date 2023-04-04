/* exported onEditAsOwner */

/**
 *
 * @param {{
 *   source: GoogleAppsScript.Spreadsheet.Spreadsheet;
 *   range: GoogleAppsScript.Spreadsheet.Range;
 * }} e
 */
function onEditAsOwner(e) {
  if (e.range.getColumn() === 7 && e.source.getActiveSheet().getName() == 'Начальство') {
    e.source.toast('Работаем ...');
    /** @type {GoogleAppsScript.Spreadsheet.Sheet} */
    const sheet = e.source.getSheetByName('Сотрудник');
    sheet.sort(1);
    const date = e.range.offset(0, -6).getValue();
    if (!date || !date.getTime) return;
    const tz = e.source.getSpreadsheetTimeZone();
    const cDate = dateToString_(date, tz);
    const values = sheet
      .getRange('A:A')
      .getValues()
      .map((row) => (row[0] && row[0].getTime ? dateToString_(row[0], tz) : ''));
    const start = values.findIndex((s) => s === cDate);
    const end = values.findLastIndex((s) => s === cDate);
    if (start === -1) return;

    if (e.value === 'Verilib') {
      sheet.getRange(start + 1, 7, end - start + 1, 1).setValue('Verilib');
      const protection = sheet
        .getRange(start + 1, 1, end - start + 1, 7)
        .protect()
        .setDescription(cDate);
      const me = e.source.getOwner();
      protection.addEditor(me);
      protection.removeEditors(protection.getEditors());
    } else {
      sheet.getRange(start + 1, 7, end - start + 1, 1).setValue('');
      sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE).forEach((pr) => {
        if (pr.getDescription() === cDate) pr.remove();
      });
    }
    e.source.toast('Готово');
  }
}

function dateToString_(date, tz) {
  return Utilities.formatDate(date, tz, 'yyyy-MM-dd');
}
