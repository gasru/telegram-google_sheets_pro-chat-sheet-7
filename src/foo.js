function foo() {
  const table = SpreadsheetApp.getActive();
  const sheet = table.getSheets()[1];
  const value = sheet.getRange(1, 1).getValue();
  console.log(value);
}
