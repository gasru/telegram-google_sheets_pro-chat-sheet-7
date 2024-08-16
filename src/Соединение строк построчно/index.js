/* exported combineCells */
/**
 * Combines strings from two cells in a row into a single cell.
 * The combined string is bolded if the first cell is not empty.
 */
function combineCells() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName('Соединение строк построчно');
  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();

  const newValues = values.map((row) => {
    const cellA = row[0];
    const cellB = row[1];

    let formattedText = null;
    if (String(cellA).length > 0) {
      formattedText = SpreadsheetApp.newRichTextValue()
        .setText(String(cellA) + ' ' + String(cellB))
        .setTextStyle(0, String(cellA).length, SpreadsheetApp.newTextStyle().setBold(true).build());
    } else {
      formattedText = SpreadsheetApp.newRichTextValue().setText(String(cellB));
    }

    return [formattedText?.build()];
  });

  const targetRange = dataRange.offset(0, 2, dataRange.getNumRows(), 1);
  targetRange.setRichTextValues(newValues);
}
