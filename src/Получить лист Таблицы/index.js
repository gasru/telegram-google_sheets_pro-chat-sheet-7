/* exported getSheetById */
/**
 *
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} book
 * @param {number} id
 * @returns {GoogleAppsScript.Spreadsheet.Sheet}
 */
function getSheetById(book, id) {
  return book.getSheets().filter((sheet) => sheet.getSheetId() === id) || undefined;
}
