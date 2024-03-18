
/**
 * @param {globalThis.SpreadsheetApp.Spreadsheet} book
 */
function getBookLink_(book) {
  return book.getUrl();
}

function printLink(){
  const book = SpreadsheetApp.getActiveSpreadsheet();
  console.log(getBookLink_(book));
}

function GET_BOOK_LINK() {
  return getBookLink_(SpreadsheetApp.getActiveSpreadsheet());
}