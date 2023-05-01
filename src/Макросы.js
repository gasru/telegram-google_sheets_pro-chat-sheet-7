/* exported activateLast */
function activateLast() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getCurrentCell().getNextDataCell(SpreadsheetApp.Direction.DOWN).activate();
}
