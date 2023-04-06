function userActionCopySheetAndProtections() {
  const book = SpreadsheetApp.getActive();
  const sheet = SpreadsheetApp.getActiveSheet();
  const copy = sheet.copyTo(book);
  sheet
    .getProtections(SpreadsheetApp.ProtectionType.RANGE)
    .forEach((protection) => copyProtection_(copy, protection.getRange().getA1Notation(), protection));
}

/**
 * @param {globalThis.SpreadsheetApp.Spreadsheet} book
 * @param {string} rangeA1
 * @param {globalThis.SpreadsheetApp.Protection} template
 */
function copyProtection_(sheet, rangeA1, template) {
  var range = sheet.getRange(rangeA1);
  var protection = range.protect();
  var me = Session.getEffectiveUser();
  protection.addEditor(me);
  protection.removeEditors(protection.getEditors());
  protection.addEditors(template.getEditors());
}
